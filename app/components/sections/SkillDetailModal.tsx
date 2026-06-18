"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CATEGORIES, CategoryType, SKILL_DATA, SkillItem, SkillLevel } from "@/app/data/skillDetailData";

interface SkillDetailModalProps {
  skillCategory: string | null;
  onClose: () => void;
}

const BAR_DISPLAY: Record<SkillLevel, { text: "중" | "하"; bar: string }> = {
  주력: { text: "중", bar: "bg-primary w-[68%]" },
  활용: { text: "중", bar: "bg-primary/60 w-[45%]" },
  경험: { text: "하", bar: "bg-primary/30 w-[25%]" },
};

const LEVEL_STYLE: Record<"중" | "하", string> = {
  중: "text-primary border border-primary/50",
  하: "text-neutral-400 border border-neutral-300",
};

function SkillLevelBadge({ level }: { level: SkillLevel }) {
  const text = BAR_DISPLAY[level].text;
  return (
    <span
      className={`ml-auto flex-shrink-0 text-[10px] font-mono px-2 py-0.5 rounded-full ${LEVEL_STYLE[text]}`}
    >
      {text}
    </span>
  );
}

function SkillMiniBar({ skill, showBar = true }: { skill: SkillItem; showBar?: boolean }) {
  const { text, bar } = BAR_DISPLAY[skill.level];
  return (
    <div className="flex flex-col gap-1.5 px-2.5 py-2 rounded-lg border border-neutral-200 min-w-[120px]">
      <span className="flex items-center gap-1.5 text-[12px] font-medium text-neutral-900 whitespace-nowrap">
        <skill.icon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
        {skill.name}
        {showBar && (
          <span className="ml-auto text-[10px] font-mono text-neutral-400">{text}</span>
        )}
      </span>
      {showBar && (
        <div className="h-[3px] w-full bg-neutral-100 rounded-full overflow-hidden">
          <div className={`h-full rounded-full ${bar}`} />
        </div>
      )}
    </div>
  );
}

const GROUP_CATEGORIES = CATEGORIES.filter((c) => c !== "All");

export default function SkillDetailModal({ skillCategory, onClose }: SkillDetailModalProps) {
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

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  if (!isMounted || !skillCategory) return null;

  // ─────────────────────────────────────────
  // MOBILE
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
          {/* 헤더 */}
          <div className="flex items-center justify-between px-6 pt-8 pb-4 border-b border-neutral-100 flex-shrink-0">
            <div className="flex flex-col">
              <span className="text-neutral-400 text-[11px] font-mono tracking-widest lowercase">
                index / {activeTab.toLowerCase()}
              </span>
              <h2 className="text-[22px] font-bold text-neutral-950 tracking-tight mt-0.5">
                {activeTab}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-xs font-mono font-bold text-neutral-900 border border-neutral-900 rounded-full px-4 py-2 hover:bg-neutral-50 active:scale-95 transition-all cursor-pointer"
            >
              닫기 ✕
            </button>
          </div>

          {/* 카테고리 탭 */}
          <div className="flex gap-2 px-6 pt-4 pb-3 overflow-x-auto flex-shrink-0 border-b border-neutral-100">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3 py-1.5 rounded-full text-[12px] font-mono whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === cat
                    ? "bg-primary text-white"
                    : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 스킬 리스트 */}
          <div className="flex-1 overflow-y-auto px-6 py-5 pb-10">
            {activeTab === "All" ? (
              GROUP_CATEGORIES.map((cat) => (
                <div key={cat} className="mb-5 last:mb-0">
                  <span className="block text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-2">
                    {cat}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {SKILL_DATA[cat].map((skill, index) => (
                      <SkillMiniBar key={index} skill={skill} showBar={cat !== "Infra"} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              SKILL_DATA[activeTab]?.map((skill, index) => (
                <div key={index} className="py-5 border-b border-neutral-100 last:border-b-0">
                  <div className="flex items-center gap-2.5 mb-2">
                    <skill.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <h4 className="text-[16px] font-semibold text-neutral-900">
                      {skill.name}
                    </h4>
                    <SkillLevelBadge level={skill.level} />
                  </div>
                  <p className="text-[14px] text-neutral-500 font-normal leading-relaxed pl-[34px]">
                    {skill.desc}
                  </p>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  // ─────────────────────────────────────────
  // PC
  // ─────────────────────────────────────────
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-black/30 backdrop-blur-[4px] z-50 flex items-center justify-center p-6 pointer-events-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.96, y: 12 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96, y: 12 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[780px] h-[600px] flex rounded-[36px] border border-white/80 shadow-2xl overflow-hidden bg-white text-black"
      >
        {/* LEFT SIDEBAR */}
        <div className="glass-sidebar flex flex-col pt-14 px-6 flex-shrink-0">
          {/* 닫기 버튼 (맥 스타일) */}
          <button
            onClick={onClose}
            title="닫기"
            className="w-3.5 h-3.5 bg-[#ff5f56] rounded-full absolute left-6 top-6 shadow-inner hover:brightness-90 active:scale-95 transition-all outline-none cursor-pointer group flex items-center justify-center"
          >
            <span className="text-[9px] text-[#4c0000] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none pb-[1px]">✕</span>
          </button>

          <span className="text-[#3b82f6] text-[11px] font-mono tracking-widest uppercase mb-6 select-none">
            Category
          </span>

          <nav className="flex flex-col gap-1">
            {CATEGORIES.map((cat) => {
              const isSelected = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`text-left text-[14px] px-3 py-2 rounded-lg transition-all duration-150 outline-none cursor-pointer ${
                    isSelected
                      ? "bg-[#00375B]/[0.06] text-primary font-semibold"
                      : "text-neutral-400 hover:text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </nav>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 min-h-0 flex flex-col overflow-hidden bg-white">
          {/* 컨텐츠 헤더 */}
          <div className="px-8 pt-8 pb-4 border-b border-neutral-100 flex-shrink-0">
            <span className="text-[11px] font-mono text-neutral-400 tracking-widest uppercase">
              skill
            </span>
            <h2 className="text-[22px] font-bold text-neutral-900 mt-0.5">
              {activeTab}
            </h2>
          </div>

          {/* 스킬 리스트 */}
          <div className="flex-1 overflow-y-auto px-8 py-2">
            {activeTab === "All" ? (
              GROUP_CATEGORIES.map((cat) => (
                <div key={cat} className="mb-5 last:mb-0">
                  <span className="block text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-2 mt-3">
                    {cat}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {SKILL_DATA[cat].map((skill, index) => (
                      <SkillMiniBar key={index} skill={skill} showBar={cat !== "Infra"} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              SKILL_DATA[activeTab]?.map((skill, index) => (
                <div key={index} className="py-5 border-b border-neutral-100 last:border-b-0">
                  <div className="flex items-center gap-2.5 mb-2">
                    <skill.icon className="w-[18px] h-[18px] text-primary flex-shrink-0" />
                    <h4 className="text-[15px] font-semibold text-neutral-900">
                      {skill.name}
                    </h4>
                    <SkillLevelBadge level={skill.level} />
                  </div>
                  <p className="text-[13px] text-neutral-500 font-normal leading-relaxed pl-[30px]">
                    {skill.desc}
                  </p>
                </div>
              ))
            )}

            {SKILL_DATA[activeTab]?.length === 0 && (
              <div className="text-center text-neutral-400 py-20 text-sm font-mono select-none">
                no_data_found
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
