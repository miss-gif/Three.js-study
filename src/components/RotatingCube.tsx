import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function RotatingCube() {
  const cubeRef = useRef<THREE.Mesh>(null);

  // 매 프레임마다 cubeRef에 접근하여 회전 애니메이션 추가
  useFrame(() => {
    if (cubeRef.current) {
      // null 체크
      cubeRef.current.rotation.x += 0.01; // X축으로 회전
      cubeRef.current.rotation.y += 0.01; // Y축으로 회전
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[1, 1, 1]} /> {/* 1x1x1 크기의 큐브 */}
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default RotatingCube;
