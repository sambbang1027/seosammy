/**3d 공간 안에 있는 버블 컴포넌트 */ 
"use client";

import { useTexture } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/three";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { BubbleConfig } from "../../context/BubbleContext";

// ─────────────────────────────────────────
// 파티클 하나의 데이터 타입
// ─────────────────────────────────────────
interface Particle {
  id: number;                             
  position: THREE.Vector3; // 현재 위치
  velocity: THREE.Vector3; // 이동 방향 + 속도
  opacity: number;        // 투명도 (0~1)
  scale: number;          // 크기
  type: 'bubble' | 'droplet'; // 파티클 종류 (버블 조각 or 물방울)
}


// ─────────────────────────────────────────
// 파티클 생성 함수
// 버블 터질 때 호출 
// ─────────────────────────────────────────
function createParticles(origin: [number, number, number], count = 40): Particle[] {
  return Array.from({length: count}, (_, i) => {
    //1. 초기 위치를 버블 중심 주변 구형으로 랜덤하게 설정
    const radius = Math.random() * 0.15;
    const angle = Math.random() * Math.PI * 2;
    const theta = Math.acos(2 * Math.random() - 1);
    const initPos = new THREE.Vector3(...origin).add(
      new THREE.Vector3(
        radius * Math.sin(theta) * Math.cos(angle),
        radius * Math.sin(theta) * Math.sin(angle),
        radius * Math.cos(theta)
      )
    );

    //2. 초기 속도를 구형으로 사방으로 퍼지게 설정 
    const speed = Math.random() * 1.0 + 0.8; // 0.8 ~ 1.8 사이 속도
    const velocity = new THREE.Vector3(
      Math.random() - 0.5,
      Math.random() - 0.5,
      Math.random() - 0.5
    ).normalize().multiplyScalar(speed);

    // 3. 파티클 유형 및 크기 다양화 
    const type = Math.random() > 0.4 ? 'bubble' : 'droplet'; // 60% 버블 조각, 40% 물방울
    const scale = type === 'bubble'
    ? Math.random() * 0.15 + 0.08 // 버블 조각은 0.08 ~ 0.23 크기
    : Math.random() * 0.05 + 0.02 // 물방울은 0.02 ~ 0.07 크기

    return {
      id: i,
      position: initPos,
      velocity : velocity,
      opacity: 1,
      scale: scale,
      type: type,
    }
  });
}

// ─────────────────────────────────────────
// 파티클 렌더링 컴포넌트 
// useFrame으로 매 프레임마다 위치/ 투명도 업뎃
// ─────────────────────────────────────────
function BubbleParticles({
  origin,
  onComplete
}:{
  origin: [number, number, number];
  onComplete: () => void; // 파티클 애니메이션 끝났을 때 호출되는 콜백
}) {
  // 파티클 배열 상태 
  const [particles, setParticles] = useState<Particle[]>(() => createParticles(origin));
  // 완료 콜백 이미 호출했는지 여부 
  const completedRef = useRef(false);

  // useFrame : 매 프레임(60fps)마다 실행되는 함수
  // delta : 이전 프레임과의 시간 차이(초 단위)
  useFrame((_, delta) => {
    setParticles(prev => {
      const updated = prev.map(p => {
      // 1. 새로운 속도 계산 (기존 속도에서 시작)
      const newVelocity = p.velocity.clone();

      // 2. 공기 저항 적용 (속도를 살짝 줄임)
      newVelocity.multiplyScalar(0.99);

      // 3. 중력 적용 (y축 아래로 가속도 추가)
      // delta를 곱해 프레임 독립적인 속도 변화를 줍니다.
      const gravityForce = p.type === 'droplet' ? -0.5 : -0.2; 
      newVelocity.y += gravityForce * delta * 1.2;

      return {
        ...p,
        // 4. 위치 업데이트 (현재 위치 + (속도 * 시간))
        position: p.position.clone().add(newVelocity.clone().multiplyScalar(delta * 2)),
        velocity: newVelocity, // 업데이트된 속도 저장
        opacity: p.opacity - delta * 2.0,
      };
    });

      const visibleParticles = updated.filter(p => p.opacity > 0);

      // 모든 파티클이 완전히 투명해지면 완료 콜백 호출
      if(visibleParticles.length === 0 && !completedRef.current){
        completedRef.current = true;

        // 즉시 호출 x -> 브라우저 준비 완료 후 실행 
        requestAnimationFrame(() => {
          onComplete();
        });
      }
      return visibleParticles;
    });
  });

// 공통 파티클 재질 (버블 느낌)
  const particleMaterialProps = {
    color: "#bbd7ff",
    transparent: true,
    transmission: 0.8,
    iridescence: 0.8,
    iridescenceIOR: 1.3,
    iridescenceThicknessRange: [0, 1400] as const,
    thickness: 0.05,
    ior: 1.3,
    metalness: 0.1,
    roughness: 0.1,
  };



return (
    <>
      {particles.map(p => (
        <mesh
          key={p.id}
          position={p.position}
          scale={p.scale}
        >
          {/* 파티클 유형에 따라 모양 변경 */}
          {p.type === 'bubble' ? (
            <sphereGeometry args={[1, 16, 16]} /> // 작은 방울은 더 세밀하게
          ) : (
            <sphereGeometry args={[1, 6, 6]} /> // 미세 물방울은 거칠게
          )}
          <meshPhysicalMaterial
            {...particleMaterialProps}
            opacity={Math.max(0, p.opacity)}
          />
        </mesh>
      ))}
    </>
  );
}


// ─────────────────────────────────────────
// 공통 버블 재질 + 터지는 애니메이션 로직
// ─────────────────────────────────────────
function useBubbleAnimation() {
  // 터짐 여부 상태
  const [popped, setPopped] = useState(false);
  // 화면에 보이는지 여부 상태
  const [visible, setVisible] = useState(true);
  // 파티클 보여줄지 말지
  const [showParticles, setShowParticles] = useState(false);
// 파티클이 이미 생성되었는지 추적하는 Ref (리렌더링을 유발하지 않음)
  const particleTriggeredRef = useRef(false);

  // 터질 때 살짝 커졌다가 사라지는 애니메이션
  const { scale } = useSpring({
    scale: popped ? 0 : 1,
    config: { tension: 400, friction: 15},

    // 애니메이션 값이 변할 때마다 체크
    onChange: ({ value }) => {
      // 아직 파티클이 안 터졌고, 스케일이 임계값 이하일 때 딱 한 번만 실행
      if (popped && value.scale < 0.8 && !particleTriggeredRef.current) {
        particleTriggeredRef.current = true; // 중복 실행 방지 플래그 설정
        setShowParticles(true);
        // 버블은 파티클이 보이기 시작할 때 바로 숨김 처리
        setVisible(false);
      }
    },
    onRest: () => {
      if (popped) {
        setVisible(false);
      }
    },
  });

  // 파티클 애니메이션 끝나면 버블 재생성
  const handleParticlesComplete = () => {
    setShowParticles(false);
    setTimeout(() => {
      particleTriggeredRef.current = false; // 다음 터짐을 위해 플래그 리셋
      setPopped(false);
      setVisible(true);
    }, 500); // 파티클 사라진 후 잠깐 대기
  }


  return { popped, setPopped, visible, scale, showParticles, handleParticlesComplete };
}

// ─────────────────────────────────────────
// 공통 버블 재질
// ─────────────────────────────────────────
function BubbleMaterial({ size }: { size: number }) {
  return (
    <meshPhysicalMaterial
      color="#fff5fc"                         // 핑크빛 색상
      transmission={0.9}                      // 투과도 (1에 가까울수록 투명)
      thickness={size}                        // 재질 두께 (버블 크기에 비례)
      roughness={0}                           // 표면 거칠기 (0 = 매끄러움)
      metalness={0.1}                         // 금속성
      ior={1.5}                               // 굴절률
      transparent={true}                      // 투명 활성화
      opacity={0.4}                           // 투명도
      iridescence={1}                         // 홀로그램 느낌
      iridescenceIOR={1.3}                    // 홀로그램 굴절률
      iridescenceThicknessRange={[0, 1400]}   // 홀로그램 두께 범위
      envMapIntensity={1}                     // 환경맵 반사 강도
    />
  );
}


// ─────────────────────────────────────────
// 아이콘 없는 버블
// ─────────────────────────────────────────
function BubbleEmpty({ position, size = 1 }: {
  position: [number, number, number];
  size?: number;
}) {
  const {viewport} = useThree();
  const meshRef = useRef<THREE.Mesh>(null);
  /** 반응형 위치 계산 (기준점) */
  const responsiveX =  (position[0] / 10) * viewport.width; 
  const responsiveY = (position[1] / 10) * viewport.height; 

  // 각 버블마다 다른 위상/주파수 오프셋 (컴포넌트 마운트 시 1회만 생성)
  const [offset] = useState(() => ({
    phase: Math.random() * Math.PI * 2,
    freqY: 0.8 + Math.random() * 0.8,
    freqX: 0.5 + Math.random() * 0.6,
    ampY:  0.08 + Math.random() * 0.07,
    ampX:  0.03 + Math.random() * 0.04,
  }));
  const { popped, setPopped, visible, scale, showParticles, handleParticlesComplete } = useBubbleAnimation();
  const [popPosition, setPopPosition] = useState<[number, number, number]>([0, 0, 0]);

  // ─────────────────────────────────────────
  // 두둥실 모션 
  // ─────────────────────────────────────────
  useFrame((state) => {
    if (meshRef.current && visible && !popped) {
      const time = state.clock.getElapsedTime();

      const moveX = Math.cos(time * offset.freqX + offset.phase) * offset.ampX;
      const moveY = Math.sin(time * offset.freqY + offset.phase) * offset.ampY;

      meshRef.current.position.set(
        responsiveX + moveX,
        responsiveY + moveY,
        position[2] 
      );
     
      meshRef.current.rotation.x = Math.sin(time * 0.5 + offset.phase) * 0.05;
      meshRef.current.rotation.y = Math.cos(time * 0.3 + offset.phase) * 0.05;
    }
  });



  // 클릭 시 버블 터뜨리기
  const handlePop = () => {
    if(!popped && meshRef.current){
      const {x, y, z} = meshRef.current.position;
      setPopPosition([x, y, z]);
      setPopped(true);
    }   
  }

  return (
    <>
      {visible && (
        <animated.mesh
          ref={meshRef}
          position={[responsiveX, responsiveY, position[2]]}
          scale={scale}
          onClick={handlePop}
        >
          {/* 구체 모양 (size = 반지름, 64x64 폴리곤) */}
          <sphereGeometry args={[size, 64, 64]} />
          <BubbleMaterial size={size} />
        </animated.mesh>
      )}
      {/* 터질 때 파티클 보여주기 */}
      {showParticles && (
        <BubbleParticles origin={popPosition} onComplete={handleParticlesComplete} />
      )}
    </>
  );
}

// ─────────────────────────────────────────
// 아이콘 있는 버블
// ─────────────────────────────────────────
function BubbleWithIcon({ position, size = 1, icon, iconRotation = 0, iconPosition = [0, 0, 0.95] }: {
  position: [number, number, number];
  size?: number;
  icon: string;
  iconRotation?: number;
  iconPosition?: [number, number, number];
}) {
  const {viewport} = useThree();
  const meshRef = useRef<THREE.Mesh>(null);
  const { popped, setPopped, visible, scale, showParticles, handleParticlesComplete } = useBubbleAnimation();
  const [popPosition, setPopPosition] = useState<[number, number, number]>([0, 0, 0]);

  /** 반응형 위치 계산 (기준점) */
  const responsiveX =  (position[0] / 15) * viewport.width; 
  const responsiveY = (position[1] / 10) * viewport.height; 

    const [offset] = useState(() => ({
    phase: Math.random() * Math.PI * 2,
    freqY: 0.8 + Math.random() * 0.8,
    freqX: 0.5 + Math.random() * 0.6,
    ampY:  0.08 + Math.random() * 0.07,
    ampX:  0.03 + Math.random() * 0.04,
  }));

  /** 두둥실 모션 */
  useFrame((state) => {
    if (meshRef.current && visible && !popped) { 
      const time = state.clock.getElapsedTime(); // 시간에 따라 위치와 회전 업데이트
      
      // 반응형 위치 + 두둥실 모션
      const moveX = Math.cos(time * offset.freqX + offset.phase) * offset.ampX;
      const moveY = Math.sin(time * offset.freqY + offset.phase) * offset.ampY;

      meshRef.current.position.set(
        responsiveX + moveX,
        responsiveY + moveY,
        position[2] 
      )

      meshRef.current.rotation.x = Math.sin(time * 0.5 + offset.phase) * 0.05;
      meshRef.current.rotation.y = Math.cos(time * 0.3 + offset.phase) * 0.05;
    }});




  // 아이콘 이미지를 텍스처로 로드
  const texture = useTexture(`/icons/${icon}`);
  // 텍스처 중앙 기준점 설정
  texture.center.set(0.5, 0.5);


    const handlePop = () => {
    if(!popped && meshRef.current){
      const {x, y, z} = meshRef.current.position;
      setPopPosition([x, y, z]);
      setPopped(true);
    }   
  }

  return (
    <>
      {visible && (
        <animated.mesh
          position={[responsiveX, responsiveY, position[2]]}
          scale={scale}
          onClick={handlePop} // 클릭 시 터짐
          ref={meshRef}
        >
          {/* 구체 모양 (size = 반지름, 64x64 폴리곤) */}
          <sphereGeometry args={[size, 64, 64]} />
          <BubbleMaterial size={size} />

          {/* 아이콘 평면 */}
          <mesh
            position={iconPosition}               // 아이콘 위치 (버블마다 개별 설정)
            rotation={[0, 0, iconRotation]}       // 아이콘 기울기
          >
            {/* 아이콘 크기 = 버블 크기의 80% */}
            <planeGeometry args={[size * 0.9, size * 0.9]} />
            <meshBasicMaterial
              map={texture}                       // 아이콘 텍스처
              transparent                         // 투명 활성화
              alphaTest={0.1}                     // 일정 투명도 이하 픽셀 제거
              side={THREE.DoubleSide}             // 앞뒤 양면 렌더링
              depthWrite={false}                  // 원형 테두리 안 생기게
            />
          </mesh>
        </animated.mesh>
      )}
      {/* 터질 때 파티클 보여주기 */}
      {showParticles && (
        <BubbleParticles origin={popPosition} onComplete={handleParticlesComplete} />
      )}
    </>
  );
}

// ─────────────────────────────────────────
// 외부에서 쓰는 통합 Bubble 컴포넌트
// icon prop 있으면 BubbleWithIcon
// icon prop 없으면 BubbleEmpty
// ─────────────────────────────────────────
export default function Bubble(props: BubbleConfig) {
  if (props.icon) {
    return (
      <BubbleWithIcon
        position={props.position}
        size={props.size}
        icon={props.icon}
        iconRotation={props.iconRotation}
        iconPosition={props.iconPosition}
      />
    );
  }
  return (
    <BubbleEmpty
      position={props.position}
      size={props.size}
    />
  );
}