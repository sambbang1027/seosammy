# PRD — sam-site 포트폴리오

## 1. 프로젝트 개요

개발자 **서샘이(Sammy)**의 개인 포트폴리오 웹사이트.  
단순한 정적 소개 페이지가 아닌, 3D 인터랙티브 요소와 애니메이션을 통해 개발자의 개성과 기술력을 동시에 어필하는 것이 목표.

---

## 2. 기술 스택

| 구분 | 기술 |
|---|---|
| 프레임워크 | Next.js 16 (App Router) |
| 언어 | TypeScript 5 |
| UI | React 19, Tailwind CSS v4 |
| 3D | Three.js, React Three Fiber (R3F), React Three Drei |
| 애니메이션 | Framer Motion, React Spring (react-spring/three) |
| 아이콘 | react-icons |
| 배포 환경 | (미정) |

---

## 3. 페이지 구조

단일 페이지(Single Page) 구성. 스크롤로 섹션 간 이동.

```
/ (메인)
├── IntroSection       ← Hero
├── AboutMe Section    ← 자기소개
├── EducationSection   ← 교육 이력
├── SkillSection       ← 기술 스택
└── ProjectSection     ← 프로젝트 (미구현)
```

---

## 4. 섹션별 요구사항

### 4.1 IntroSection (Hero)

**목적**: 첫인상. 이름과 3D 아바타를 중심으로 몰입감 있는 진입 화면 제공.

**구현 현황**: ✅ 완료

**기능 요구사항**
- 이름(`SeoSamMy`) 타이포그래피를 대·소문자 대비로 표시 (clamp 반응형)
- 3D GLB 아바타 렌더링 (`AvatarScene`)
- 인터랙티브 버블(headphone, cursor, smile, spring 아이콘) 4개 부유
- 섹션 이동 네비게이션 버튼: About Me / Skill / Project
  - PC: 아바타 옆 기울어진 스티커 형태
  - Mobile: 하단 가로 나열 pill 버튼
- 배경 그라데이션(`intro-bg`)

---

### 4.2 AboutMeSection

**목적**: 개발자의 인물 소개, 성격, 가치관 전달.

**구현 현황**: 🔧 구조 완료 / 콘텐츠 미완성 (placeholder 텍스트)

**기능 요구사항**
- 배경 대형 워터마크 텍스트 `ABOUT ME` (상단 + 하단 PC전용)
- 좌측: 이름(한글), 직책 한줄 설명, 소개 본문
- 중앙: 프로필 사진 (`foraboutme.png`, rounded-[40px])
- 우측 하단: 가치관(value) 카드 - glassmorphism 스타일

**콘텐츠 작성 필요 항목**
- [ ] 직책/한줄 소개 (현재: "블라블라 하는 개발자")
- [ ] 소개 본문 (현재: NCT 관련 placeholder)
- [ ] 가치관 카드 내용

---

### 4.3 EducationSection

**목적**: 교육 이력을 타임라인으로 시각화.

**구현 현황**: ✅ 구조 완료 / 성과 내용 미완성

**기능 요구사항**
- 중앙 수직 타임라인 (PC), 왼쪽 정렬 (Mobile)
- 배경 워터마크: `EDUCA` (좌상단) + `TION` (우하단) — PC only
- 카드: glassmorphism, hover scale 효과
- 각 항목: 과정명, 기간, 기관, 성과 리스트

**현재 교육 데이터**
| # | 과정명 | 기간 | 기관 |
|---|---|---|---|
| 1 | 시스원 공공 SI 개발자 양성과정 | 2025.05 ~ 11 | 한국소프트웨어산업협회 |
| 2 | MSA기반 풀스택 개발자 양성과정 | 2024.08 ~ 12 | 한국소프트웨어산업협회 |

**콘텐츠 작성 필요 항목**
- [ ] 각 과정의 실제 성과/수료 내용 작성

---

### 4.4 SkillSection

**목적**: 기술 스택을 인터랙티브하게 탐색 가능하도록 전시.

**구현 현황**: ✅ Part 1 완료 (버블 배치 + 모달 렌더링)

**기능 요구사항**

**PC (768px 이상)**
- 배경 타이포 `WHAT CAN I DO?` (중앙 대형)
- 3D 버블에 카테고리 폴더 아이콘 삽입 (6종)
- 버블 클릭 → `bubblePop` 이벤트 발생 → `SkillDetailModal` 오픈
- 버블 터지는 파티클 이펙트 (bubble/droplet 혼합)
- 버블 부유 애니메이션 (sin/cos 기반 독립 위상)

**Mobile (768px 미만)**
- 배경 타이포 동일
- 폴더 SVG 아이콘 + 카테고리명으로 절대 위치 배치
- 탭 클릭 → `SkillDetailModal` 오픈 (풀스크린 슬라이드업)

**SkillDetailModal**
- PC: glassmorphism 팝업, 좌측 카테고리 탭, 우측 스킬 목록
- Mobile: 풀스크린, 상단 헤더 + 스크롤 가능한 스킬 리스트

**카테고리 구성**

| 카테고리 | 현재 스킬 | 아이콘 파일 |
|---|---|---|
| All | React, TypeScript | all-folder.svg |
| Language | TypeScript, JavaScript | language-folder.svg |
| Frontend | React, Next.js | frontend-folder.svg |
| Backend | Node.js | backend-folder.svg |
| Database | PostgreSQL | db-folder.svg |
| Infra | AWS | infra-folder.svg |

**콘텐츠 작성 필요 항목**
- [ ] 각 스킬의 실제 desc 작성 (현재: "어쩌고 저쩌고 블라블라" 등 placeholder)
- [ ] 각 스킬에 맞는 실제 아이콘 파일 추가 (현재 모두 react.png 사용)

---

### 4.5 ProjectSection

**목적**: 주요 프로젝트를 카드 형태로 소개.

**구현 현황**: ❌ 미구현

**기능 요구사항 (예정)**
- 프로젝트 카드 리스트
- 각 카드: 프로젝트명, 설명, 사용 기술 태그, GitHub/배포 링크
- 반응형 그리드 레이아웃

---

## 5. 공통 디자인 시스템

### 색상 (globals.css 기반 추정)
| 변수 | 역할 |
|---|---|
| `--color-primary` | 메인 블루 (`#004571`) |
| `--color-secondary` | 서브 컬러 |

### 폰트
| 폰트 | 용도 |
|---|---|
| Inter | 본문 기본체 |
| Alfa Slab One | 헤드라인 대형 타이포 (`font-alfa`) |

### 컴포넌트 패턴
- **Glassmorphism**: `bg-white/70 backdrop-blur border border-white/80`
- **반응형 타이포**: `text-[clamp(min, fluid, max)]`
- **버블 물리**: Three.js `meshPhysicalMaterial` + `iridescence`

---

## 6. 버블 시스템 아키텍처

```
BubbleContext (Provider)
└── bubbles: BubbleConfig[]   ← 섹션마다 다른 버블 배열 주입

BubbleCanvas (R3F Canvas)
└── Bubble (통합 컴포넌트)
    ├── BubbleWithIcon  ← icon prop 있을 때
    │   └── 아이콘 텍스처 + skillCategory 이벤트
    └── BubbleEmpty     ← icon prop 없을 때 (장식용)

공통 로직
├── useBubbleAnimation()  ← 터짐/파티클 상태 관리
├── BubbleMaterial        ← meshPhysicalMaterial 공통 재질
└── BubbleParticles       ← 터질 때 파티클 이펙트
```

**버블 터짐 이벤트 흐름 (PC Skill)**
```
버블 클릭
  → handlePop()
  → window.dispatchEvent("bubblePop", skillCategory)
  → SkillSection useEffect 수신
  → setActiveSkill(skillCategory)
  → SkillDetailModal 렌더링
```

---

## 7. 미완성 / 다음 작업 목록

| 우선순위 | 작업 | 섹션 |
|---|---|---|
| 🔴 High | ProjectSection 구현 | Project |
| 🔴 High | 스킬 아이콘 파일 실제 추가 | Skill |
| 🟡 Mid | About Me 실제 콘텐츠 작성 | About |
| 🟡 Mid | 스킬 desc 실제 내용 작성 | Skill |
| 🟡 Mid | 교육 성과 내용 작성 | Education |
| 🟢 Low | 네비게이션 바 (헤더) 추가 검토 | 공통 |
| 🟢 Low | SEO 메타데이터 설정 | 공통 |
| 🟢 Low | 배포 환경 세팅 (Vercel 등) | 인프라 |
