import React from "react";

const AboutMe = () => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden font-sans flex flex-col items-center justify-center py-20 md:py-0">

      {/* 배경 ABOUT ME - 위 */}
      <span className="bg-title-top text-secondary text-[42px] md:text-[150px] tracking-[5%] md:tracking-[38%] top-6 md:top-[-8%]">
        ABOUT ME
      </span>

      <div className="relative w-full max-w-[1200px] mx-auto px-6 md:px-0 flex flex-col md:flex-row items-center md:items-start z-10">
  
      {/* 1. 텍스트 영역 */}
      <div className="z-20 self-start pl-6 md:pl-0 md:mt-20 md:-mr-20">
        <h1 className="text-[54px] md:text-[85px] font-semibold text-[#004571] leading-[0.9] mb-4">
          서샘이
        </h1>
        <p className="text-xl md:text-3xl text-[#848484] font-normal md:mb-5">
          블라블라 하는 개발자
        </p>
        <div className="text-base md:text-lg text-black leading-relaxed bg-white/50 backdrop-blur-sm md:p-0 rounded-xl">
          안녕하세요 저는 칠즈니 입니다.<br />
          제 최애는 정우이고 차애는 모두입니다.<br />
          We still stay together. NCT 127 here
        </div>
      </div>

        {/* 2. 프로필 사진 영역*/}
        <div className="relative z-10 my-10 md:my-0 md:ml-10">
          <img
            className="w-full max-w-[280px] md:max-w-[400px] aspect-[495/629] object-cover rounded-[40px]"
            src="/images/for3d2.png"
            alt="서샘이 프로필 사진"
          />          
        </div>

        {/* 3. 가치관 카드 영역 */}
        <div className="z-20 self-center md:self-auto md:absolute md:right-0 md:bottom-40 right-lg:right-[-90px]">
          <div className="w-[80vw] md:w-[450px] lg:w-[550px] min-h-[140px] md:h-[200px] bg-[rgba(244,249,255,0.7)] border border-[rgba(218,238,255,0.8)] rounded-[40px] p-8 md:p-10 backdrop-blur-md shadow-xl md:translate-y-10">
            <span className="text-[25px] md:text-[32px] font-bold text-[#004571] block mb-4">
              value
            </span>
            <p className="text-sm md:text-base text-gray-600 leading-snug">
              여기에 가치관에 대한 짧은 설명을 넣으면 <br />
              카드가 꽉 차보여서 더 완성도 있어 보입니다.
            </p>
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