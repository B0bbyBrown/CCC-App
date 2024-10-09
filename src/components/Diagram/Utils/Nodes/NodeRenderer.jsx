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

  // Render Keshav's nodes
  if (data.keshavData) {
    renderNodeGroup(
      data.keshavData,
      "keshavData",
      nodes,
      spiralPositions,
      spiralIndex,
      showPopup,
      hidePopup
    );
    spiralIndex += Object.keys(data.keshavData.categories || {}).length;
  }

  // Render CCC nodes
  if (data.companyData) {
    renderNodeGroup(
      data.companyData,
      "companyData",
      nodes,
      spiralPositions,
      spiralIndex,
      showPopup,
      hidePopup
    );
    spiralIndex += Object.keys(data.companyData.categories || {}).length;
  }

  // Render Shulka's nodes
  if (data.shulkaData) {
    renderNodeGroup(
      data.shulkaData,
      "shulkaData",
      nodes,
      spiralPositions,
      spiralIndex,
      showPopup,
      hidePopup
    );
  }

  return nodes;
};

const renderNodeGroup = (
  nodeData,
  key,
  nodes,
  spiralPositions,
  startIndex,
  showPopup,
  hidePopup
) => {
  const mainPosition = new THREE.Vector3(...mainNodePositions[key]);

  nodes.push(
    <MainNode
      key={`main-${key}`}
      position={mainPosition}
      color={nodeColors[key] || colors.defaultMain}
      label={nodeData.name}
      data={nodeData}
      showPopup={showPopup}
      hidePopup={hidePopup}
      size={15} // Increased size for main node
    />
  );

  Object.entries(nodeData.categories || {}).forEach(
    ([category, categoryData], index) => {
      const subPosition = new THREE.Vector3(
        ...spiralPositions[startIndex + index]
      );

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
            // Size is now handled within PlatformNode
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
};
