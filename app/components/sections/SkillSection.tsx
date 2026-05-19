"use client";
import { motion, AnimatePresence } from "framer-motion";
import { BubbleProvider } from "@/app/context/BubbleContext";
import BubbleCanvas from "../bubble/BubbleCanvas";
import { useState } from "react";

/**
 * 3D 버블들의 위치, 크기, 회전값 정의
 */
const skillBubbles = [
  // 1. BACKEND 폴더 (좌측 상단 부근)
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
    iconPosition: [0, 0, 0.9] as [number, number, number],
  },
  
  // ─────────────────────────────────────────
  // 은은한 배경 데코용 투명 빈 버블
  // ─────────────────────────────────────────
  { position: [0.6, 2.2, -1] as [number, number, number], size: 0.55 },   // 중앙 상단 빈 원
  { position: [0.4, -4.5, -1] as [number, number, number], size: 0.45 },  // 최하단 빈 원
  { position: [-3, -0.8, -1] as [number, number, number], size: 0.45 }, // 좌측 중간 빈 원
  { position: [4.5, 0.0, -1] as [number, number, number], size: 0.45 },   // 우측 중간 빈 원
];

export default function SkillSection() {
    const [activeSkill, setActiveSkill] = useState<string | null>(null);

    useState(() => {
        if(typeof window !== "undefined"){
            const handleBubblePop = (e: Event) => {
                const customEvent = e as CustomEvent;
                if(customEvent.detail){
                    // 파티클 터지는 순간 모달 온 
                    setActiveSkill(customEvent.detail);
                }
            };
            window.addEventListener("bubblePop", handleBubblePop);
            return () => {
                window.removeEventListener("bubblePop", handleBubblePop);
            };
        }});


  return (
    <motion.section className="w-full relative">
      <BubbleProvider bubbles={skillBubbles}>
        
        {/* 전체 컨테이너 및 배경 설정 */}
        <div className="bg-[#ffffff] h-[832px] w-full relative overflow-hidden select-none">
          
          {/* [레이어 z-0] 백그라운드 타이틀 텍스트 */}
          <div className="text-primary text-center font-['Inter-ExtraBold',_sans-serif] text-[110px] font-extrabold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] leading-[110px] tracking-tight pointer-events-none z-0 opacity-90 select-none">
            WHAT<br />CAN I<br />DO?
          </div>

          {/* [레이어 z-10] 3D Canvas 가 타이틀 글자 위로 덮이며 사방에 둥둥 뜨게 됨 */}
          <div className="absolute inset-0 w-full h-full z-10 pointer-events-auto">
            <BubbleCanvas />
          </div>

          {/* 상세 모달 창 */}
            <AnimatePresence>
            {activeSkill && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 pointer-events-auto"
                onClick={() => setActiveSkill(null)} // 바깥 클릭 시 닫기
              >
                <motion.div 
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative"
                  onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 버블링 방지
                >
                  <button 
                    onClick={() => setActiveSkill(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
                  >
                    ✕
                  </button>
                  
                  {/* 스킬별 맞춤형 콘텐츠 분기 처리 */}
                  <h3 className="text-2xl font-extrabold text-[#0e2a47] mb-4">{activeSkill} SKILLS</h3>
                  <div className="text-gray-600 space-y-2">
                    {activeSkill === "BACKEND" && <p>Node.js, Spring Boot, Express 등 백엔드 기술 스택 상세 설명...</p>}
                    {activeSkill === "FRONTEND" && <p>React, Next.js, Tailwind CSS 등 프론트엔드 스택 상세 설명...</p>}
                    {activeSkill === "DATABASE" && <p>PostgreSQL, MongoDB, Redis 등 데이터베이스 상세 설명...</p>}
                    {/* ... 나머지 스킬 조건부 렌더링 */}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </BubbleProvider>
    </motion.section>
    );
}
