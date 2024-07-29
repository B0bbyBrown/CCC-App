import React from "react";
import { Text, Billboard } from "@react-three/drei";
import { CurvedArm } from "../../Components/CurvedArm";
import * as THREE from "three";
import { getScreenPosition } from "../../Utils/getScreenPosition";

export function RenderIndividualSubNodes({
  data,
  origin,
  showPopup,
  hidePopup,
  color,
  camera,
}) {
  const renderNodesForData = (combinedCategories, origin, positions, color) => {
    if (!combinedCategories) return null;

    return Object.keys(combinedCategories).map((category, index) => {
      const nodePosition = positions[index];
      if (!nodePosition) return null;

      return (
        <group key={category}>
          <mesh
            position={nodePosition}
            onPointerOver={(e) => {
              e.stopPropagation();
              const worldPosition = new THREE.Vector3();
              e.object.getWorldPosition(worldPosition);
              const screenPosition = getScreenPosition(camera, worldPosition);
              showPopup(
                category,
                [screenPosition.x, screenPosition.y],
                combinedCategories[category]
              );
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              hidePopup();
            }}
          >
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color={color} wireframe />
          </mesh>
          <CurvedArm start={origin} end={nodePosition} color={color} />
          <Billboard
            position={[nodePosition[0], nodePosition[1] + 2, nodePosition[2]]}
          >
            <Text
              fontSize={0.5}
              color={"white"}
              anchorX="center"
              anchorY="middle"
            >
              {category}
            </Text>
          </Billboard>
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
