import * as THREE from "three";
import { Float, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type keyCapProps = {
    position?:[number,number,number]
    rotation?:[number,number,number]
    texture?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 
}

type GLTFResult = GLTF & {
  nodes: {
    Keycap: THREE.Mesh;
  };
  materials: Record<string, unknown>;
};

export function Keycap({  
  position=[0,0,0]  , rotation = [0,0,0], texture = 0
  }:keyCapProps) {
  const { nodes } = useGLTF("/keycap.gltf") as unknown as GLTFResult;

  const textures = [
    "/keycap_uv-1.png",
    "/keycap_uv-2.png",
    "/keycap_uv-3.png",
    "/keycap_uv-4.png",
    "/keycap_uv-5.png",
    "/keycap_uv-6.png",
    "/keycap_uv-7.png",
    "/keycap_uv-9.png",
  ]
  const uvTextures = textures[texture]
  const keycapTextures = useTexture(uvTextures)
  keycapTextures.flipY = false
  keycapTextures.colorSpace = THREE.SRGBColorSpace;
  const placeholderMat = new THREE.MeshStandardMaterial({
    map: keycapTextures,
    roughness: 0.7,
  });

  return (
    <Float rotationIntensity={3} position={position} rotation={rotation} >
    <group dispose={null}   >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Keycap.geometry}
        material={placeholderMat}
        rotation={[Math.PI / 2, 0, 0]}
        scale={10}
        />
    </group>
    </Float>
  );
}
