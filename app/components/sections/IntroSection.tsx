"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BubbleProvider } from "@/app/context/BubbleContext";
import BubbleCanvas from "../bubble/BubbleCanvas";

const inrtoBubbles = [
  { 
    position: [-3, 3, 0] as [number, number, number],
    size: 0.8, 
    icon: "headphone.png",
    iconRotation: 0.4,
    iconPosition: [0, 0, 1.4] as [number, number, number],
  },
  { 
    position: [4, 1.2, 0] as [number, number, number],
    size: 0.9, 
    icon: "cursor.png",
    iconRotation: 0,
    iconPosition: [0, 0, 1.1] as [number, number, number],
  },
  { 
    position: [-5, -1, 0] as [number, number, number],
    size: 0.9, 
    icon: "smile.png",
    iconRotation: 0.5,
    iconPosition: [0, 0, 1.1] as [number, number, number],
  },
  { 
    position: [5.5, -2.5, 0] as [number, number, number],
    size: 0.9, 
    icon: "spring.png",
    iconRotation: -0.5,
    iconPosition: [0, 0, 1.4] as [number, number, number],
  },
];

// 네비 버튼 위치/각도는 기존 코드 그대로 유지
const NAV_ITEMS = [
  { label: "About Me", target: "about", className: "absolute left-[-50px] top-[30%]", rotate: "-rotate-[10deg]" },
  { label: "Skill",    target: "skill",  className: "absolute right-[-10px] top-[60%]", rotate: "rotate-[10deg]" },
  { label: "Project",  target: "project", className: "absolute left-[60px] bottom-[-12%]", rotate: "rotate-[8deg]" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function IntroSection() {
  return (
    <motion.section 
      className="intro-bg 
                h-dvh w-full relative overflow-hidden">
      <BubbleProvider bubbles={inrtoBubbles}>
        
        {/* 1. 이름 레이어 */}
        <div className="font-alfa text-white absolute top-[15%] left-1/2 -translate-x-1/2 z-50 pointer-events-none whitespace-nowrap">
          {/* clamp(최소, 유동, 최대) */}
          <span className="text-[clamp(60px,12vw,150px)]">S</span>
          <span className="text-[clamp(50px,10vw,120px)]">eo</span>
          <span className="text-[clamp(60px,12vw,150px)]">S</span>
          <span className="text-[clamp(50px,10vw,120px)]">am</span>
          <span className="text-[clamp(60px,12vw,150px)]">M</span>
          <span className="text-[clamp(50px,10vw,120px)]">y</span>
        </div>

        {/* 2. 버블 레이어 */}
          <BubbleCanvas />
        

        {/* 3. 얼굴 & 네비 통합 컨테이너 */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[18%] md:top-[21%]
                        w-[70vw] md:w-[45vw] lg:w-[500px] 
                        z-40 pointer-events-none
                        flex flex-col items-center">
          <div className="relative w-full">

            {/* 얼굴 이미지 */}
            <Image
              src="/images/for3d.png"
              alt="서샘이"
              width={800}
              height={800}
              priority // 빠르게 로드될 수 있도록 우선순위 지정
              className="w-full h-auto
                         object-contain relative"
            />

            {/* 네비 버튼들 */}
            <div className="hidden md:block">
              {NAV_ITEMS.map(({ label, target, className, rotate }) => (
              <a
                key={target}
                href={`#${target}`}
                onClick={(e) => { e.preventDefault(); scrollTo(target); }}
                className={`${className} pointer-events-auto cursor-pointer`}
              >
                <div className={`nav-btn ${rotate}
                                text-[clamp(14px,2vw,18px)]
                                px-[clamp(8px, 1.5vw, 16px)]
                                py-[clamp(4px, 1vw, 8px)]
                                `}>
                  {label}
                </div>
              </a>
            ))}
            </div>

              {/* 모바일 전용 네비 */}
              <div className="md:hidden flex flex-wrap justify-center gap-3 mt-8
                              pointer-events-auto w-full">
                {NAV_ITEMS.map(({ label, target }) => (
                  <a
                  key={target}
                  href={`#${target}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(target); }}
                  className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 
                   rounded-full text-white text-md font-medium active:scale-95 transition-transform"
            >
                  {label}
                </a>
                ))}
              </div>
          </div>
        </div>

      </BubbleProvider>
    </motion.section>
  );
}