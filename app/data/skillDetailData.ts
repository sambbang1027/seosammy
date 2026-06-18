import { IconType } from "react-icons";
import {
  SiJavascript, SiTypescript,
  SiReact, SiVuedotjs, SiJquery,
  SiNextdotjs, SiTailwindcss,
  SiSpring,
  SiPostgresql, SiMysql,
  SiGooglecloud, SiFirebase, SiGithubactions,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const CATEGORIES = ["All", "Language", "Frontend", "Backend", "Database", "Infra"] as const;
export type CategoryType = (typeof CATEGORIES)[number];

export type SkillLevel = "주력" | "활용" | "경험";

export interface SkillItem {
  name: string;
  icon: IconType;
  desc: string;
  level: SkillLevel;
}

const languageSkills: SkillItem[] = [
  {
    name: "JavaScript / TypeScript",
    icon: SiTypescript,
    desc: "프로젝트 전반에서 사용한 주력 언어. TypeScript로 타입을 명시하는 습관이 생겼고, 실제 프로젝트에서 꾸준히 써오면서 익숙해졌다.",
    level: "주력",
  },
  {
    name: "Java (17)",
    icon: FaJava,
    desc: "백엔드 개발 시 주력으로 사용. 객체지향 설계를 학습하며 백엔드 전반을 담당했고, 여러 프로젝트를 거치면서 구조를 잡는 감각이 생겼다.",
    level: "주력",
  },
];

const frontendSkills: SkillItem[] = [
  {
    name: "React / React Native",
    icon: SiReact,
    desc: "가장 많이 사용한 프론트엔드 스택. 훅 기반으로 여러 프로젝트를 진행했고, 이 포트폴리오도 React로 직접 구현했다.",
    level: "주력",
  },
  {
    name: "Vue / jQuery / JSP",
    icon: SiVuedotjs,
    desc: "Vue 3로 풀스택 프로젝트를 진행했고, 레거시 환경에서 jQuery와 JSP도 경험했다. 다양한 프론트엔드 환경에 적응할 수 있다.",
    level: "경험",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    desc: "포트폴리오 사이트를 Next.js App Router 기반으로 직접 설계·구현했다.",
    level: "활용",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    desc: "프로젝트 전반에서 사용한 스타일링 도구. v4의 @theme 토큰 시스템을 포트폴리오에 적용했다.",
    level: "활용",
  },
];

const backendSkills: SkillItem[] = [
  {
    name: "Spring Boot / Spring MVC",
    icon: SiSpring,
    desc: "REST API 설계와 레이어 분리 구조에 익숙하다.",
    level: "주력",
  },
  {
    name: "Spring Batch / Scheduler",
    icon: SiSpring,
    desc: "데장간 프로젝트에서 처음 도입. 싱글 스레드 병목을 직접 겪고 멀티 스레드 병렬 처리로 전환해 수집 시간을 75% 단축했다.",
    level: "활용",
  },
  {
    name: "MyBatis / JdbcTemplate",
    icon: SiSpring,
    desc: "데장간에서 데이터 API 통신은 MyBatis로, 복잡한 집계 쿼리는 JdbcTemplate으로 분리해 처리했다.",
    level: "활용",
  },
  {
    name: "Spring Data JPA",
    icon: SiSpring,
    desc: "북플리에서 사용한 ORM. 기본적인 CRUD 레포지토리 구성에 활용했다.",
    level: "주력",
  },
];

const databaseSkills: SkillItem[] = [
  {
    name: "PostgreSQL / MySQL / Oracle",
    icon: SiPostgresql,
    desc: "프로젝트마다 다른 RDBMS를 사용하며 각 환경에 적응했다. 기본 쿼리 작성과 MyBatis 동적 SQL을 프로젝트에서 직접 활용했다.",
    level: "활용",
  },
];

const infraSkills: SkillItem[] = [
  {
    name: "GCP / Firebase",
    icon: SiFirebase,
    desc: "GCP 기반 서비스 배포와 Firebase Storage 연동을 프로젝트에서 경험했다.",
    level: "활용",
  },
  {
    name: "GitHub Actions",
    icon: SiGithubactions,
    desc: "기본적인 CI 파이프라인을 구성해 팀 협업 자동화에 활용했다.",
    level: "활용",
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
