import React from "react";
import Image from "next/image";
import { PROJECT_DATA } from "../../data/projectData";

const ProjectSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-white py-24 overflow-hidden font-sans flex flex-col justify-center">
      
      {/* 배경 대형 텍스트 (워터마크) */}
      <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 text-[60px] md:text-[150px] font-semibold text-primary/5 select-none pointer-events-none z-0 whitespace-nowrap">
        PROJECTS
      </div>

      <div className="relative max-w-[1200px] w-full mx-auto px-6 md:px-0 z-10">
        
        {/* 모바일/PC 공통 타이틀 */}
        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-12 text-center md:text-left">
          PROJECTS
        </h2>

        {/* 프로젝트 카드 그리드 (PC 2열, 모바일 1열) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PROJECT_DATA.map((project) => (
            <div
              key={project.id}
              className="flex flex-col bg-[rgba(244,249,255,0.5)] border border-[rgba(179,215,238,0.5)] backdrop-blur-md rounded-[30px] overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              
              {/* 1. 썸네일 영역 (가상 영역 - 추후 Image 태그 주석 해제) */}
              <div className="w-full h-52 md:h-64 bg-[#e5f1fb] relative overflow-hidden flex items-center justify-center group">
                {/* 실제 이미지가 준비되면 아래 주석을 해제하세요 */}
                {/* <Image 
                  src={project.thumbnailUrl} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                /> */}
                <span className="text-[#8cb8d9] font-medium text-lg">Image Placeholder</span>
              </div>

              {/* 2. 프로젝트 정보 영역 */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#004571] leading-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[#848484] mb-4">{project.period}</p>
                
                <p className="text-base text-gray-700 mb-6 font-medium break-keep">
                  {project.shortDescription}
                </p>

                <div className="mb-6 flex-grow">
                  <span className="text-[#004571] font-semibold text-sm block mb-2">Key Achievements</span>
                  <ul className="space-y-2 text-sm text-gray-600 list-disc list-outside pl-4 break-keep">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="leading-relaxed">{achievement}</li>
                    ))}
                  </ul>
                </div>

                {/* 3. 사용 기술 태그 */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white text-[#004571] text-[13px] font-semibold rounded-full border border-[rgba(179,215,238,0.8)]">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 4. 액션 버튼 (GitHub, Notion) */}
                <div className="flex gap-3 mt-auto">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex-1 text-center py-3 bg-white text-[#555] font-bold text-sm rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                      💻 GitHub
                    </a>
                  )}
                  {project.notionUrl && (
                    <a href={project.notionUrl} target="_blank" rel="noreferrer" className="flex-1 text-center py-3 bg-[#004571] text-white font-bold text-sm rounded-xl shadow-md hover:bg-[#003456] transition-colors">
                      📝 상세 회고 보기
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;