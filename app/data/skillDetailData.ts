import { IconType } from "react-icons";
import {
  SiJavascript, SiTypescript,
  SiReact, SiVuedotjs, SiJquery,
  SiSpring,
  SiPostgresql, SiMysql, SiOracle,
  SiGooglecloud, SiFirebase, SiGithubactions,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const CATEGORIES = ["All", "Language", "Frontend", "Backend", "Database", "Infra"] as const;
export type CategoryType = (typeof CATEGORIES)[number];

export interface SkillItem {
  name: string;
  icon: IconType;
  desc: string;
}

const languageSkills: SkillItem[] = [
  {
    name: "JavaScript / TypeScript",
    icon: SiTypescript,
    desc: "프로젝트 전반에서 사용한 주력 언어. TypeScript로 타입을 명시하는 습관이 생겼고, 깊은 내부 동작보다는 실제 구현 중심으로 익혔다.",
  },
  {
    name: "Java (17)",
    icon: FaJava,
    desc: "백엔드 개발 시 주력으로 사용. 객체지향 설계를 학습하며 썼고, 아직 깊이보다는 실무 적용 수준에 가깝다.",
  },
];

const frontendSkills: SkillItem[] = [
  {
    name: "React / React Native",
    icon: SiReact,
    desc: "가장 많이 다뤄본 프론트엔드 스택. 훅 기반 구현에 익숙하며, 이 포트폴리오 포함 다수 프로젝트에서 사용했다.",
  },
  {
    name: "Vue / jQuery / JSP",
    icon: SiVuedotjs,
    desc: "부트캠프에서 Vue 3로 풀스택 프로젝트를 진행했고, 레거시 환경에서 jQuery와 JSP도 경험했다.",
  },
];

const backendSkills: SkillItem[] = [
  {
    name: "Spring Boot / Spring MVC",
    icon: SiSpring,
    desc: "REST API 설계와 레이어 분리 구조에 익숙하다. MSA 환경에서 서비스 간 통신(OpenFeign)을 구현한 경험이 있다.",
  },
  {
    name: "Spring Batch / Scheduler",
    icon: SiSpring,
    desc: "데장간 프로젝트에서 처음 도입. 싱글 스레드 병목을 직접 겪고 멀티 스레드 병렬 처리로 전환해 수집 시간을 75% 단축했다.",
  },
];

const databaseSkills: SkillItem[] = [
  {
    name: "PostgreSQL / MySQL / Oracle",
    icon: SiPostgresql,
    desc: "프로젝트마다 다른 RDBMS를 사용했다. 기본 쿼리 작성과 MyBatis 동적 SQL에 익숙하며, 깊은 최적화는 학습 중이다.",
  },
];

const infraSkills: SkillItem[] = [
  {
    name: "GCP / Firebase",
    icon: SiFirebase,
    desc: "GCP 기반 서비스 배포와 Firebase Storage 연동을 경험했다. 인프라 설계보다는 서비스 연동 중심으로 활용했다.",
  },
  {
    name: "GitHub Actions",
    icon: SiGithubactions,
    desc: "기본적인 CI 파이프라인을 구성해봤다. 깊이 있는 활용보다는 협업 자동화 수준으로 사용했다.",
  },
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
