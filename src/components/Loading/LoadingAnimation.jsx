import React from "react";
import { Html, useProgress } from "@react-three/drei";

export function LoadingAnimation() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: "white", fontSize: "2em" }}>
        Loading... {progress.toFixed(0)}%
      </div>
    </Html>
  );
}
