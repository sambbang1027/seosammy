/** 3D 버블 캔버스 (조명, 환경) */
"use client";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Bubble from "./Bubble";
import { useBubbles } from "@/app/context/BubbleContext";
import { useState, useEffect } from "react";

export default function BubbleCanvas() {
    const { bubbles } = useBubbles();
    const [zoom, setZoom] = useState(100);

    // 반응형 줌 조절 (화면 크기에 따라)
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) setZoom(50); // 모바일
            else if (width < 1024) setZoom(70); // 태블릿
            else if (width < 1440) setZoom(90); // 작은 데스크탑
            else setZoom(100); // 데스크탑
        }

        handleResize(); // 초기 크기 설정
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        
        <div className="hidden md:block absolute inset-0 z-30 pointer-events-none">
            <Canvas
                orthographic 
                camera={{ position: [0, 0, 10], zoom: zoom }}
                gl= {{ alpha: true, antialias: true }}
                style={{ background: "transparent" }}
                onCreated={({gl})=>{
                    gl.setClearColor(0x000000, 0);
                }}
            >
            {/* 전체적인 밝기 */}
            <ambientLight intensity={3} />
            {/* 흰색 메인 조명 */}
            <pointLight position={[10, 10, 10]} intensity={5} color={"#ffffff"} />
            {/* 파란색 보조 조명 */}
            <pointLight position={[-10, -10, -10]} intensity={3} color={"#aaddff"} />
            {/* 핑크색 포인트 조명 */}
            <pointLight position={[0, -10, 5]} intensity={4} color={"#fd239f"} />
            {/* 환경맵 - 버블 반사광 소스, 배경 제거 */}
            <Environment files={"/hdr/studio_small_08_1k.hdr"} background={false} />/
            {/* Context 버블 렌더링  */}
            {bubbles.map((bubble, index) => (
                <Bubble key={index} {...bubble} />
            ))}
        </Canvas>
    </div>
    );
}