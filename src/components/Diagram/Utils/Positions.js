const generateCylinderPositions = (radius, height, count) => {
  const angleStep = (2 * Math.PI) / count;
  return Array.from({ length: count }, (_, i) => {
    const angle = i * angleStep;
    const x = radius * Math.cos(angle);
    const y = (i / count) * height - height / 2; // Distribute height evenly
    const z = radius * Math.sin(angle);
    return [x, y, z];
  });
};

const generateCirclePositions = (radius, count) => {
  const angleStep = (2 * Math.PI) / count;
  return Array.from({ length: count }, (_, i) => {
    const angle = i * angleStep;
    const x = radius * Math.cos(angle);
    const y = 0; // Same y-coordinate for 2D circle
    const z = radius * Math.sin(angle);
    return [x, y, z];
  });
};

// Adjust radius for the 2D circle pattern
const companySubNodePositions = generateCirclePositions(20, 5); // Adjust the count based on actual categories
const combinedSubNodesPositions = generateCylinderPositions(20, 60, 10);

const positions = {
  centralNode: [0, 0, 0],
  companySubNodes: companySubNodePositions,
  individualNodes: {
    Keshav: [0, -15, 0],
    Shulka: [0, 15, 0],
  },
  combinedSubNodes: combinedSubNodesPositions,
};

export default positions;
