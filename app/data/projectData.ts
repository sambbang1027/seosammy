export interface ProjectItem {
  id: number;
  title: string;
  period: string;
  shortDescription: string;
  techStack: string[];
  achievements: string[];
  thumbnailUrl: string;
  githubUrl?: string;
  notionUrl?: string;
}

export const PROJECT_DATA: ProjectItem[] = [
  {
    id: 1,
    title: "대용량 데이터 수집 시스템 최적화 (예시)",
    period: "2024.10 ~ 2024.12",
    shortDescription: "MSA 아키텍처 기반의 공공 데이터 수집 및 정제 플랫폼",
    techStack: ["Java 17", "Spring Boot", "Spring Batch", "PostgreSQL", "React"],
    achievements: [
      "Spring Batch 멀티 스레드 적용으로 데이터 수집 시간 50% 단축",
      "OpenFeign을 활용한 마이크로서비스 간 통신 구조 설계",
      "사용자 친화적인 데이터 모니터링 대시보드 UI 구현",
    ],
    thumbnailUrl: "/images/project1-thumb.png", // 추후 실제 이미지 경로로 수정하세요
    githubUrl: "https://github.com/서샘이/repo1",
    notionUrl: "https://notion.so/서샘이/상세회고링크1",
  },
  {
    id: 2,
    title: "사내 구성원 업무 통합 대시보드 (예시)",
    period: "2025.07 ~ 2025.10",
    shortDescription: "부서 간 원활한 소통과 리소스 관리를 위한 사내 인트라넷 서비스",
    techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Redis"],
    achievements: [
      "Redis 캐싱을 도입하여 메인 페이지 로딩 속도 1.5초 개선",
      "Framer Motion을 활용한 직관적인 모달 및 트랜지션 UX 구현",
      "JWT 기반 인증/인가 시스템 구축 및 보안 강화",
    ],
    thumbnailUrl: "/images/project2-thumb.png", // 추후 실제 이미지 경로로 수정하세요
    githubUrl: "https://github.com/서샘이/repo2",
    notionUrl: "https://notion.so/서샘이/상세회고링크2",
  },
];