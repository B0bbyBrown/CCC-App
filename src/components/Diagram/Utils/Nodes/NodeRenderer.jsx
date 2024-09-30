import React from "react";
import * as THREE from "three";
import { MainNode } from "./MainNode";
import { PlatformNode } from "./PlatformNode";
import { CurvedArm } from "../../Components/CurvedArm";

const nodeColors = {
  keshav: "#FF6B6B",
  company: "#4ECDC4",
  shulka: "#45B7D1",
};

export const renderNodes = (data, helixPositions, showPopup, hidePopup) => {
  const nodes = [];
  let positionIndex = 0;

  Object.entries(data).forEach(([key, nodeData]) => {
    if (positionIndex >= helixPositions.length) {
      console.warn(`Not enough helix positions for node ${key}. Skipping.`);
      return;
    }
    const position = new THREE.Vector3(...helixPositions[positionIndex]);
    positionIndex++;

    nodes.push(
      <MainNode
        key={`main-${key}`}
        position={position}
        color={nodeColors[key]}
        label={nodeData.name}
        data={nodeData}
        showPopup={(label, position) => showPopup(label, position, nodeData)}
        hidePopup={hidePopup}
        size={8} // Increased size for main nodes
      />
    );

    if (nodeData.categories) {
      Object.entries(nodeData.categories).forEach(
        ([category, categoryData]) => {
          if (positionIndex >= helixPositions.length) {
            console.warn(
              `Not enough helix positions for category ${category} of ${key}. Skipping.`
            );
            return;
          }
          const subNodePosition = new THREE.Vector3(
            ...helixPositions[positionIndex]
          );
          positionIndex++;

          nodes.push(
            <group key={`sub-${key}-${category}`}>
              <PlatformNode
                position={subNodePosition}
                color={nodeColors[key]}
                label={category}
                showPopup={(label, position) =>
                  showPopup(label, position, categoryData)
                }
                hidePopup={hidePopup}
                isIndividualSubNode={true}
                size={4} // Smaller size for sub-nodes
              />
              <CurvedArm
                start={position}
                end={subNodePosition}
                color={nodeColors[key]}
              />
            </group>
          );
        }
      );
    }
  });

  return nodes;
};
