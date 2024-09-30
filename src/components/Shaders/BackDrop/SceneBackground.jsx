import React, { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { CustomShaderMaterial } from "./ShaderMaterial";

export const SceneBackground = () => {
  const shaderRef = useRef();
  const meshRef = useRef();
  const { size, viewport } = useThree();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initializeShader = () => {
      if (shaderRef.current && shaderRef.current.uniforms) {
        shaderRef.current.uniforms.iResolution.value.set(
          size.width,
          size.height
        );
        setIsReady(true);
      } else {
        requestAnimationFrame(initializeShader);
      }
    };

    initializeShader();

    return () => setIsReady(false);
  }, [size]);

  useFrame(({ clock }) => {
    if (isReady && shaderRef.current && shaderRef.current.uniforms) {
      if (shaderRef.current.uniforms.iTime) {
        shaderRef.current.uniforms.iTime.value = clock.getElapsedTime();
      }
      if (shaderRef.current.uniforms.iResolution) {
        shaderRef.current.uniforms.iResolution.value.set(
          size.width,
          size.height
        );
      }
    }
  });

  const scale = [viewport.width, viewport.height, 1];

  return (
    <mesh ref={meshRef} scale={scale} position={[0, 0, -1]}>
      <planeGeometry args={[1, 1]} />
      <customShaderMaterial
        ref={shaderRef}
        key={CustomShaderMaterial.key}
        transparent={true}
        iResolution={new THREE.Vector2(size.width, size.height)}
        iTime={0}
      />
    </mesh>
  );
};
