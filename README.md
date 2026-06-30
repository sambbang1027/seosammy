# sam-site

서샘이(Sammy)의 개인 포트폴리오 웹사이트.  
3D 버블 인터랙션과 애니메이션으로 구성된 싱글 페이지 포트폴리오.

🔗 **[https://seosammy.vercel.app](https://seosammy.vercel.app)**

---

## 기술 스택

| 구분 | 기술 |
|---|---|
| 프레임워크 | Next.js 16 (App Router) |
| 언어 | TypeScript 5 |
| 스타일 | Tailwind CSS v4 |
| 3D | Three.js · React Three Fiber · React Three Drei |
| 애니메이션 | Framer Motion · React Spring |

---

## 프로젝트 구조

```
sam-site/
├── app/
│   ├── components/
│   │   ├── bubble/
│   │   │   ├── Bubble.tsx               # 버블 컴포넌트 (아이콘 유무 분기, hover wobble)
│   │   │   └── BubbleCanvas.tsx         # R3F Canvas 래퍼
│   │   ├── sections/
│   │   │   ├── IntroSection.tsx         # Hero 섹션
│   │   │   ├── AboutMeSection.tsx       # 자기소개 섹션
│   │   │   ├── EducationSection.tsx     # 교육 이력 타임라인
│   │   │   ├── SkillSection.tsx         # 기술 스택 (3D 버블 / 모바일 폴더)
│   │   │   ├── SkillDetailModal.tsx     # 스킬 상세 모달
│   │   │   ├── ProjectSection.tsx       # 메인 프로젝트 목록
│   │   │   └── SideProjectSection.tsx   # 사이드 프로젝트 그리드
│   │   └── ui/
│   │       └── ImageSlider.tsx          # 이미지 슬라이더 (터치 스와이프 지원)
│   ├── context/
│   │   └── BubbleContext.tsx            # 버블 설정 공유 Context
│   ├── data/
│   │   ├── aboutMeData.ts               # 자기소개 텍스트
│   │   ├── educationData.ts             # 교육 이력
│   │   ├── projectData.ts               # 프로젝트 목록
│   │   ├── skillData.ts                 # 버블 위치/아이콘 설정
│   │   └── skillDetailData.ts           # 스킬 카테고리 및 상세 데이터
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── public/
    ├── hdr/                             # 환경맵 (버블 반사)
    ├── icons/                           # SVG/PNG 아이콘
    └── images/                          # 프로젝트·프로필 이미지
```

---

## 페이지 구성

싱글 페이지 구성으로 스크롤로 섹션 이동.

| 섹션 | 설명 |
|---|---|
| Intro | 이름 타이포 + 프로필 이미지 + 부유 버블 |
| About Me | 프로필 사진 + 소개 + 연락처 카드 |
| Skill | 인터랙티브 3D 버블 기술 스택 |
| Project | 메인 프로젝트 (이미지 슬라이더 + 상세) |
| Side Projects | 사이드 프로젝트 카드 그리드 |
| Education | 교육 이력 타임라인 |

---

## 버블 시스템

Intro · Skill 섹션의 핵심 인터랙션.

- **PC**: 3D 버블이 공간에 부유. 호버 시 wobble 애니메이션, 클릭 시 파티클 이펙트와 함께 터지며 스킬 상세 모달 오픈.
- **Mobile**: 폴더 아이콘을 절대 위치로 배치. 탭 시 풀스크린 바텀 시트 모달.

```
BubbleContext (버블 설정 주입)
└── BubbleCanvas (R3F Canvas)
    └── Bubble
        ├── BubbleWithIcon  — 아이콘 + skillCategory 이벤트 발생
        └── BubbleEmpty     — 장식용 투명 버블
```

---

## 시작하기

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인.

```bash
npm run build
npm start
```
