import React from "react";
import { Text, Billboard } from "@react-three/drei";

export const PlatformNode = ({
  position,
  color,
  label,
  showPopup,
  hidePopup,
  isIndividualSubNode,
}) => {
  return (
    <group
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        showPopup(label, [e.clientX, e.clientY]);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        hidePopup();
      }}
    >
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color={isIndividualSubNode ? color : "white"}
          wireframe={!isIndividualSubNode}
        />
      </mesh>
      <Billboard>
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.5}
          color={isIndividualSubNode ? "white" : "black"}
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </Billboard>
    </group>
  );
};
