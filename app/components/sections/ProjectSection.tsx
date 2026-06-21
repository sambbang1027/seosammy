"use client";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { PROJECT_DATA } from "../../data/projectData";
import ImageSlider from "../ui/ImageSlider";

export default function ProjectSection() {
  const featured = PROJECT_DATA.filter((p) => p.isFeatured);

  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">

        {/* 섹션 헤더 */}
        <motion.div
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="flex items-center gap-1.5 text-[11px] font-mono tracking-[0.18em] text-neutral-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 inline-block" />
            Projects
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-primary leading-tight">
            Main Projects
          </h2>
        </motion.div>

        {/* 메인 프로젝트 */}
        <div className="flex flex-col gap-24 md:gap-36">
          {featured.map((project, index) => {
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
                <div className="w-full md:w-[56%]">
                  <ImageSlider images={project.images} title={project.title} aspectClass="aspect-[16/10]" showArrows={false} />
                </div>
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
                  {project.role && project.role.length > 0 && (
                    <div className="bg-primary/[0.04] rounded-lg px-3 py-2 flex flex-col gap-1">
                      <span className="text-[13px] font-semibold text-primary/80">담당</span>
                      <ul className="flex flex-col gap-1">
                        {project.role.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-[13px] text-primary/80 leading-relaxed break-keep"
                          >
                            <span className="mt-[7px] w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.achievements.length > 0 && (
                    <div className="flex flex-col gap-2">
                      <p className="text-[13px] font-semibold text-neutral-700">성과</p>
                      <ul className="flex flex-col gap-2">
                        {project.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-[13px] text-neutral-500 leading-relaxed break-keep"
                          >
                            <span className="mt-[7px] w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
                  <div className="w-12 h-[1px] bg-neutral-200 my-1" />
                  <div className="flex items-center gap-4 flex-wrap">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-[13px] font-semibold text-neutral-400 hover:text-primary transition-colors duration-200 group"
                      >
                        <FiGithub className="w-4 h-4" />
                        <span>GitHub</span>
                        <span className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200">
                          →
                        </span>
                      </a>
                    )}
                    {project.deployUrl && (
                      <a
                        href={project.deployUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-[13px] font-semibold text-neutral-400 hover:text-primary transition-colors duration-200 group"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        <span>라이브</span>
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
                        className="flex items-center gap-1.5 px-4 py-2 text-[12px] font-semibold text-primary border border-primary/30 rounded-full hover:bg-primary hover:text-white transition-all duration-200"
                      >
                        <span>상세 보기</span>
                        <FiExternalLink className="w-3 h-3" />
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
