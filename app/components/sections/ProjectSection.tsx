"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import { PROJECT_DATA } from "../../data/projectData";

function BrowserMockup({ src, alt }: { src: string; alt: string }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,55,91,0.12)] border border-neutral-200/80">
      {/* 브라우저 크롬 바 */}
      <div className="bg-[#f0f0f0] px-4 py-[10px] flex items-center gap-2 border-b border-neutral-200">
        <span className="w-[11px] h-[11px] rounded-full bg-[#FF5F57] flex-shrink-0" />
        <span className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E] flex-shrink-0" />
        <span className="w-[11px] h-[11px] rounded-full bg-[#28C840] flex-shrink-0" />
        <div className="ml-2 flex-1 bg-white rounded-[6px] px-3 py-[5px] text-[11px] text-neutral-400 font-mono truncate">
          https://sammy.dev
        </div>
      </div>

      {/* 스크린샷 */}
      <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-[#e8f4fd] to-[#dce9f5]">
        {!imgError ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <FiExternalLink className="w-5 h-5 text-primary/40" />
            </div>
            <span className="text-xs font-mono text-primary/30">screenshot</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectSection() {
  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">

        {/* 섹션 헤더 */}
        <motion.div
          className="mb-20 md:mb-28"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[12px] font-mono tracking-[0.2em] text-neutral-400 uppercase">
            / projects
          </span>
          <h2 className="text-[clamp(52px,9vw,100px)] font-extrabold text-primary leading-[0.9] mt-1 select-none">
            WORK
          </h2>
        </motion.div>

        {/* 프로젝트 목록 */}
        <div className="flex flex-col gap-24 md:gap-36">
          {PROJECT_DATA.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-14`}
              >
                {/* 목업 영역 */}
                <div className="w-full md:w-[56%]">
                  <BrowserMockup src={project.thumbnailUrl} alt={project.title} />
                </div>

                {/* 텍스트 영역 */}
                <div className={`w-full md:w-[44%] flex flex-col gap-5 ${isEven ? "md:pl-2" : "md:pr-2"}`}>
                  <span className="text-[12px] font-mono tracking-[0.15em] text-neutral-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-[24px] md:text-[30px] font-bold text-primary leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-[12px] font-mono text-neutral-400 mt-1.5">
                      {project.period}
                    </p>
                  </div>

                  <p className="text-[15px] text-neutral-500 leading-relaxed break-keep">
                    {project.shortDescription}
                  </p>

                  {/* 기술 태그 */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-[11px] font-mono font-medium text-primary/70 border border-primary/15 bg-primary/[0.04] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* 구분선 */}
                  <div className="w-12 h-[1px] bg-neutral-200 my-1" />

                  {/* 링크 */}
                  <div className="flex items-center gap-6">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-[13px] font-semibold text-neutral-500 hover:text-primary transition-colors duration-200 group"
                      >
                        <FiGithub className="w-4 h-4" />
                        <span>GitHub</span>
                        <span className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200">
                          →
                        </span>
                      </a>
                    )}
                    {project.notionUrl && (
                      <a
                        href={project.notionUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-[13px] font-semibold text-neutral-500 hover:text-primary transition-colors duration-200 group"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        <span>회고 보기</span>
                        <span className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200">
                          →
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
