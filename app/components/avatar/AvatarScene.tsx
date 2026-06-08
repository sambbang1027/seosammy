"use client";
import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function AvatarModel() {
  const { scene } = useGLTF("/avatar.glb");
  const ref = useRef<THREE.Group>(null);

 console.log("position:", scene.position);
  console.log("children:", scene.children);
  scene.traverse((obj) => {
    console.log(obj.name, obj.type);
  });

  // 천천히 좌우로 흔들리는 효과
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return <primitive ref={ref} object={scene} />;
}

export default function AvatarScene() {
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      // 얼굴만 보이도록 카메라 위치 조절
      // position Y값 올리면 더 위쪽(머리), 내리면 아래쪽
      // fov 낮추면 더 크게 보임
camera={{ position: [0, 1.45, 2], fov: 11 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[2, 3, 2]} intensity={1.5} />
      <directionalLight position={[-2, 1, -1]} intensity={0.4} />

      <Suspense fallback={null}>
        <AvatarModel />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/avatar.glb");