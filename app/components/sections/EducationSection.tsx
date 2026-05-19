import React from "react";

const EducationTimeline = () => {
  // 데이터 배열화 (관리 및 수정이 훨씬 편해집니다)
  const educationData = [
    {
      id: 1,
      title: "시스원 공공 SI 개발자 양성과정",
      date: "2025.05 ~ 11",
      location: "한국소프트웨어산업협회",
      achievements: [
        "한국소프트웨어산업협회",
        "한국소프트웨어산업협회",
        "한국소프트웨어산업협회",
      ],
      position: "right", // PC에서 오른쪽에 배치
    },
    {
      id: 2,
      title: "MSA기반 풀스택 개발자 양성과정",
      date: "2024.08 ~ 12",
      location: "한국소프트웨어산업협회",
      achievements: [
        "한국소프트웨어산업협회",
        "한국소프트웨어산업협회",
        "한국소프트웨어산업협회",
      ],
      position: "left", // PC에서 왼쪽에 배치
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-white py-20 overflow-hidden flex flex-col justify-center">
      
      {/* 배경 큰 글자: EDUCA (위쪽 왼쪽) */}
      <div className="hidden md:block absolute left-[-20px] top-[5%] 
            text-[60px] md:text-[150px] font-semibold text-[#004571]/10 md:text-primary
            select-none pointer-events-none z-0">
        EDUCA
      </div>

      {/* 배경 큰 글자: TION (아래쪽 오른쪽) */}
      <div className="hidden md:block absolute right-[-20px] bottom-[5%]  
            text-[60px] md:text-[150px] font-semibold text-gray-300/30 md:text-secondary
            select-none pointer-events-none z-0">
        TION
      </div>

        {/* 모바일용 타이틀  */}
    <div className="md:hidden text-4xl font-bold text-secondary top-6 mb-10">
    EDUCATION
    </div>


      {/* 타임라인 메인 컨테이너 */}
      <div className="relative max-w-[1200px] w-full mx-auto px-6 md:px-0 z-10">
        
        {/* 중앙 세로선 (모바일에서는 왼쪽 정렬, PC(md)에서는 정중앙) */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] bg-primary transform md:-translate-x-1/2" />

        {/* 타임라인 카드 반복 시작 */}
        <div className="space-y-12 md:space-y-0 relative">
          {educationData.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-start md:items-center relative w-full ${
                item.position === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* 1. 타임라인 동그라미 점 */}
              <div className="absolute left-[1.5px] md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white transform -translate-x-1/2 z-20" />

              {/* 2. 카드 콘텐츠 박스 */}
              {/* 모바일에서는 선 오른쪽에 배치, PC에서는 원래 정해진 방향(left/right)으로 배치 */}
              <div className={`w-full md:w-[calc(50%-40px)] pl-8 md:pl-0 ${
                item.position === "right" ? "md:pr-10" : "md:pl-10"
              }`}>
                <div className="w-full bg-[rgba(244,249,255,0.4)] border border-[rgba(179,215,238,0.4)] backdrop-blur-md rounded-[30px] p-6 md:p-8 shadow-xl transition-all hover:scale-[1.01]">
                  
                  {/* 과정 타이틀 */}
                  <h3 className="text-xl md:text-[23px] font-semibold text-black mb-4 leading-tight">
                    {item.title}
                  </h3>

                  {/* 기간 & 장소 레이아웃 */}
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm md:text-base text-gray-500 gap-2 sm:gap-6 mb-4">
                    <div className="flex items-center gap-1.5">
                      <img className="w-4 h-4" src="icons/calendar-icon.svg" alt="calendar" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <img className="w-4 h-4" src="icons/si_pin-fill.svg" alt="location" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* 성과 리스트 구역 */}
                  <div className="border-t border-[rgba(179,215,238,0.3)] pt-4">
                    <span className="text-[#004571] font-medium text-base md:text-lg block mb-2">
                      성과
                    </span>
                    <ul className="space-y-1.5 text-sm md:text-base text-gray-700 pl-2 list-disc list-inside">
                      {item.achievements.map((desc, index) => (
                        <li key={index} className="leading-relaxed">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

              {/* 3. PC 전용 빈 공간 채우기 용도 (좌우 밸런스 유지) */}
              <div className="hidden md:block w-[calc(50%-40px)]" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default EducationTimeline;