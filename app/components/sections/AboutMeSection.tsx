import React from "react";

const AboutMe = () => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden font-sans">

      {/* 배경 ABOUT ME - 위 */}
      <span className="bg-title-top text-secondary">ABOUT ME</span>

      {/* 메인 콘텐츠 영역 */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 px-6 pt-24 pb-16 z-10 relative">

        {/* 텍스트 영역 - 모바일: 이미지 아래 / 데스크탑: 왼쪽 */}
        <div className="order-2 md:order-1 flex-shrink-0 w-full md:w-auto md:max-w-xs text-center md:text-left md:pt-20">
          <h1 className="text-5xl sm:text-6xl md:text-[75px] font-semibold text-[#004571] leading-tight mb-2">
            서샘이
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-[#848484] font-normal mb-5">
            블라블라 하는 개발자
          </p>
          <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed">
            안녕하세요 저는 칠즈니 입니다.<br />
            제 최애는 정우이고 차애는 모두입니다.<br />
            We still stay together. NCT 127 here
          </p>
        </div>

        {/* 이미지 + 스킬카드 묶음 - 모바일: 위 / 데스크탑: 오른쪽 */}
        <div className="order-1 md:order-2 relative flex-shrink-0">
          {/* 프로필 사진 */}
          <img
            className="w-64 sm:w-80 md:w-[380px] lg:w-[495px] h-auto object-cover rounded-2xl"
            src="/images/for3d2.png"
            alt="서샘이 프로필 사진"
          />

          {/* 스킬 카드 - 데스크탑: 이미지 오른쪽 하단 / 모바일: 이미지 아래 */}
          <div className="
            mt-4
            md:absolute md:left-full md:top-auto md:bottom-0 md:ml-4 md:mt-0
            w-full md:w-72 lg:w-[320px]
            bg-[rgba(244,249,255,0.40)] border border-[rgba(218,238,255,0.60)]
            rounded-[40px] p-8
          ">
            <span className="text-xl md:text-[25px] font-semibold text-[#004571]">
              value
            </span>
          </div>
        </div>

      </div>

      {/* 배경 ABOUT ME - 아래 */}
      <span className="bg-title-bottom text-primary">ABOUT ME</span>

    </div>
  );
};

export default AboutMe;