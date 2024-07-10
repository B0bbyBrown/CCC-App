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

const companySubNodePositions = generateCylinderPositions(20, 30, 10); // Adjust the height to fit between the other subnodes
const combinedSubNodesPositions = generateCylinderPositions(20, 60, 10);

const positions = {
  centralNode: [0, 0, 0],
  companySubNodes: companySubNodePositions,
  individualNodes: {
    Keshav: [0, 15, 0], // Keshav at the top
    Shulka: [0, -15, 0], // Shulka at the bottom
  },
  combinedSubNodes: combinedSubNodesPositions,
};

export default positions;
