import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import fragmentShader from "./myShader.frag.glsl";
import vertexShader from "./myShader.vert.glsl";

export const ShaderBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const scene = new THREE.Scene();
    const clock = new THREE.Clock();

    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2() },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const resizeHandler = () => {
      const { clientWidth: width, clientHeight: height } = canvas;
      renderer.setSize(width, height, false);
      uniforms.iResolution.value.set(width, height);
      console.log(`Canvas resized to ${width}x${height}`);
    };

    window.addEventListener("resize", resizeHandler);
    resizeHandler();

    const animate = () => {
      requestAnimationFrame(animate);
      uniforms.iTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };

    animate();

    // Debug: Log shader program status
    console.log("Vertex Shader Source:", vertexShader);
    console.log("Fragment Shader Source:", fragmentShader);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};
