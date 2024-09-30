import React from "react";
import { PlatformNode } from "./PlatformNode";
import { CurvedArm } from "../../Components/CurvedArm";

export function RenderCompanySubNodes({
  data,
  positions,
  showPopup,
  hidePopup,
}) {
  return (
    <>
      {Object.keys(data.categories).map((category, index) => {
        const nodePosition = positions.companySubNodes[index];
        if (!nodePosition) return null;

        return (
          <group key={category}>
            <PlatformNode
              position={nodePosition}
              color="#FFFFFF"
              label={category}
              showPopup={(label, position) =>
                showPopup(label, position, data.categories[category])
              }
              hidePopup={hidePopup}
            />
            <CurvedArm
              start={positions.centralNode}
              end={nodePosition}
              color="#FFFFFF"
            />
          </group>
        );
      })}
    </>
  );
}
