export interface EducationItem {
  id: number;
  title: string;
  date: string;
  location: string;
  achievements: string[];
  position: "left" | "right";
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 1,
    title: "시스원 2기 SI 공공 부문 개발자 양성과정",
    date: "2025.06 ~ 2025.11",
    location: "한국소프트웨어산업협회",
    achievements: [
      "Java / Spring Boot 기반 웹 애플리케이션 개발 역량 강화",
      "Oracle 및 MyBatis를 활용한 효율적인 데이터 처리 및 쿼리 최적화 수행",
      "Git/GitHub를 활용한 협업 프로세스 및 팀 단위 프로젝트 리딩 경험",
    ],
    position: "right", // PC에서 오른쪽에 배치
  },
  {
    id: 2,
    title: "MSA 기반 3차 풀스택 개발자 양성과정",
    date: "2024.08 ~ 2024.12",
    location: "한국소프트웨어산업협회",
    achievements: [
      "Java 17 및 Spring Boot 기반 백엔드 아키텍처 학습",
      "MSA(마이크로서비스 아키텍처) 구조 이해 및 서비스 단위 도메인 분리 프로젝트 수행",
      "설계부터 구현, 최종 발표까지 주도하는 팀 프로젝트 중심의 실무 프로세스 경험",
    ],
    position: "left", // PC에서 왼쪽에 배치
  },
];