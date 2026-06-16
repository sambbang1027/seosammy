"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";
import { PROJECT_DATA, ProjectItem } from "../../data/projectData";
import ImageSlider from "../ui/ImageSlider";

function SideProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const [hovered, setHovered] = useState(false);
  const primaryLink = project.deployUrl || project.notionUrl || project.githubUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col gap-3"
    >
      {/* 썸네일 + 슬라이더 */}
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <ImageSlider images={project.images} title={project.title} aspectClass="aspect-[4/3]" showArrows={false} playing={hovered} />

        {/* 호버 오버레이 + 링크 버튼 */}
        <div className={`absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none ${hovered ? "bg-black/40" : "bg-black/0"}`} />
        {primaryLink && (
          <a
            href={primaryLink}
            target="_blank"
            rel="noreferrer"
            className="absolute inset-0 flex items-center justify-center rounded-xl"
          >
            <span className={`w-11 h-11 rounded-full bg-white flex items-center justify-center transition-all duration-300 shadow-lg ${hovered ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
              <FiArrowUpRight className="w-5 h-5 text-primary" strokeWidth={2.5} />
            </span>
          </a>
        )}
      </div>

      {/* 텍스트 */}
      <div className="flex items-center justify-between gap-2 px-0.5">
        <p className="text-[14px] font-semibold text-primary truncate leading-snug">
          {project.title}
        </p>
        <div className="flex items-center gap-2 flex-shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-[11px] font-mono text-neutral-400 hover:text-primary transition-colors duration-200"
            >
              <FiGithub className="w-3 h-3" />
              <span>code</span>
            </a>
          )}
          {project.notionUrl && (
            <a
              href={project.notionUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-[11px] font-mono text-neutral-400 hover:text-primary transition-colors duration-200"
            >
              <FiExternalLink className="w-3 h-3" />
              <span>notion</span>
            </a>
          )}
        </div>
      </div>

      {/* 기술 태그 */}
      <p className="text-[11px] font-mono text-neutral-400 px-0.5 leading-relaxed">
        {project.techStack.slice(0, 3).join(" · ")}
        {project.techStack.length > 3 && ` +${project.techStack.length - 3}`}
      </p>
    </motion.div>
  );
}

export default function SideProjectSection() {
  const side = PROJECT_DATA.filter((p) => !p.isFeatured);

  return (
    <section className="w-full bg-white pb-28 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">

        {/* 섹션 헤더 */}
        <motion.div
          className="mb-10 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="flex items-center gap-1.5 text-[11px] font-mono tracking-[0.18em] text-neutral-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 inline-block" />
            Other Projects
          </span>
          <h3 className="text-[clamp(24px,3vw,36px)] font-bold text-primary leading-tight">
            Side Projects
          </h3>
        </motion.div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {side.map((project, index) => (
            <SideProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
