import React from "react";
import * as THREE from "three";
import { MainNode } from "./MainNode";
import { PlatformNode } from "./PlatformNode";
import { CurvedArm } from "../../Components/CurvedArm";
import { colors } from "../../../../Utils/colors";
import { generateSpiralPositions, mainNodePositions } from "../Positions";

const nodeColors = {
  companyData: colors.companyMain,
  keshavData: colors.keshavMain,
  shulkaData: colors.shulkaMain,
};

export const renderNodes = (data, showPopup, hidePopup) => {
  const nodes = [];
  const totalSubNodes = Object.values(data).reduce(
    (sum, nodeData) => sum + Object.keys(nodeData.categories || {}).length,
    0
  );

  const spiralPositions = generateSpiralPositions(totalSubNodes, [0, 0, 0]);
  let spiralIndex = 0;

  Object.entries(data).forEach(([key, nodeData]) => {
    const position = mainNodePositions[key];
    if (!position) {
      console.error(`No position found for key: ${key}`);
      return;
    }
    const mainPosition = new THREE.Vector3(...position);

    nodes.push(
      <MainNode
        key={`main-${key}`}
        position={mainPosition}
        color={nodeColors[key] || colors.defaultMain}
        label={nodeData.name}
        data={nodeData}
        showPopup={(label, position) => showPopup(label, position, nodeData)}
        hidePopup={hidePopup}
        size={5}
      />
    );

    Object.entries(nodeData.categories || {}).forEach(
      ([category, categoryData]) => {
        const subPosition = new THREE.Vector3(...spiralPositions[spiralIndex]);
        spiralIndex++;

        nodes.push(
          <group key={`sub-${key}-${category}`}>
            <PlatformNode
              position={subPosition}
              color={nodeColors[key] || colors.defaultMain}
              label={category}
              showPopup={(label, position) =>
                showPopup(label, position, categoryData)
              }
              hidePopup={hidePopup}
              isIndividualSubNode={true}
              size={2}
            />
            <CurvedArm
              start={mainPosition}
              end={subPosition}
              color={nodeColors[key] || colors.defaultMain}
            />
          </group>
        );
      }
    );
  });

  return nodes;
};
