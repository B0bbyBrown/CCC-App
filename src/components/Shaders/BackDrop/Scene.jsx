import React, { useRef } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { PlaneGeometry } from "three";
import { MyShaderMaterial } from "./ShaderMaterial";

extend({ PlaneGeometry });

const Background = () => {
  const shaderRef = useRef();
  const meshRef = useRef();
  const { size, viewport } = useThree();

  useFrame(({ clock }) => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.iTime.value = clock.getElapsedTime();
      shaderRef.current.uniforms.iResolution.value.set(size.width, size.height);
    }
  });

  // Calculate scale to cover the entire viewport
  const aspect = viewport.width / viewport.height;
  const scale = [viewport.width, viewport.height, 1];

  return (
    <mesh ref={meshRef} scale={scale}>
      <planeGeometry args={[1, 1]} />
      <myShaderMaterial ref={shaderRef} />
    </mesh>
  );
};

export const Scene = () => {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Background />
    </Canvas>
  );
};
