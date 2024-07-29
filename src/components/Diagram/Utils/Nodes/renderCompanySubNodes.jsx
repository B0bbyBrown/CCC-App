import React from "react";
import { Text, Billboard } from "@react-three/drei";
import { CurvedArm } from "../../Components/CurvedArm";
import * as THREE from "three";
import { getScreenPosition } from "../../Utils/getScreenPosition";

export function RenderCompanySubNodes({
  data,
  positions,
  showPopup,
  hidePopup,
  camera,
}) {
  if (!positions.companySubNodes) return null;

  return (
    <>
      {Object.keys(data.categories).map((category, index) => {
        const nodePosition = positions.companySubNodes[index];
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
                  data.categories[category]
                );
              }}
              onPointerOut={(e) => {
                e.stopPropagation();
                hidePopup();
              }}
            >
              <sphereGeometry args={[1, 32, 32]} />
              <meshStandardMaterial color={"#FFFFFF"} wireframe />
            </mesh>
            <CurvedArm
              start={positions.centralNode}
              end={nodePosition}
              color={"#FFFFFF"}
            />
            <Billboard
              position={[nodePosition[0], nodePosition[1] + 2, nodePosition[2]]}
            >
              <Text
                fontSize={0.5}
                color={"#FFFFFF"}
                anchorX="center"
                anchorY="middle"
              >
                {category}
              </Text>
            </Billboard>
          </group>
        );
      })}
    </>
  );
}
