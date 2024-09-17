const generateCylindricalDoubleHelixPositions = (
  radius,
  count,
  helixHeight
) => {
  const angleStep = (2 * Math.PI) / (count / 2); // Divide by 2 for two strands
  const heightStep = helixHeight / count;
  const phaseShift = Math.PI; // 180 degrees phase shift for the second strand

  return Array.from({ length: count }, (_, i) => {
    const angle = i * angleStep;
    const height = i * heightStep;
    const strand = i % 2; // Alternates between 0 and 1 for two strands

    const x = radius * Math.cos(angle + strand * phaseShift);
    const y = height;
    const z = radius * Math.sin(angle + strand * phaseShift);

    return [x, y, z];
  });
};

const helixRadius = 20;
const helixHeight = 50; // Reduced height for tighter packing
const nodeCount = 40; // Increased for more density

const keshavSubNodePositions = generateCylindricalDoubleHelixPositions(
  helixRadius,
  nodeCount,
  helixHeight
);
const shulkaSubNodePositions = generateCylindricalDoubleHelixPositions(
  helixRadius,
  nodeCount,
  helixHeight
);

const positions = {
  centralNode: [0, helixHeight / 2, 0], // Central node at the center
  individualNodes: {
    Keshav: {
      origin: [0, helixHeight, 0], // Position above the central node
      positions: keshavSubNodePositions,
    },
    Shulka: {
      origin: [0, 0, 0], // Position below the central node
      positions: shulkaSubNodePositions,
    },
  },
  generateCylindricalDoubleHelixPositions, // Export the function for dynamic positioning
};

export default positions;
