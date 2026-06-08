# sam-site

서샘이(Sammy)의 개인 포트폴리오 웹사이트.  
3D 버블 인터랙션과 애니메이션으로 구성된 싱글 페이지 포트폴리오.

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
│   │   │   ├── Bubble.tsx            # 버블 컴포넌트 (아이콘 유무 분기)
│   │   │   └── BubbleCanvas.tsx      # R3F Canvas 래퍼
│   │   └── sections/
│   │       ├── IntroSection.tsx      # Hero 섹션
│   │       ├── AboutMeSection.tsx    # 자기소개 섹션
│   │       ├── EducationSection.tsx  # 교육 이력 타임라인
│   │       ├── SkillSection.tsx      # 기술 스택 (3D 버블)
│   │       └── SkillDetailModal.tsx  # 스킬 상세 모달
│   ├── context/
│   │   └── BubbleContext.tsx         # 버블 설정 공유 Context
│   ├── data/
│   │   ├── skillData.ts              # 버블 위치/아이콘 설정
│   │   └── skillDetailData.ts        # 스킬 카테고리 및 상세 데이터
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── icons/                        # SVG/PNG 아이콘
│   └── images/                       # 프로필 이미지
└── docs/
    └── prd.md                        # 제품 요구사항 문서
```

---

## 페이지 구성

싱글 페이지 구성으로 스크롤로 섹션 이동.

| 섹션 | 설명 | 상태 |
|---|---|---|
| Intro | 이름 타이포 + 프로필 이미지 + 부유 버블 | ✅ 완료 |
| About Me | 프로필 사진 + 소개 + 가치관 카드 | 🔧 콘텐츠 작성 중 |
| Education | 교육 이력 타임라인 | ✅ 완료 |
| Skill | 인터랙티브 3D 버블 기술 스택 | ✅ 완료 |
| Project | 프로젝트 카드 목록 | ❌ 미구현 |

---

## 버블 시스템

Skill 섹션의 핵심 인터랙션.

- **PC**: 3D 버블에 카테고리 폴더 아이콘이 부착되어 공간에 부유. 클릭 시 파티클 이펙트와 함께 터지고 상세 모달 오픈.
- **Mobile**: 폴더 아이콘을 절대 위치로 배치. 탭 시 풀스크린 모달로 슬라이드업.

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
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인.

```bash
# 빌드
npm run build

# 프로덕션 실행
npm start
```
