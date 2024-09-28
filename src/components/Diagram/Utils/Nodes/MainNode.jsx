import React from "react";
import { Text, Billboard } from "@react-three/drei";
import * as THREE from "three";

export const MainNode = ({
  position,
  color,
  label,
  data,
  showPopup,
  hidePopup,
  onClick,
}) => {
  return (
    <group
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        const worldPosition = new THREE.Vector3();
        e.object.getWorldPosition(worldPosition);
        showPopup(
          label,
          [worldPosition.x, worldPosition.y, worldPosition.z],
          data
        );
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        hidePopup();
      }}
      onClick={onClick}
    >
      <mesh>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Billboard>
        <Text
          position={[0, 0, 4]} // Ensure the text is outside the sphere
          fontSize={1}
          // color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </Billboard>
    </group>
  );
};
