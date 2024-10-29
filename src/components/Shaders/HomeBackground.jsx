import React from "react";
import { Canvas } from "@react-three/fiber";
import { SceneBackground } from "./BackDrop/SceneBackground";
import { ShaderErrorBoundary } from "./BackDrop/ShaderErrorBoundary";
import styles from "./HomeBackground.module.css";

export const HomeBackground = () => {
  return (
    <div className={styles.backgroundContainer}>
      <Canvas
        camera={{
          position: [0, 0, 1],
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          margin: 0,
          padding: 0,
          display: "block",
        }}
      >
        <ShaderErrorBoundary>
          <SceneBackground />
        </ShaderErrorBoundary>
      </Canvas>
    </div>
  );
};
