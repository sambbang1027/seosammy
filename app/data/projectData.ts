export interface ProjectItem {
  id: number;
  isFeatured: boolean;
  title: string;
  period: string;
  shortDescription: string;
  role?: string;
  techStack: string[];
  achievements: string[];
  images: string[];
  githubUrl?: string;
  deployUrl?: string;
  notionUrl?: string;
}

export const PROJECT_DATA: ProjectItem[] = [
  {
    id: 1,
    isFeatured: true,
    title: "데장간 (Dajangan)",
    period: "2025.10 ~ 2025.11",
    shortDescription:
      "PostgreSQL 데이터베이스 모니터링 시스템. CPU·Memory·Disk I/O 등 주요 메트릭을 수집·시각화하고, 사용자가 지표와 레이아웃을 직접 구성하는 맞춤형 Overview 대시보드를 제공합니다. 기업 연계로 진행해 최종 발표 대상을 수상했습니다.",
    role:
      "팀 리더 · Overview 커스터마이징 대시보드(dnd-kit), Joyride 튜토리얼, DB 요약·세션 모니터링·이벤트 로그 페이지 개발, 데이터 수집 병렬화 구조 설계",
    techStack: [
      "Java 17",
      "Spring Boot",
      "Spring Batch",
      "MyBatis",
      "JdbcTemplate",
      "React",
      "TypeScript",
      "TanStack Query",
      "ApexCharts",
      "dnd-kit",
      "Joyride",
      "PostgreSQL",
      "GCP",
      "GitHub Actions",
    ],
    achievements: [
      "7스레드 병렬 처리로 데이터 수집 구조 재설계 → 수집 시간 2분 → 30초 단축 (75% 개선)",
      "Mapper XML 없이 자유로운 동적 집계 쿼리 작성을 위해 추이 분석 데이터 처리는 MyBatis 대신 JdbcTemplate으로 분리",
      "dnd-kit 기반 드래그앤드롭으로 위젯 자유 배치 커스텀 대시보드 구현",
      "GitHub Actions로 프론트엔드 배포 CI/CD 구성",
    ],
    images: [
      "/dajanggan/1.png",
      "/dajanggan/2.png",
      "/dajanggan/3.png",
      "/dajanggan/4.png",
      "/dajanggan/5.png",
      "/dajanggan/6.png",
      "/dajanggan/7.png",
    ],
    githubUrl: "https://github.com/sysoneFinal",
    notionUrl: "https://app.notion.com/p/3584c4b52aec80d4b42cff96a695679d?v=3584c4b52aec8034b665000caa7e38bc&source=copy_link",
  },
  {
    id: 2,
    isFeatured: true,
    title: "북플리 (Bookpli)",
    period: "2024.11 ~ 2024.12",
    shortDescription:
      "음악 스트리밍과 독서 기록을 결합한 커뮤니티 플랫폼. 유저가 북클럽에 관심을 보일 때만 생성되는 지연 생성 구조로, 불필요한 데이터 적재 없이 독서 경험이 커뮤니티 활동으로 이어지도록 설계했습니다.",
    role:
      "도서 리뷰 CRUD API 및 화면 연동 구현, 북클럽(북적북적) 커뮤니티 설계 및 게시글·댓글 기능 개발, 도서 서버 분리·OpenFeign 연동 참여",
    techStack: [
      "Java 17",
      "Spring Boot",
      "Spring Data JPA",
      "Vue 3",
      "MySQL",
      "Firebase Storage",
      "OpenFeign",
    ],
    achievements: [
      "모든 도서에 북클럽을 미리 생성하지 않고, 유저가 클럽 리스트에 추가할 때 없으면 생성되는 지연 생성(lazy creation) 구조로 설계해 불필요한 데이터 적재 방지",
      "이미지 파일을 DB에 직접 저장하는 대신 Firebase Storage에 업로드 후 URL만 저장하는 구조로 설계해 조회 성능 확보",
      "Book / Music / User 도메인 기준 서버 분리 작업에 참여, OpenFeign 기반 서비스 간 통신 구성 — 최종 발표 대상 수상",
    ],
    images: ["/bookpli/1.png", "/bookpli/2.png"],
    githubUrl: "https://github.com/mae02142/bookpli",
    notionUrl: "https://app.notion.com/p/3584c4b52aec80b0bccbde8ead7c8b5c?v=3584c4b52aec8034b665000caa7e38bc&source=copy_link",
  },
  // {
  //   id: 3,
  //   isFeatured: false,
  //   title: "숨통 (Soomtong)",
  //   period: "진행중",
  //   shortDescription:
  //     "공공 혼잡도 데이터 + 역사 구조 기반 칸별 추정 알고리즘을 활용한 지하철 실용 유틸리티. 칸별 공개 API가 없는 환경에서 역사 구조를 직접 분석해 가중치 모델을 설계했습니다.",
  //   techStack: ["React", "Vite", "Tailwind CSS", "Geolocation API"],
  //   achievements: [
  //     "역사 구조(계단·환승 통로 위치) 직접 분석해 칸별 가중치 알고리즘 설계",
  //     "3색 신호등 UI로 혼잡도 직관적 시각화",
  //     "Vite proxy로 공공 API CORS 처리",
  //   ],
  //   thumbnailUrl: "/images/project-soomtong.png",
  //   githubUrl: "https://github.com/sambbang1027/soomtong",
  //   deployUrl: "https://soomtong-eta.vercel.app/",
  //   notionUrl: "",
  // },
  {
    id: 4,
    isFeatured: false,
    title: "포도알 파이터 (Podobal Fighter)",
    period: "2026.06",
    shortDescription:
      "멜론티켓 예매 프로세스를 완전히 시뮬레이션하는 티켓팅 트레이너 Web App. 정각 타임어택부터 대기열·좌석 선점·보안문자까지 6단계 플로우를 재현합니다.",
    techStack: ["React", "Vite", "Tailwind CSS", "Zustand"],
    achievements: [
      "Zustand로 6단계 게임 플로우 전역 상태 관리",
      "F5 패널티·봇 시뮬레이션 등 실제 예매 환경 재현",
      "반응속도 측정값을 다음 스테이지 난이도 가중치로 연산",
    ],
    images: [
      "/podor/podo1.png",
      "/podor/podo2.png",
      "/podor/podo3.png",
      "/podor/podo4.png",
      "/podor/podo5.png",
      "/podor/podo6.png",
      "/podor/podo7.png",
    ],
    githubUrl: "https://github.com/sambbang1027/podoal",
    deployUrl: "https://sambbang1027.github.io/podoal/",
    notionUrl: "https://app.notion.com/p/37f4c4b52aec809a9b43def72a330a73?v=3584c4b52aec8034b665000caa7e38bc&source=copy_link",
  },
  {
    id: 7,
    isFeatured: true,
    title: "포트폴리오 사이트",
    period: "2025.05 ~ 진행중",
    shortDescription:
      "Next.js와 Three.js 기반으로 직접 설계·구현한 개인 포트폴리오. 3D 버블 인터랙션, 스크롤 기반 애니메이션, 뷰포트 진입 시 렌더링 제어 등 프론트엔드 기술을 직접 구현했습니다.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Three.js",
      "React Three Fiber",
      "Framer Motion",
      "Tailwind CSS v4",
    ],
    achievements: [
      "IntersectionObserver 기반 frameloop 제어로 스크롤 프레임 드랍 해결 (46.8fps → 60fps)",
      "react-spring onChange 중복 호출로 인한 버블 파티클 중복 생성 버그를 useRef 플래그로 해결",
      "Tailwind CSS v4 @theme 기반 디자인 토큰 시스템 구축",
    ],
    images: [
      "/portfolio/1.png",
      "/portfolio/2.png",
      "/portfolio/3.png",
      "/portfolio/4.png",
      "/portfolio/5.png",
    ],
    githubUrl: "https://github.com/sambbang1027/seosammy",
    notionUrl: "https://app.notion.com/p/3584c4b52aec80e08a3bc41b4f477403?v=3584c4b52aec8034b665000caa7e38bc&source=copy_link",
  },
  // {
  //   id: 6,
  //   isFeatured: false,
  //   title: "빌려가유",
  //   period: "2025.09",
  //   shortDescription:
  //     "농기계 등록부터 예약·사용·점검·재사용까지 전체 라이프사이클을 관리하는 통합 시스템. 점검 관리, 예약 승인/반려 페이지 담당.",
  //   techStack: ["Java 17", "Spring MVC", "MyBatis", "Oracle", "JSP", "jQuery"],
  //   achievements: [
  //     "Oracle LISTAGG로 점검 이력 중복 행 문제 해결",
  //     "MyBatis 동적 SQL로 검색 조건 확장성 확보",
  //     "공통 Alert/Confirm 모달 컴포넌트 설계",
  //   ],
  //   thumbnailUrl: "/images/project-billyeogayu.png",
  //   githubUrl: "https://github.com/sambbang1027/billyeogayu",
  //   notionUrl: "",
  // },
];
