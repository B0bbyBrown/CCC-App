import React from "react";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { colors } from "../../../../Utils/colors";

export const MainNode = ({
  position,
  color,
  label,
  data,
  showPopup,
  hidePopup,
  size,
}) => {
  return (
    <group position={position}>
      <mesh
        onClick={() => showPopup(label, position.toArray(), data)}
        onPointerOut={hidePopup}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Text
        position={[size + 2, 0, 0]}
        fontSize={size * 0.75}
        color={colors.mainNodeText}
        anchorX="left"
        anchorY="middle"
        backgroundColor="white"
        padding={[0.2, 0.2, 0.2, 0.2]}
      >
        {label}
      </Text>
    </group>
  );
};
