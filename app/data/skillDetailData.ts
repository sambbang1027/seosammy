export const CATEGORIES = ["All", "Language", "Frontend", "Backend", "Database", "Infra"] as const;
export type CategoryType = (typeof CATEGORIES)[number];

export interface SkillItem {
  name: string;
  icon: string;
  desc: string;
}

const languageSkills: SkillItem[] = [
  { name: "JavaScript / TypeScript", icon: "react.png", desc: "컴포넌트 기반 아키텍처의 흐름을 이해하고, 정적 타이핑을 통해 안전하고 유지보수하기 쉬운 코드를 작성합니다." },
  { name: "Java (17)", icon: "react.png", desc: "객체 지향 프로그래밍 원칙을 준수하며, 가독성 높고 확장성 있는 백엔드 비즈니스 로직을 설계합니다." },
];

const frontendSkills: SkillItem[] = [
  { name: "React / React Native", icon: "react.png", desc: "상태 관리와 훅을 능숙하게 활용하며, 모바일 앱 환경(JWT 인증 및 보안 저장소 적용)부터 웹 대시보드까지 다양한 플랫폼의 UI/UX를 주도적으로 구현합니다." },
  { name: "Vue / jQuery / JSP", icon: "react.png", desc: "레거시 프로젝트와 최신 프레임워크 모두 유연하게 대응할 수 있으며, 데이터 중복 표시 문제를 화면 및 쿼리 단에서 매끄럽게 정제합니다." },
];

const backendSkills: SkillItem[] = [
  { name: "Spring Boot / Spring MVC", icon: "react.png", desc: "RESTful API 설계 및 서비스 레이어 분리에 능숙하며, 모놀리식 구조에서 OpenFeign 기반의 MSA 구조로 서비스를 분리한 경험이 있습니다." },
  { name: "Spring Batch / Scheduler", icon: "react.png", desc: "싱글 스레드 스케줄러의 한계를 파악하고, 멀티 스레드 병렬 처리 구조로 전환하여 데이터 수집 병목을 해결할 수 있습니다." },
];

const databaseSkills: SkillItem[] = [
  { name: "PostgreSQL / MySQL / Oracle", icon: "react.png", desc: "관계형 데이터베이스 모델링 및 인덱스 구조를 이해하며, MyBatis의 동적 SQL 구문을 적극 활용해 코드 중복을 줄이고 유지보수성을 높입니다." },
  { name: "Redis", icon: "react.png", desc: "세션 관리 및 데이터 캐싱을 통한 성능 최적화 구조를 고민합니다." },
];

const infraSkills: SkillItem[] = [
  { name: "GCP / Firebase", icon: "react.png", desc: "Cloud 인프라를 활용하여 서비스를 안정적으로 배포하고, Firebase Storage 등을 연동하여 DB 용량 및 메모리 과부하 문제를 구조적으로 개선합니다." },
  { name: "GitHub Actions", icon: "react.png", desc: "기본적인 CI/CD 파이프라인 구성을 이해하고 협업 프로세스를 자동화합니다." },
];

export const SKILL_DATA: Record<CategoryType, SkillItem[]> = {
  All: [
    ...languageSkills,
    ...frontendSkills,
    ...backendSkills,
    ...databaseSkills,
    ...infraSkills,
  ],
  Language: languageSkills,
  Frontend: frontendSkills,
  Backend: backendSkills,
  Database: databaseSkills,
  Infra: infraSkills,
};