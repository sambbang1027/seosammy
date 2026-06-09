import Image from "next/image";
import React from "react";
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

        {/* 3. 가치관 카드 영역 */}
        <div className="z-20">
          <div className="w-full bg-[rgba(244,249,255,0.7)] border border-[rgba(218,238,255,0.8)] rounded-[40px] p-8 md:p-8 lg:p-10 backdrop-blur-md shadow-xl">
            <span className="text-[22px] md:text-[26px] lg:text-[32px] font-bold text-[#004571] block mb-4">
              Value
            </span>
            <div className="text-sm md:text-sm lg:text-base text-gray-700 leading-snug space-y-4 break-keep">
              <p className="font-semibold text-base lg:text-lg text-[#004571]">
                "{ABOUT_ME_DATA.valueArea.coreValue}"
              </p>
              <ul className="space-y-2">
                {ABOUT_ME_DATA.valueArea.details.map((detail, index) => (
                  <li key={index}>
                    <span className="font-bold text-[#004571]">{detail.title}</span>: {detail.desc}
                  </li>
                ))}
              </ul>
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