import Image from "next/image";
import React from "react";
import { FiMail, FiGithub } from "react-icons/fi";
import { ABOUT_ME_DATA } from "../../data/aboutMeData";

const AboutMe = () => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden font-sans flex flex-col items-center justify-center py-20 md:py-0">

      {/* 배경 ABOUT ME - 위 */}
      <span className="bg-title-top text-secondary text-[42px] md:text-[150px] tracking-[5%] md:tracking-[38%] top-6 md:top-[-8%]">
        ABOUT ME
      </span>


      <div className="relative w-full max-w-[1200px] mx-auto px-6 md:px-8 z-10
                      grid grid-cols-1 md:grid-cols-[1fr_320px_1fr] lg:grid-cols-[1fr_380px_1fr]
                      items-center gap-8 md:gap-6 lg:gap-10">

        {/* 1. 텍스트 영역 */}
        <div className="z-20">
          <h1 className="text-[54px] md:text-[72px] lg:text-[85px] font-semibold text-[#004571] leading-[0.9] mb-4">
            서샘이
          </h1>
          <p className="text-xl md:text-xl lg:text-2xl text-[#848484] font-normal mb-5 break-keep">
            {ABOUT_ME_DATA.mainCopy}
          </p>
          <div className="text-sm md:text-base text-black leading-relaxed space-y-3 break-keep">
            {ABOUT_ME_DATA.introTexts.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>

        {/* 2. 프로필 사진 영역 */}
        <div className="z-10 mx-auto w-full">
          <Image
            className="w-full aspect-[495/629] object-cover rounded-[40px]"
            width={380}
            height={483}
            src="/images/foraboutme.png"
            alt="서샘이 프로필 사진"
          />
        </div>

        {/* 3. 연락처 카드 영역 */}
        <div className="z-20">
          <div className="w-full bg-[rgba(244,249,255,0.7)] border border-[rgba(218,238,255,0.8)] rounded-[40px] p-8 md:p-8 lg:p-10 backdrop-blur-md shadow-xl flex flex-col gap-6">
            <span className="text-[22px] md:text-[26px] lg:text-[32px] font-bold text-[#004571]">
              Contact
            </span>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:seosi97@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-200">
                  <FiMail className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-neutral-400 mb-0.5">Email</p>
                  <p className="text-[14px] font-medium text-primary group-hover:underline underline-offset-2">seosi97@gmail.com</p>
                </div>
              </a>
              <a
                href="https://github.com/sambbang1027"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-200">
                  <FiGithub className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-neutral-400 mb-0.5">GitHub</p>
                  <p className="text-[14px] font-medium text-primary group-hover:underline underline-offset-2">sambbang1027</p>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* 배경 ABOUT ME - 아래 (데스크톱만 보임) */}
      <span className="bg-title-bottom text-primary hidden md:block">
        ABOUT ME
      </span>

    </div>
  );
};

export default AboutMe;