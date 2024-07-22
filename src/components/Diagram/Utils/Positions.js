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

const keshavSubNodePositions = generateCirclePositions(20, 10); // Adjust the radius and count as needed
const shulkaSubNodePositions = generateCirclePositions(20, 10); // Adjust the radius and count as needed
const companySubNodePositions = generateCirclePositions(30, 5); // Example values

const positions = {
  centralNode: [0, 0, 0],
  individualNodes: {
    Keshav: {
      origin: [0, 20, 0], // Origin for Keshav
      positions: keshavSubNodePositions, // Positions for Keshav's nodes
    },
    Shulka: {
      origin: [0, -20, 0], // Origin for Shulka
      positions: shulkaSubNodePositions, // Positions for Shulka's nodes
    },
  },
  companySubNodes: companySubNodePositions,
  generateCirclePositions, // Export the function for dynamic positioning
};

export default positions;
