
/** pc와 모바일 분리 */ 
import { BubbleConfig } from "@/app/context/BubbleContext";

// 1. 아이콘 필수 + 카테고리가 있는 스킬 버블 타입
interface SkillBubble extends BubbleConfig {
  icon: string;
  iconRotation: number;
  iconPosition: [number, number, number];
  skillCategory?: string;
}

// 2. 아이콘 관련 속성이 아예 없는 데코 버블 타입
interface DecoBubble extends BubbleConfig {
  icon?: never;
  iconRotation?: never;
  iconPosition?: never;
  skillCategory?: never;
}

// 3. 두 가지 상태를 모두 허용하는 최종 타입 선언
type SkillSectionBubble = SkillBubble | DecoBubble;

export interface MobileSkillConfig{
    id: string;
    icon: string;
}


export const desktopBubbles : SkillSectionBubble[] = [
    {
    position: [-4.5, 3, 0] as [number, number, number],
    size: 0.9,
    icon: "backend-folder.svg", // BACKEND 텍스트가 포함된 SVG 파일 권장
    iconRotation: 0.14, // -8도 회전 변환
    iconPosition: [0, 0, 1.15] as [number, number, number],
    skillCategory: "backend",
  },
  // 2. FRONTEND 폴더 (우측 상단 부근)
  {
    position: [4.8, 2.6, 0] as [number, number, number],
    size: 0.9,
    icon: "frontend-folder.svg",
    iconRotation: -0.1, // 5도 회전 변환
    iconPosition: [0, 0, 1.15] as [number, number, number],
    skillCategory: "frontend",
  },
  // 3. LANGUAGE 폴더 (중앙 우측 부근, WHAT CAN I DO 타이틀의 'I' 근처)
  {
    position: [2, -0.2, 0] as [number, number, number],
    size: 0.8,
    icon: "language-folder.svg",
    iconRotation: 0.1, // 5도 회전 변환
    iconPosition: [0, 0, 1.0] as [number, number, number],
    skillCategory: "language",
  },
  // 4. DATABASE 폴더 (중앙 하단 부근, 'DO?' 글자 근처)
  {
    position: [-1, -1.8, 0] as [number, number, number],
    size: 0.7,
    icon: "db-folder.svg",
    iconRotation: -0.17, // 10도 회전 변환
    iconPosition: [0, 0, 1.15] as [number, number, number],
    skillCategory: "database",
  },
  // 5. INFRA 폴더 (우측 하단 부근)
  {
    position: [5.2, -2.8, 0] as [number, number, number],
    size: 0.7,
    icon: "infra-folder.svg",
    iconRotation: 0.15,
    iconPosition: [0, 0, 0.9] as [number, number, number],
    skillCategory: "infra",
  },
  // 6. ALL 폴더 (좌측 최하단 부근)
  {
    position: [-5.8, -3.2, 0] as [number, number, number],
    size: 0.6,
    icon: "all-folder.svg",
    iconRotation: -0.08,
    iconPosition: [0, 0, 0.8] as [number, number, number],
    skillCategory: "all",
  },
  // 7. 상단 장식용 핑크 폴더 (텍스트 없음, 살짝 잘림)
  {
    position: [1.8, 4.5, -0.5] as [number, number, number],
    size: 0.7,
    icon: "folder.svg",
    iconRotation: -0.35, // 5도 회전
    iconPosition: [0, 0, 0.9] as [number, number, number]
  },
  
  // ─────────────────────────────────────────
  // 은은한 배경 데코용 투명 빈 버블
  // ─────────────────────────────────────────
  { position: [0.6, 2.2, -1] as [number, number, number], size: 0.55 },   // 중앙 상단 빈 원
  { position: [0.4, -4.5, -1] as [number, number, number], size: 0.45 },  // 최하단 빈 원
  { position: [-3, -0.8, -1] as [number, number, number], size: 0.45 }, // 좌측 중간 빈 원
  { position: [4.5, 0.0, -1] as [number, number, number], size: 0.45 },   // 우측 중간 빈 원
];


export const mobileSkillList = [
    {id: "backend", icon: "backend-folder.svg", position: {top: "3%", left: "8%"} , color: "#83CD29" },
    {id: "frontend", icon: "frontend-folder.svg", position: {top: "18%", left: "70%"}, color: "#61DAFB"},
    {id: "language", icon: "language-folder.svg", position: {top: "33%", left: "23%"}, color: "#F7DF1E"  },
    {id: "database", icon: "db-folder.svg", position: {top: "68%", left: "10%"}, color: "#4169E1"  },
    {id: "infra", icon: "infra-folder.svg", position: {top: "50%", left: "60%"}, color: "#FF9900"  },
    {id: "all", icon: "all-folder.svg", position: {top: "82%", left: "75%"}, color: "#A370F7"  },
];
