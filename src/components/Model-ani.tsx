import { useAnimations, useGLTF } from '@react-three/drei';
import { useGraph } from '@react-three/fiber';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { AnimationClip, Group, Material, Object3D } from 'three';
import { SkeletonUtils } from 'three-stdlib';
import { GroupProps } from '@react-three/fiber';

interface ModelAniProps extends GroupProps {
  customProp?: string; // 필요시 사용자 정의 속성 추가
}

// GLTF 데이터 구조를 커스터마이즈한 타입 정의
interface GLTFResult {
  scene: Group; // GLTF의 전체 씬
  animations: AnimationClip[]; // 애니메이션 데이터
  nodes: { [key: string]: Object3D }; // GLTF에 포함된 노드들
  materials: { [key: string]: Material }; // GLTF에 포함된 재질
}

export function ModelAni(props: ModelAniProps) {
  const group = React.useRef<THREE.Group>(null);

  // useGLTF 훅을 통해 GLTF 데이터를 가져옴
  const { scene, animations } = useGLTF('/model-ani.glb') as GLTFResult;

  // Clone 처리
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);

  // useGraph를 사용하여 노드와 재질 데이터 추출
  const { nodes, materials } = useGraph(clone) as {
    nodes: Record<string, THREE.SkinnedMesh>;
    materials: Record<string, THREE.Material>;
  };

  // useAnimations 훅을 통해 애니메이션 컨트롤러 가져오기
  const { actions } = useAnimations(animations, group);

  // 애니메이션 실행
  useEffect(() => {
    actions['Armature|mixamo.com|Layer0']?.play();
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          {/* Node 데이터 렌더링 */}
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials.Wolf3D_Body}
            skeleton={nodes.Wolf3D_Body.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Glasses"
            geometry={nodes.Wolf3D_Glasses.geometry}
            material={materials.Wolf3D_Glasses}
            skeleton={nodes.Wolf3D_Glasses.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials.Wolf3D_Hair}
            skeleton={nodes.Wolf3D_Hair.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials.Wolf3D_Outfit_Bottom}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials['aleksandr@readyplayer']}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials.Wolf3D_Outfit_Top}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          />
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials.Wolf3D_Skin}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials.Wolf3D_Teeth}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
          />
        </group>
      </group>
    </group>
  );
}

// GLTF 파일 미리 로드
useGLTF.preload('/model-ani.glb');
