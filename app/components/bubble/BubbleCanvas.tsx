/** 3D 버블 캔버스 (조명, 환경) */

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Bubble from "./Bubble";
import { useBubbles } from "@/app/context/BubbleContext";

export default function BubbleCanvas() {
    const { bubbles } = useBubbles();

    return (
        <Canvas
            orthographic camera={{ position: [0, 0, 10], zoom: 100 }}
            gl= {{ alpha: true, antialias: true }} // 투명 배경과 안티앨리어싱
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "transparent",
            }}
            onCreated={({gl})=>{
                gl.setClearColor(0x000000, 0); // Canvas 배경 완전 투명 
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
    );
}