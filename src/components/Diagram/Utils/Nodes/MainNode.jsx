import React from "react";
import * as THREE from "three";
import { colors } from "../../../../Utils/colors";
import { BillboardText } from "../../Components/BillboardText";

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
      <BillboardText
        position={[size + 2, 0, 0]}
        fontSize={size * 0.75}
        color={colors.mainNodeText}
        anchorX="left"
        anchorY="middle"
      >
        {label}
      </BillboardText>
    </group>
  );
};
