"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { EDUCATION_DATA } from "../../data/educationData";

export default function EducationSection() {
  return (
    <div className="relative w-full bg-white py-24 overflow-hidden">

      {/* 배경 장식 텍스트 */}
      <div className="hidden md:block absolute left-[-12px] top-[12%] text-[clamp(60px,10vw,130px)] font-semibold text-primary select-none pointer-events-none leading-none">
        EDUCA
      </div>
      <div className="hidden md:block absolute right-[-12px] bottom-[15%] text-[clamp(60px,10vw,130px)] font-semibold text-neutral-200 select-none pointer-events-none leading-none">
        TION
      </div>

      {/* 모바일 타이틀 */}
      <p className="md:hidden text-2xl font-bold text-primary px-6 mb-10">EDUCATION</p>

      {/* 타임라인 컨테이너 */}
      <div className="relative max-w-[1100px] w-full mx-auto px-6 md:px-8 z-10">

        {/* 중앙 세로선 — dot 사이만 연결 */}

        <div className="py-4 md:py-0">
          {EDUCATION_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex items-start md:items-center w-full md:py-5 mb-10 md:mb-0 ${
                item.position === "right"
                  ? "flex-col md:flex-row-reverse"
                  : "flex-col md:flex-row"
              }`}
            >
            {/* 타임라인 점 & 아래로 길게 뻗는 세로선 */}
            <div className="absolute left-6 md:left-1/2 top-0 md:top-8 -translate-x-1/2 z-20 flex flex-col items-center bottom-[-40px]">
              {/* 점 (dot) */}
              <div className="w-4 h-4 rounded-full bg-primary mt-[3px] md:mt-1 flex-shrink-0" />
              
              {/* 아래로 뻗는 선 (다음 카드 영역까지 길게 연결) */}
              <div className="w-[2px] bg-primary/40 flex-grow" />
            </div>

              {/* 카드 */}
              <div
                className={`w-full md:w-[calc(50%-52px)] pl-12 md:pl-0 ${
                  item.position === "right" ? "md:pl-12" : "md:pr-12"
                }`}
              >
                <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,55,91,0.08)] hover:shadow-[0_8px_32px_rgba(0,55,91,0.13)] transition-shadow duration-300">

                  {/* 과정명 */}
                  <h3 className="text-[17px] md:text-[20px] font-semibold text-primary leading-snug mb-3">
                    {item.title}
                  </h3>

                  {/* 기간 & 장소 */}
                  <div className="flex flex-wrap items-center gap-4 text-[13px] text-neutral-400 mb-5">
                    <div className="flex items-center gap-1.5">
                      <Image src="/icons/calendar-icon.svg" alt="calendar" width={14} height={14} />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Image src="/icons/si_pin-fill.svg" alt="location" width={14} height={14} />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* 성과 */}
                  <div className="border-t border-primary/10 pt-4">
                    <span className="text-[13px] font-semibold text-primary block mb-3">
                      성과
                    </span>
                    <ul className="space-y-2">
                      {item.achievements.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] text-neutral-500 leading-relaxed">
                          <span className="mt-[7px] w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

              {/* 빈 공간 */}
              <div className="hidden md:block w-[calc(50%-52px)]" />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
