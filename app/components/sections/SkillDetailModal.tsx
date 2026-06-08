"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {CATEGORIES, CategoryType, SKILL_DATA } from "@/app/data/skillDetailData";

interface SkillDetailModalProps {
  skillCategory: string | null;
  onClose: () => void;
}




export default function SkillDetailModal({ skillCategory, onClose }: SkillDetailModalProps) {
  // 1. 🚨 [최적화] 기존의 useEffect 동기 처리를 지우고, 초기화 지점에서 상태를 매핑하여 연쇄 렌더링 에러 차단
  const [activeTab, setActiveTab] = useState<CategoryType>(() => {
    if (skillCategory) {
      const matched = CATEGORIES.find(
        (c) => c.toLowerCase() === skillCategory.toLowerCase()
      );
      if (matched) return matched;
    }
    return "Frontend";
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // 2. 반응형 리사이즈 및 안전한 마운트 큐 처리
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // 렌더링 동기 충돌 우회용 타이머
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 0);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  // 마운트 전이거나 카테고리가 안 넘어왔으면 렌더링 방어
  if (!isMounted || !skillCategory) return null;

  // ─────────────────────────────────────────
  // MOBILE 버전 
  // ─────────────────────────────────────────
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 bg-white pointer-events-auto overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 28, stiffness: 240 }}
          className="w-full h-full flex flex-col bg-white"
        >
          {/* 상단 고정 헤더 영역 */}
          <div className="flex items-center justify-between px-6 pt-8 pb-4 border-b border-neutral-100 flex-shrink-0">
            <div className="flex flex-col">
              <span className="text-neutral-400 text-[11px] font-mono tracking-widest lowercase">
                index / {activeTab.toLowerCase()}
              </span>
              <h2 className="text-[24px] font-extrabold text-neutral-950 tracking-tight mt-0.5">
                {activeTab.toUpperCase()}.txt
              </h2>
            </div>
            
            <button 
              onClick={onClose}
              className="text-xs font-mono font-bold text-neutral-900 border border-neutral-900 rounded-full px-4 py-2 hover:bg-neutral-50 active:scale-95 transition-all"
            >
              INDEX ✕
            </button>
          </div>

          {/* 무제한 스크롤이 가능한 스킬 상세 리스트 영역 */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8 pb-20">
            {SKILL_DATA[activeTab]?.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col space-y-3 pb-8 border-b border-neutral-100 last:border-b-0"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 relative flex-shrink-0 flex items-center justify-center bg-neutral-50 rounded-xl border border-neutral-100/50">
                    <Image
                      className="w-7 h-7 object-contain"
                      src={`/icons/${skill.icon}`}
                      alt={skill.name}
                      width={28}
                      height={28}
                      onError={(e) => {
                        e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/1126/1126012.png";
                      }}
                    />
                  </div>
                  <h4 className="text-[19px] font-bold text-neutral-950 tracking-tight">
                    {skill.name}
                  </h4>
                </div>

                <p className="text-neutral-700 text-[15px] font-medium leading-relaxed pl-1">
                  {skill.desc}
                </p>
              </div>
            ))}

            {SKILL_DATA[activeTab]?.length === 0 && (
              <div className="text-center text-neutral-400 font-mono py-32 text-sm select-none">
                no_data_found.err
              </div>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  // ─────────────────────────────────────────
  //  PC 버전 
  // ─────────────────────────────────────────
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-black/30 backdrop-blur-[4px] z-50 flex items-center justify-center p-4 pointer-events-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 15 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 15 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[760px] h-[550px] flex rounded-[40px] border border-white/80 
                    shadow-2xl relative overflow-hidden bg-white/70 text-black"
      >
        {/* LEFT SIDEBAR */}
        <div className="glass-sidebar flex flex-col pt-14 px-6">     
          <button
            onClick={onClose}
            title="닫기"
            className="w-3.5 h-3.5 bg-[#ff5f56] rounded-full absolute left-6 top-6 shadow-inner hover:brightness-90 active:scale-95 transition-all outline-none cursor-pointer group flex items-center justify-center"
          >
            <span className="text-[9px] text-[#4c0000] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none pb-[1px]">✕</span>
          </button>

          <span className="text-[#3b82f6] text-sm font-semibold tracking-wide mb-6 select-none">
            Category
          </span>

          <nav className="flex flex-col space-y-3.5">
            {CATEGORIES.map((cat) => {
              const isSelected = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`text-left text-[16px] font-medium transition-all duration-150 outline-none ${
                    isSelected
                      ? "text-black font-semibold translate-x-1"
                      : "text-neutral-400 hover:text-black"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </nav>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 bg-white flex flex-col pt-5 px-10 overflow-y-auto relative">
          <span className="text-neutral-400 text-sm tracking-wide lowercase mb-1 select-none">
            skill
          </span>
          <h2 className="text-[30px] font-bold text-neutral-900 tracking-tight mb-8 select-none">
            {activeTab}
          </h2>

          <div className="space-y-5 flex-1 pr-2">
            {SKILL_DATA[activeTab]?.map((skill, index) => (
              <div
                key={index}
                className="flex items-start space-x-5 bg-neutral-50/50 p-4 rounded-2xl border border-neutral-100 shadow-sm"
              >
                <div className="w-14 h-14 relative flex-shrink-0 flex items-center justify-center">
                  <Image
                    className="w-full h-full object-contain"
                    src={`/icons/${skill.icon}`}
                    alt={skill.name}
                    width={56}
                    height={56}
                    onError={(e) => {
                      e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/1126/1126012.png";
                    }}
                  />
                </div>
                <div className="flex flex-col space-y-1 pt-1">
                  <h4 className="text-[17px] font-bold text-neutral-900">{skill.name}</h4>
                  <p className="text-neutral-700 text-[15px] font-medium leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>
            ))}

            {SKILL_DATA[activeTab]?.length === 0 && (
              <div className="text-center text-neutral-400 py-20 text-[15px] select-none">
                준비된 스킬 세부 데이터가 없습니다.
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}