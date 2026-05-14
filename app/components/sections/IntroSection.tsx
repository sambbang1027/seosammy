"use client";
import Image from "next/image";
import {  motion } from "framer-motion";
import { BubbleProvider } from "@/app/context/BubbleContext";
import BubbleCanvas from "../bubble/BubbleCanvas";


const inrtoBubbles = [
  { 
    position: [-3.2, 3, 0] as [number, number, number],
    size: 0.7, 
    icon: "headphone.png",
    iconRotation: 0.4,
    iconPosition: [0, 0, 1.4] as [number, number, number],
  },
  { 
    position: [4, 1.2, 0] as [number, number, number],
    size: 0.7, 
    icon: "cursor.png",
    iconRotation: 0,
    iconPosition: [0, 0, 1.1] as [number, number, number],
  },
  { 
    position: [-5, -1, 0] as [number, number, number],
    size: 0.8, 
    icon: "smile.png",
    iconRotation: 0.5,
    iconPosition: [0, 0, 1.1] as [number, number, number],
  },
  { 
    position: [5.5, -2.5, 0] as [number, number, number],
    size: 0.8, 
    icon: "spring.png",
    iconRotation: -0.5,
    iconPosition: [0, 0, 1.4] as [number, number, number],
  },
];
export default function IntroSection() {
  return (
    <motion.section className="intro-bg h-screen w-full relative overflow-hidden">
      <BubbleProvider bubbles={inrtoBubbles}>
        
        {/* 1. 이름 레이어 (z-20) */}
        <div className="font-alfa text-white absolute top-[15%] left-1/2 -translate-x-1/2 z-50 pointer-events-none whitespace-nowrap">
          <span className="text-[150px]">S</span>
          <span className="text-[120px]">eo</span>
          <span className="text-[150px]">S</span>
          <span className="text-[120px]">am</span>
          <span className="text-[150px]">M</span>
          <span className="text-[120px]">y</span>
        </div>

        {/* 2. 버블 레이어 */}
        <div className="absolute inset-0 z-30">
          <BubbleCanvas />
        </div>

        {/* 3. 얼굴 & 네비 통합 컨테이너 */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[21%] 
                        w-[280px] md:w-[380px] lg:w-[500px] z-40 pointer-events-none">
          
          <div className="relative w-full h-full">
            {/* [얼굴 이미지] */}
            <Image
              src="/images/for3d.png"
              alt="서샘이"
              width={500}
              height={500}
              className="w-full object-cover relative z-[-10]"
            />

            {/* [네비 버튼들] */}
            <a href="#about" className="absolute left-[-50px] top-[30%] pointer-events-auto cursor-pointer">
              <div className="nav-btn -rotate-[10deg]">About Me</div>
            </a>

            <a href="#skill" className="absolute right-[-10px] top-[60%] pointer-events-auto cursor-pointer">
              <div className="nav-btn rotate-[10deg]">Skill</div>
            </a>

            <a href="#project" className="absolute left-[60px] bottom-[-12%] pointer-events-auto cursor-pointer">
              <div className="nav-btn rotate-[8deg]">Project</div>
            </a>
          </div>
        </div>

      </BubbleProvider>
    </motion.section>
  );
}