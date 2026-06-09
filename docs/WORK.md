# 작업 목록

## 성능 개선

- [x] **2. Canvas 뷰포트 밖 비활성화**
  - 파일: `app/components/bubble/BubbleCanvas.tsx`
  - `IntersectionObserver` + `frameloop` 적용, 뷰포트 이탈 시 렌더링 정지
  - 결과: FPS 57 → 60, 스크롤 끊김 해소
  - 참고: `docs/performance.md`

- [~] **1. `meshPhysicalMaterial` 경량화** — 보류
  - 버블 미감(transmission, iridescence)이 핵심 디자인 요소라 변경 시 손해가 더 큼
  - FPS 목표 달성으로 필요성 없어짐

- [~] **3. `setParticles` → `useRef` 전환** — 보류
  - 실제 체감 끊김 없음 확인, 현재 우선순위 없음

---

## 콘텐츠 작성

- [ ] **4. About Me 본문 텍스트 작성**
  - 파일: `app/data/aboutMeData.ts`
  - 현재 placeholder 텍스트 실제 내용으로 교체

- [ ] **5. Education 성과 내용 작성**
  - 파일: `app/components/sections/EducationSection.tsx`
  - 각 과정별 실제 수료 성과 작성

- [ ] **6. Skill 설명(desc) 실제 내용 작성**
  - 파일: `app/data/skillDetailData.ts`
  - "어쩌고 저쩌고" placeholder → 실제 경험 기반 설명으로 교체

- [ ] **7. Skill 아이콘 파일 추가**
  - 위치: `public/icons/`
  - 현재 모든 스킬 아이콘이 `react.png` 하나로 되어 있음
  - 각 기술에 맞는 아이콘 파일 추가 후 `skillDetailData.ts` 경로 수정

---

## 미구현 기능

- [ ] **8. Project 스크린샷 이미지 추가**
  - 위치: `public/images/`
  - `project1-thumb.png`, `project2-thumb.png` 추가
  - `app/data/projectData.ts` 경로 확인

- [ ] **9. 실제 프로젝트 데이터 작성**
  - 파일: `app/data/projectData.ts`
  - 현재 예시 데이터 → 실제 프로젝트로 교체
  - GitHub URL, Notion URL 실제 링크로 수정
