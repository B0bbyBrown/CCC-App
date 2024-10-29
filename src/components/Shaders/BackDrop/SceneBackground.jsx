import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import "./ShaderMaterial";

export const SceneBackground = () => {
  const meshRef = useRef();
  const materialRef = useRef();
  const { size, camera } = useThree();

  useEffect(() => {
    console.log("Viewport size:", size);
    console.log("Camera position:", camera.position);
    console.log("Camera FOV:", camera.fov);
    console.log("Camera aspect:", camera.aspect);

    // Adjust the calculation to ensure full coverage
    const distance = camera.position.z;
    const vFov = (camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(vFov / 2) * distance;
    const width = height * camera.aspect;

    // Scale up by 1.5 to ensure full coverage
    const scale = 1.5;

    if (meshRef.current) {
      meshRef.current.scale.set(width * scale, height * scale, 1);
      console.log("Mesh scale:", meshRef.current.scale);
    }
  }, [camera, size]);

  useFrame(({ clock }) => {
    if (materialRef.current?.uniforms) {
      materialRef.current.uniforms.iTime.value = clock.getElapsedTime();
      materialRef.current.uniforms.iResolution.value = new THREE.Vector2(
        size.width,
        size.height
      );
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -1]}>
      <planeGeometry args={[2, 2]} /> {/* Increased base geometry size */}
      <customShaderMaterial
        ref={materialRef}
        transparent
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
};
