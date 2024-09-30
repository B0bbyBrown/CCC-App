import React from "react";
import { PlatformNode } from "./PlatformNode";
import { CurvedArm } from "../../Components/CurvedArm";

export function RenderIndividualSubNodes({
  data,
  origin,
  showPopup,
  hidePopup,
  color,
}) {
  return (
    <>
      {Object.keys(data.categories).map((category, index) => {
        const nodePosition = origin.positions[index];
        if (!nodePosition) return null;

        return (
          <group key={category}>
            <PlatformNode
              position={nodePosition}
              color={color}
              label={category}
              showPopup={(label, position) =>
                showPopup(label, position, data.categories[category])
              }
              hidePopup={hidePopup}
              isIndividualSubNode={true}
            />
            <CurvedArm start={origin.origin} end={nodePosition} color={color} />
          </group>
        );
      })}
    </>
  );
}
