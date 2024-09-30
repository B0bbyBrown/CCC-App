import React from "react";
import * as THREE from "three";
import { MainNode } from "./MainNode";
import { PlatformNode } from "./PlatformNode";
import { CurvedArm } from "../../Components/CurvedArm";
import { colors } from "../../../../Utils/colors";

const nodeColors = {
  keshav: colors.keshavMain,
  company: colors.companyMain,
  shulka: colors.shulkaMain,
};

export const renderNodes = (
  data,
  showPopup,
  hidePopup,
  handleHover,
  handleUnhover,
  hoveredNode
) => {
  const nodes = [];

  const getHelixPosition = (t, strand) => {
    const radius = 40;
    const pitch = 100;
    const x = radius * Math.cos(t * Math.PI * 2);
    const y = pitch * t;
    const z = radius * Math.sin(t * Math.PI * 2);
    return new THREE.Vector3(strand === 0 ? x : -x, y, z);
  };

  const mainNodePositions = {
    keshav: new THREE.Vector3(0, -100, 0),
    company: new THREE.Vector3(0, 0, 0),
    shulka: new THREE.Vector3(0, 100, 0),
  };

  // Render main structure (double helix)
  const helixPoints = [];
  for (let i = 0; i <= 100; i++) {
    helixPoints.push(getHelixPosition(i / 100, 0));
  }
  for (let i = 100; i >= 0; i--) {
    helixPoints.push(getHelixPosition(i / 100, 1));
  }
  nodes.push(
    <line>
      <bufferGeometry attach="geometry" setFromPoints={helixPoints} />
      <lineBasicMaterial attach="material" color="#ffffff" linewidth={2} />
    </line>
  );

  let subNodeIndex = 0;
  const totalSubNodes = Object.values(data).reduce(
    (acc, curr) => acc + Object.keys(curr.categories || {}).length,
    0
  );

  Object.entries(data).forEach(([key, nodeData]) => {
    const position = mainNodePositions[key];

    nodes.push(
      <MainNode
        key={`main-${key}`}
        position={position}
        color={nodeColors[key]}
        label={nodeData.name}
        data={nodeData}
        showPopup={(label, position) => showPopup(label, position, nodeData)}
        hidePopup={hidePopup}
        size={10}
      />
    );

    if (nodeData.categories) {
      Object.entries(nodeData.categories).forEach(
        ([category, categoryData], index) => {
          const t = subNodeIndex / totalSubNodes;
          const strand = subNodeIndex % 2;
          const subNodePosition = getHelixPosition(t, strand);

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
                size={3}
              />
              <CurvedArm
                start={position}
                end={subNodePosition}
                color={nodeColors[key]}
              />
            </group>
          );

          subNodeIndex++;
        }
      );
    }
  });

  return nodes;
};
