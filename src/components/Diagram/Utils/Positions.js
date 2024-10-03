export const generateSpiralPositions = (totalNodes, centerPosition) => {
  const [centerX, centerY, centerZ] = centerPosition;
  const positions = [];
  const spiralRadius = 40;
  const spiralHeight = 80;
  const turns = 3; // Increased number of turns
  const angleStep = (Math.PI * 2 * turns) / totalNodes;

  for (let i = 0; i < totalNodes; i++) {
    const t = i / (totalNodes - 1);
    const angle = i * angleStep;

    // Use easing functions for smoother distribution
    const radiusEase = easeInOutQuad(t);
    const heightEase = easeInOutCubic(t);

    const radius = spiralRadius * (0.5 + radiusEase * 0.5); // Adjust radius range
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + (heightEase - 0.5) * spiralHeight;
    const z = centerZ + radius * Math.sin(angle);

    // Add slight randomness
    const randomOffset = 2;
    positions.push([
      x + (Math.random() - 0.5) * randomOffset,
      y + (Math.random() - 0.5) * randomOffset,
      z + (Math.random() - 0.5) * randomOffset,
    ]);
  }

  return positions;
};

// Easing functions (keep these as they are)
const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const easeInOutQuad = (t) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

export const mainNodePositions = {
  companyData: [0, 0, 0],
  keshavData: [0, 80, 0],
  shulkaData: [0, -80, 0],
};
