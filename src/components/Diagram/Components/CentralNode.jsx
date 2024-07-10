import React from "react";
import { Text, Billboard } from "@react-three/drei";

export const CentralNode = ({
  position,
  color,
  label,
  showPopup,
  hidePopup,
}) => {
  return (
    <group
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        showPopup(label, position);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        hidePopup();
      }}
    >
      <mesh>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Billboard>
        <Text
          position={[0, 0, 4]} // Ensure the text is outside the sphere
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
