import React from "react";
import { Text, Billboard } from "@react-three/drei";

export const PlatformNode = ({
  position,
  color,
  label,
  isCentral,
  showPopup,
}) => {
  return (
    <group position={position} onClick={() => showPopup(label, position)}>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color={isCentral ? "black" : "white"} wireframe />
      </mesh>
      <Billboard>
        <Text
          position={[0, 0, 2]} // Increase the Z value to move text further in front of the sphere
          fontSize={0.5}
          color={isCentral ? "#FFFFFF" : "#000000"}
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </Billboard>
    </group>
  );
};
