export interface ProjectItem {
  id: number;
  isFeatured: boolean;
  title: string;
  period: string;
  shortDescription: string;
  role?: string[];
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
      "PostgreSQL 데이터베이스 모니터링 시스템으로, CPU·Memory·Disk I/O 등 주요 메트릭을 수집·시각화합니다. 기업 연계로 진행해 최종 발표 대상을 수상했습니다.",
    role: [
      "팀 리더로서 매주 현업자와 주간 보고를 직접 진행하며 기획 방향을 함께 잡았습니다.",
      "Overview 커스터마이징 대시보드와 DB 요약·세션 모니터링·이벤트 로그 페이지를 직접 개발했습니다.",
    ],
    techStack: [
      "Java 17",
      "Spring Boot",
      "MyBatis",
      "React",
      "TypeScript",
      "TanStack Query",
      "PostgreSQL",
      "GitHub Actions",
    ],
    achievements: [
      "프론트 화면에 데이터 공백이 생기는 문제를 발견해 수집 구조를 추적했고, 7스레드 병렬 처리로 재설계해 수집 시간을 2분에서 30초로 단축했습니다.",
      "main 브랜치에 push할 때마다 수동 배포가 번거로워 GitHub Actions로 빌드부터 VM 배포, nginx reload까지 자동화했습니다.",
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
      "Spotify 연동 음악 스트리밍과 독서 기록을 결합한 커뮤니티 플랫폼으로, 북클럽을 통해 독서 경험을 커뮤니티 활동으로 연결합니다.",
    role: [
      "도서 리뷰, 북클럽 게시글·댓글 기능의 API와 화면을 모두 설계하고 구현했습니다.",
      "도서 서버 분리와 OpenFeign 연동 작업에 참여했습니다.",
    ],
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
      "useState 하나로 좌석 상태를 관리하다 봇이 갱신 전 값을 읽어 동시에 같은 좌석을 중복 선점하고, 페이지 이동 시 데이터가 초기화되는 문제를 발견해 봇 전용(useRef)·화면 표시(useState)·전역 유지(Zustand)로 역할을 분리해 해결했습니다.",
      "봇 최초 실행 딜레이를 600~800ms에서 0~80ms로 줄여, 유저가 빠르게 페이지를 이동해도 최신 데이터가 저장되도록 보장했습니다.",
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
