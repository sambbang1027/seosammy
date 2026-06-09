/** 3D 버블 캔버스 (조명, 환경) */
"use client";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Bubble from "./Bubble";
import { useBubbles } from "@/app/context/BubbleContext";
import { useState, useEffect, useRef } from "react";

export default function BubbleCanvas() {
    const { bubbles } = useBubbles();
    const [zoom, setZoom] = useState(100);
    const [frameloop, setFrameloop] = useState<"always" | "never">("never");
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) setZoom(50);
            else if (width < 1024) setZoom(70);
            else if (width < 1440) setZoom(90);
            else setZoom(100);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // 뷰포트에 보일 때만 렌더링
    useEffect(() => {
        if (!containerRef.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => setFrameloop(entry.isIntersecting ? "always" : "never"),
            { threshold: 0.01 }
        );
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="hidden md:block absolute inset-0 z-30 pointer-events-none">
            <Canvas
                frameloop={frameloop}
                orthographic
                camera={{ position: [0, 0, 10], zoom: zoom }}
                gl={{ alpha: true, antialias: true }}
                style={{ background: "transparent" }}
                onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
            >
                <ambientLight intensity={3} />
                <pointLight position={[10, 10, 10]} intensity={5} color={"#ffffff"} />
                <pointLight position={[-10, -10, -10]} intensity={3} color={"#aaddff"} />
                <pointLight position={[0, -10, 5]} intensity={4} color={"#fd239f"} />
                <Environment files={"/hdr/studio_small_08_1k.hdr"} background={false} />
                {bubbles.map((bubble, index) => (
                    <Bubble key={index} {...bubble} />
                ))}
            </Canvas>
        </div>
    );
}