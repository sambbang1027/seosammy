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
    desc: "프로젝트 전반에서 사용한 주력 언어입니다. 타입 추론, 제네릭 등 TypeScript의 깊은 기능은 프로젝트를 거치며 계속 익혀가고 있습니다.",
    level: "주력",
  },
  {
    name: "Java (17)",
    icon: FaJava,
    desc: "백엔드 개발 시 주력으로 사용했습니다. 데장간에서는 데이터 수집 API 구조를, 북플리에서는 도서·북클럽 도메인의 CRUD API를 Java/Spring으로 직접 설계하고 구현했습니다.",
    level: "주력",
  },
];

const frontendSkills: SkillItem[] = [
  {
    name: "React / React Native",
    icon: SiReact,
    desc: "데장간에서 처음 React를 사용했고, 이후 포도알 파이터·포트폴리오 사이트까지 이어서 사용하며 점점 익숙해지고 있습니다. React Native도 별도 프로젝트에서 사용한 경험이 있고, 현재도 사용하고 있습니다.",
    level: "주력",
  },
  {
    name: "Vue 3",
    icon: SiVuedotjs,
    desc: "북플리에서 Vue 3 기반으로 풀스택 프로젝트를 진행했습니다.",
    level: "경험",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    desc: "포트폴리오 사이트를 Next.js App Router 기반으로 직접 설계·구현했습니다.",
    level: "활용",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    desc: "포도알 파이터에서는 v3, 포트폴리오 사이트에서는 v4를 사용했습니다. v4의 @theme 토큰 시스템을 포트폴리오에 직접 적용했습니다.",
    level: "활용",
  },
];

const backendSkills: SkillItem[] = [
  {
    name: "Spring Boot / Spring MVC",
    icon: SiSpring,
    desc: "데장간에서는 데이터 수집 API를, 북플리에서는 도서 리뷰·북클럽 CRUD API를 Spring Boot로 직접 설계하고 구현했습니다.",
    level: "주력",
  },
  {
    name: "MyBatis / JPA",
    icon: SiSpring,
    desc: "데장간에서는 MyBatis로, 북플리에서는 JPA로 데이터베이스 연동을 구현했습니다.",
    level: "활용",
  },
];

const databaseSkills: SkillItem[] = [
  {
    name: "PostgreSQL / MySQL",
    icon: SiPostgresql,
    desc: "데장간에서는 PostgreSQL 파티셔닝을 팀원들과 함께 설계했고, 북플리에서는 MySQL로 기본 쿼리와 MyBatis 동적 SQL을 활용했습니다.",
    level: "활용",
  },
];

const infraSkills: SkillItem[] = [
  {
    name: "GCP / Firebase",
    icon: SiFirebase,
    desc: "데장간에서는 GCP에 서비스를 배포했고, 북플리에서는 Firebase Storage 연동을 구현했습니다.",
    level: "활용",
  },
  {
    name: "GitHub Actions",
    icon: SiGithubactions,
    desc: "데장간에서 GitHub Actions로 빌드부터 VM 배포, nginx reload까지 CI/CD 파이프라인을 구성했습니다.",
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
