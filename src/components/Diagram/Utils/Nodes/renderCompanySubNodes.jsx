import React from "react";
import { Text } from "@react-three/drei";
import extendText from "../extendText";
import { CurvedArm } from "../../Components/CurvedArm";

export function RenderCompanySubNodes({
  data,
  positions,
  showPopup,
  hidePopup,
}) {
  if (!positions.companySubNodes) {
    console.log("No companySubNodes positions defined");
    return null;
  }

  return (
    <>
      {Object.keys(data.categories).map((category, index) => {
        const nodePosition = positions.companySubNodes[index];
        if (!nodePosition) {
          console.log(`No position defined for category ${category}`);
          return null;
        }

        const label = extendText(category, 100);
        return (
          <group key={category}>
            <mesh
              position={nodePosition}
              onPointerOver={(e) =>
                showPopup(category, [e.clientX, e.clientY], data)
              }
              onPointerOut={hidePopup}
            >
              <sphereGeometry args={[1, 32, 32]} />
              <meshStandardMaterial color={"black"} wireframe />
            </mesh>
            <CurvedArm
              start={positions.centralNode}
              end={nodePosition}
              color={"#FFFFFF"}
            />
            <Text
              position={[...nodePosition, 1.5, 0, 0]} // Adjust position as necessary
              fontSize={0.5}
              color={"#FFFFFF"}
              anchorX="center"
              anchorY="middle"
            >
              {label}
            </Text>
          </group>
        );
      })}
    </>
  );
}
