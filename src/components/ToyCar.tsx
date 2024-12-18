import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const ToyCar = () => {
  const toyCarRef = useRef<THREE.Group>(null);

  // GLTF 모델 불러오기
  const { scene } = useGLTF('/toyCar.gltf');

  // 매 프레임마다 toyCarRef에 접근하여 회전 애니메이션 추가
  useFrame(() => {
    if (toyCarRef.current) {
      toyCarRef.current.rotation.y += 0.01; // Y축으로 회전
    }
  });

  return <primitive ref={toyCarRef} object={scene} scale={1.5} />;
};

export default ToyCar;
