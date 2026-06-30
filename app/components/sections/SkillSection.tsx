"use client";
import { motion, AnimatePresence } from "framer-motion";
import { BubbleProvider } from "@/app/context/BubbleContext";
import BubbleCanvas from "../bubble/BubbleCanvas";
import { useEffect, useState } from "react";
import SkillDetailModal from "./SkillDetailModal";
import { desktopBubbles, mobileSkillList } from "@/app/data/skillData";
import Image from "next/image";

export default function SkillSection() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // SSR 하이드레이션 에러 방지 및 초기 모바일 체크
// 렌더링 흐름이 충돌하지 않도록 마운트 및 리사이즈 큐 분리
  useEffect(() => {
    // 1. 화면 크기 감지 함수
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // 2. 초기 리사이즈 실행
    handleResize();
    window.addEventListener("resize", handleResize);

    // 3. 마운트 선언을 브라우저의 다음 이벤트를 처리하는 큐(태스크 큐)로 미뤄서, 모든 초기 렌더링이 끝난 후에 실행되도록 보장
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 0);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []); 

  /** 3D 버블 터짐 이벤트 전달 (pc 전용) */
  useEffect(() => {
    if (isMobile) return;
    const handleBubblePop = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) setActiveSkill(customEvent.detail);
    };
    window.addEventListener("bubblePop", handleBubblePop);
    return () => window.removeEventListener("bubblePop", handleBubblePop);
  }, [isMobile]);

  if (!isMounted) return <div className="h-[832px] bg-white" />;

  return (
    <motion.section className="w-full relative">
      {/* 버블 제공자  */}
      <BubbleProvider bubbles={isMobile ? [] : desktopBubbles}>
        
        <div className="bg-[#ffffff] h-[832px] w-full relative overflow-hidden select-none">
          
          {/* ─────────────────────────────────────────
             pc 환경 (768px 이상)에서는 3D 캔버스와 배경 타이틀 텍스트 활성화
             ───────────────────────────────────────── */}
          {!isMobile && (
            <>
              {/* 백그라운드 타이틀 텍스트 */}
              <div className="text-primary text-center font-['Inter-ExtraBold',_sans-serif] text-[110px] font-extrabold
                    absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] leading-[110px]
                    tracking-tight pointer-events-none z-0 opacity-90 select-none">
                WHAT<br />CAN I<br />DO?
              </div>

              {/* 인터랙션 힌트 */}
              <span className="absolute left-1/2 top-[calc(50%-195px)] -translate-x-1/2 text-[13px] font-mono tracking-widest text-primary/50 pointer-events-none z-0 select-none animate-pulse">
                버블을 터뜨려보세요
              </span>

              {/* 3D 캔버스 */}
              <div key="desktop-canvas" className="absolute inset-0 w-full h-full z-10 pointer-events-auto bubble-needle-cursor">
                <BubbleCanvas />
              </div>
            </>
          )}

          {/* ─────────────────────────────────────────
              모바일 환경  (768px 미만 하이드레이션)
             ───────────────────────────────────────── */}
          {isMobile && (
            <div className="w-full h-full relative overflow-hidden px-4 select-none">
              {/* 배경 타이포 */}
              <div className="text-primary text-center font-['Inter-ExtraBold',_sans-serif] text-[80px] font-extrabold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] leading-[90px] tracking-tight pointer-events-none z-0 opacity-90">
                WHAT<br />CAN <br /> I<br />DO?
              </div>

              {/* 프리스타일 폴더들 */}
              {mobileSkillList.map((skill) => {
                const { top, left } = skill.position || { top: "50%", left: "50%" };
                
                return (
                  <div
                    key={skill.id}
                    className="absolute flex flex-col items-start gap-1.5 select-none"
                    style={{ top, left }}
                  >
                    <button
                      onClick={() => setActiveSkill(skill.id)}
                      className="w-[84px] h-[72px] flex items-center justify-center p-1 rounded-2xl active:scale-95 transition-transform duration-200"
                    >
                      <Image
                        src="/icons/folder.svg"
                        alt={skill.id}
                        width={76}
                        height={64}
                        className="w-full h-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
                      />
                    </button>

                    <div className="flex items-center gap-1 m-auto">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: skill.color || '#3b82f6' }} />
                      <span className="text-[10px] font-mono font-medium text-neutral-500 tracking-tight">
                        {skill.id.toLowerCase()}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* 상세 모달 창 */}
          <AnimatePresence>
            {activeSkill && (
              <SkillDetailModal 
                key={activeSkill}
                skillCategory={activeSkill}
                onClose={() => setActiveSkill(null)}
              />
            )}
          </AnimatePresence>
        </div>
      </BubbleProvider>
    </motion.section>
  );
}