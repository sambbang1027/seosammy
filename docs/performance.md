# 성능 이슈 기록

## 스크롤 끊김 (Scroll Jank)

**발견일**: 2026-06-08  
**상태**: ✅ 해결 (2026-06-08)

### 증상

페이지 스크롤 시 전반적으로 프레임 드랍 및 버벅임 발생.  
특히 Intro → Skill 섹션 구간에서 심각.

---

### 원인 분석

#### 1. WebGL Canvas 두 개 동시 실행 — 심각도 🔴

**파일**: `app/components/sections/IntroSection.tsx`, `app/components/sections/SkillSection.tsx`

두 섹션 모두 `<BubbleCanvas>` (= `<Canvas>`)를 가지고 있고,  
스크롤 중에는 두 Canvas가 동시에 DOM에 마운트된 채 각자의 WebGL 렌더 루프를 실행함.  
GPU/CPU가 두 개의 3D 씬을 매 프레임 동시 렌더링. 버블을 터뜨리지 않아도 스크롤만으로 항상 발생하는 **스크롤 끊김의 실질적 원인**.

**검토한 해결 방향**

**A안 — React Three Fiber `<View>` 패턴 (기각)**  
단일 전역 Canvas 하나에 `<View.Port />`를 두고, 각 섹션은 `<View track={ref}>`로 렌더링 영역만 지정하는 방식.  
WebGL 컨텍스트가 1개로 줄어 이론적으로 가장 효율적이나, 전역 Canvas를 `position: fixed`로 올릴 경우 root 스택 컨텍스트에서 z-index 충돌 발생.  
Intro 섹션의 이름 텍스트(z-50), 프로필 이미지(z-40)가 Canvas 아래로 깔리는 레이어링 문제로 기각.

**B안 — `IntersectionObserver` + `frameloop` 제어 (채택)**  
Canvas 구조는 그대로 유지하고, 각 Canvas가 뷰포트에 보일 때만 렌더링하도록 제어.  
R3F `Canvas`의 `frameloop` prop을 `"always"` / `"never"` 사이에서 동적으로 전환.  
기존 레이어링, 포인터 이벤트, 컴포넌트 구조를 전혀 건드리지 않아 안전하게 적용 가능.

**적용 코드** (`app/components/bubble/BubbleCanvas.tsx`)

```ts
const [frameloop, setFrameloop] = useState<"always" | "never">("never");
const containerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (!containerRef.current) return;
  const observer = new IntersectionObserver(
    ([entry]) => setFrameloop(entry.isIntersecting ? "always" : "never"),
    { threshold: 0.01 }  // 1% 이상 보이면 렌더링 시작
  );
  observer.observe(containerRef.current);
  return () => observer.disconnect();
}, []);

// Canvas에 전달
<Canvas frameloop={frameloop} ... />
```

**동작 흐름**
```
Intro 섹션 진입   → IntersectionObserver 감지 → frameloop: "always" → 렌더링 시작
Skill 섹션으로 이동 → Intro Canvas 뷰포트 이탈 → frameloop: "never"  → 렌더링 정지
                   → Skill Canvas 뷰포트 진입  → frameloop: "always" → 렌더링 시작
```

**결과**: 최대 FPS 57 → 60 도달, 스크롤 끊김 해소 확인.  
일반 섹션(Three.js 없음)에서 FPS가 낮게 측정되는 것은 브라우저가 변화 없는 프레임을 건너뛰는 정상 최적화 동작.

---

#### 2. `meshPhysicalMaterial` 과중 설정 — 심각도 🟠

**파일**: `app/components/bubble/Bubble.tsx` — `BubbleMaterial` 컴포넌트

Three.js에서 가장 연산 비용이 높은 재질에 `transmission`(유리 투과) + `iridescence`(홀로그램) + `envMapIntensity`를 조합.  
버블 개수에 비례해 GPU 부하 증가.

```ts
// Bubble.tsx:218 — 현재 설정
<meshPhysicalMaterial
  transmission={0.9}      // 유리 투과 (매우 비쌈)
  iridescence={1}         // 홀로그램 반사
  iridescenceIOR={1.3}
  iridescenceThicknessRange={[0, 1400]}
  envMapIntensity={1}
  ...
/>
```

**해결 방향**: `transmission` 제거, `meshStandardMaterial` + `opacity` + `envMapIntensity` 조합으로 대체.  
시각적 차이 최소화하면서 연산량 대폭 감소 가능.

---

#### 3. `setParticles` in `useFrame` — 심각도 🟡

**파일**: `app/components/bubble/Bubble.tsx` — `BubbleParticles` 컴포넌트

`useFrame` 콜백 안에서 React 상태(`setParticles`)를 매 프레임 업데이트하고 있음.  
이론상 메인 스레드를 블로킹하지만, 버블 터뜨릴 때만 발생하고 실제 체감 끊김은 크지 않음.

```ts
// Bubble.tsx:86
useFrame((_, delta) => {
  setParticles(prev => { ... }); // React 상태 업데이트를 60fps로 호출
});
```

**해결 방향**: 파티클 데이터를 `useRef`로 관리하고, 렌더링은 `instancedMesh`로 처리.

---

### 수정 우선순위

| 순위 | 항목 | 예상 효과 |
|---|---|---|
| 1 | Canvas `frameloop="demand"` 또는 뷰포트 외 언마운트 | 스크롤 끊김 직접 해소 |
| 2 | `meshPhysicalMaterial` → `meshStandardMaterial` 경량화 | 렌더당 연산량 감소 |
| 3 | `setParticles` → `useRef` + `instancedMesh` 전환 | 파티클 중 미세 개선 |
