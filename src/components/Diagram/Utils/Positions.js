import * as THREE from "three";

export const generatePositions = (data) => {
  const mainNodePositions = {};
  const subNodePositions = [];

  const totalHeight = 200; // Total height of the diagram
  const spiralRadius = 50;
  const turnsCount = 12; // Adjust for desired spiral tightness

  // Calculate total subnodes
  const totalSubNodes = Object.values(data).reduce(
    (sum, group) => sum + Object.keys(group.categories || {}).length,
    0
  );

  // Position main nodes
  mainNodePositions["companyData"] = new THREE.Vector3(0, 0, 0); // Center
  mainNodePositions["keshavData"] = new THREE.Vector3(0, totalHeight / 2, 0); // Top
  mainNodePositions["shulkaData"] = new THREE.Vector3(0, -totalHeight / 2, 0); // Bottom

  // Generate a single spiral for all subnodes
  const angleStep = (Math.PI * 2 * turnsCount) / totalSubNodes;
  const heightStep = totalHeight / totalSubNodes;

  let subNodeIndex = 0;
  ["keshavData", "companyData", "shulkaData"].forEach((key) => {
    const group = data[key];
    Object.keys(group.categories || {}).forEach(() => {
      const angle = subNodeIndex * angleStep;
      const heightProgress = subNodeIndex / (totalSubNodes - 1);

      const x = spiralRadius * Math.cos(angle);
      const y = totalHeight / 2 - heightProgress * totalHeight;
      const z = spiralRadius * Math.sin(angle);

      subNodePositions.push(new THREE.Vector3(x, y, z));
      subNodeIndex++;
    });
  });

  return { mainNodePositions, subNodePositions };
};
