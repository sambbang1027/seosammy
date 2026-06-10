# 작업 목록

## 성능 개선

- [x] **Canvas 뷰포트 밖 비활성화**
  - 파일: `app/components/bubble/BubbleCanvas.tsx`
  - `IntersectionObserver` + `frameloop` 적용, 뷰포트 이탈 시 렌더링 정지
  - 결과: FPS 57 → 60, 스크롤 끊김 해소

- [~] **`meshPhysicalMaterial` 경량화** — 보류
  - 버블 미감(transmission, iridescence)이 핵심 디자인 요소라 변경 시 손해가 더 큼

- [~] **`setParticles` → `useRef` 전환** — 보류
  - 실제 체감 끊김 없음 확인, 현재 우선순위 없음

---

## 프로젝트 섹션

- [x] **프로젝트 데이터 실제 내용으로 교체**
  - 파일: `app/data/projectData.ts`
  - 6개 프로젝트 데이터 작성 완료 (데장간, 북플리, 숨통, 포도알 파이터, HaeHae, 빌려가유)
  - `isFeatured`, `deployUrl`, `notionUrl` 필드 추가

- [ ] **노션 링크 채워넣기**
  - 파일: `app/data/projectData.ts`
  - 6개 프로젝트 전부 `notionUrl: ""` 로 자리 잡아둠
  - 노션 페이지 작성 후 링크 입력하면 됨
  - 렌더링은 이미 구현되어 있음 ("회고 보기" 버튼)

- [ ] **isFeatured 기반 레이아웃 분리**
  - 파일: `app/components/sections/ProjectSection.tsx`
  - 메인 2개 (데장간, 북플리): 현재 교차 레이아웃 그대로 유지
  - 사이드 4개 (숨통, 포도알, HaeHae, 빌려가유): 별도 카드 그리드로 렌더링
  - "Side Projects" 소제목 섹션 추가 필요

- [ ] **프로젝트 썸네일 이미지 추가**
  - 위치: `public/images/`
  - 필요한 파일:
    - `project-dajangan.png`
    - `project-bookpli.png`
    - `project-soomtong.png`
    - `project-podoal.png`
    - `project-haehae.png`
    - `project-billyeogayu.png`

---

## 콘텐츠 작성

- [ ] **About Me 본문 텍스트 작성**
  - 파일: `app/data/aboutMeData.ts`
  - 현재 placeholder 텍스트 실제 내용으로 교체

- [ ] **Education 성과 내용 작성**
  - 파일: `app/components/sections/EducationSection.tsx`
  - 각 과정별 실제 수료 성과 작성

- [ ] **Skill 설명(desc) 실제 내용 작성**
  - 파일: `app/data/skillDetailData.ts`
  - placeholder → 실제 경험 기반 설명으로 교체

- [ ] **Skill 아이콘 파일 추가**
  - 위치: `public/icons/`
  - 현재 모든 스킬 아이콘이 `react.png` 하나로 되어 있음
  - 각 기술에 맞는 아이콘 추가 후 `skillDetailData.ts` 경로 수정
