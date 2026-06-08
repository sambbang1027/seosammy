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

    
      <div className="relative w-full max-w-[1200px] mx-auto px-6 md:px-0 flex flex-col md:flex-row items-center md:items-center md:gap-10 lg:gap-16 z-10">
  
      {/* 수정 2: 텍스트 영역의 강제 여백(md:mt-20)과 self-start를 제거하고, 최대 너비를 줄여 이미지가 중앙으로 오게 함 */}
      <div className="z-20 w-full md:flex-1 md:max-w-[450px] lg:max-w-[520px] pl-6 md:pl-0">
        <h1 className="text-[54px] md:text-[85px] font-semibold text-[#004571] leading-[0.9] mb-4">
          서샘이
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-[#848484] font-normal md:mb-6 break-keep">
          {ABOUT_ME_DATA.mainCopy}
        </p>
        <div className="text-base md:text-lg text-black leading-relaxed bg-white/50 backdrop-blur-sm md:p-0 rounded-xl space-y-4 break-keep">
          {ABOUT_ME_DATA.introTexts.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>

        {/* 2. 프로필 사진 영역*/}
        <div className="relative z-10 my-10 md:my-0 shrink-0">
          <Image
            className="w-full max-w-[280px] md:max-w-[400px] aspect-[495/629] object-cover rounded-[40px]"
            width={400}
            height={400}
            src="/images/foraboutme.png"
            alt="서샘이 프로필 사진"
          />          
        </div>

        {/* 3. 가치관 카드 영역 */}
        <div className="z-20 self-center md:self-auto md:absolute md:right-0 md:bottom-40 right-lg:right-[-90px]">
          <div className="w-[80vw] md:w-[450px] lg:w-[550px] min-h-[140px] bg-[rgba(244,249,255,0.7)] border border-[rgba(218,238,255,0.8)] rounded-[40px] p-8 md:p-10 backdrop-blur-md shadow-xl md:translate-y-10">
            <span className="text-[25px] md:text-[32px] font-bold text-[#004571] block mb-4">
              Value
            </span>
            <div className="text-sm md:text-base text-gray-700 leading-snug space-y-4 break-keep">
              <p className="font-semibold text-lg text-[#004571]">
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