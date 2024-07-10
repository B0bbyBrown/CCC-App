import React from "react";
import { Text, Billboard } from "@react-three/drei";

export const CentralNode = ({ position, color, label, showPopup }) => {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Billboard>
        <Text
          position={[0, 0, 5]} // Increase the Z value to move text further in front of the sphere
          fontSize={1}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </Billboard>
    </group>
  );
};
