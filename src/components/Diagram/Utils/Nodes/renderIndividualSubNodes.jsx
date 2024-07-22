import React from "react";
import { Text } from "@react-three/drei";
import extendText from "../extendText";
import { CurvedArm } from "../../Components/CurvedArm";

export function RenderIndividualSubNodes({
  data,
  origin,
  showPopup,
  hidePopup,
  color,
}) {
  const renderNodesForData = (combinedCategories, origin, positions, color) => {
    if (!combinedCategories) return null;

    return Object.keys(combinedCategories).map((category, index) => {
      const nodePosition = positions[index];
      if (!nodePosition) return null;

      const label = extendText(category, 100);
      return (
        <group key={category}>
          <mesh
            position={nodePosition}
            onPointerOver={(e) =>
              showPopup(
                category,
                [e.clientX, e.clientY],
                combinedCategories[category]
              )
            }
            onPointerOut={hidePopup}
          >
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color={color} wireframe />
          </mesh>
          <CurvedArm start={origin} end={nodePosition} color={color} />
          <Text
            position={[...nodePosition, 1.5, 0, 0]} // Adjust position as necessary
            fontSize={0.5}
            color={color}
            anchorX="center"
            anchorY="middle"
          >
            {label}
          </Text>
        </group>
      );
    });
  };

  return renderNodesForData(
    data.combinedCategories,
    origin.origin,
    origin.positions,
    color
  );
}
