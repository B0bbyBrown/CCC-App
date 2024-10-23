import React from "react";
import { MainNode } from "./MainNode";
import { PlatformNode } from "./PlatformNode";
import { CurvedArm } from "../../Components/CurvedArm";
import { Colors } from "../../../../Utils/colors";
import { generatePositions } from "../Positions";

const nodeColors = {
  companyData: Colors.companyMain,
  keshavData: Colors.keshavMain,
  shulkaData: Colors.shulkaMain,
};

export const renderNodes = (data, showPopup, hidePopup) => {
  const nodes = [];
  const { mainNodePositions, subNodePositions } = generatePositions(data);

  // Render main nodes
  ["keshavData", "companyData", "shulkaData"].forEach((key) => {
    const group = data[key];
    nodes.push(
      <MainNode
        key={`main-${key}`}
        position={mainNodePositions[key]}
        color={nodeColors[key]}
        label={group.name || key}
        size={key === "companyData" ? 7 : 5} // Larger size for company
      />
    );
  });

  // Render subnodes and connections
  let subNodeIndex = 0;
  ["keshavData", "companyData", "shulkaData"].forEach((key) => {
    const group = data[key];
    Object.keys(group.categories || {}).forEach((category) => {
      const nodePosition = subNodePositions[subNodeIndex];
      nodes.push(
        <PlatformNode
          key={`${key}-${category}`}
          position={nodePosition}
          color={nodeColors[key]}
          label={category}
          showPopup={(label, position) =>
            showPopup(label, position, group.categories[category])
          }
          hidePopup={hidePopup}
        />
      );

      // Connect subnode to its main node
      nodes.push(
        <CurvedArm
          key={`arm-${key}-${category}`}
          start={mainNodePositions[key]}
          end={nodePosition}
          color={nodeColors[key]}
        />
      );

      subNodeIndex++;
    });
  });

  return nodes;
};
