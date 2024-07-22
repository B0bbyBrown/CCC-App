import React from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";

export const Sphere = ({ position, color }) => {
  const meshRef = React.useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.5}
        speed={2}
      />
    </mesh>
  );
};
