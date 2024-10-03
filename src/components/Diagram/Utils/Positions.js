export const generateSpiralPositions = (totalNodes, centerPosition) => {
  const [centerX, centerY, centerZ] = centerPosition;
  const positions = [];
  const spiralRadius = 80; // Increased radius for a wider spiral
  const spiralHeight = 300; // Total height of the spiral
  const turnsCount = 2; // Number of complete turns for the entire spiral
  const angleStep = (Math.PI * 2 * turnsCount) / totalNodes;

  for (let i = 0; i < totalNodes; i++) {
    const angle = i * angleStep;
    const heightProgress = i / (totalNodes - 1); // 0 to 1 progress along the height

    const x = centerX + spiralRadius * Math.cos(angle);
    const y = centerY + spiralHeight / 2 - heightProgress * spiralHeight; // Start from top
    const z = centerZ + spiralRadius * Math.sin(angle);

    positions.push([x, y, z]);
  }

  return positions;
};

export const mainNodePositions = {
  keshavData: [0, 150, 0],
  companyData: [0, 0, 0],
  shulkaData: [0, -150, 0],
};
