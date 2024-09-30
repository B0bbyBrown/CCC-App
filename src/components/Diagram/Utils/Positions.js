export const generateMainNodePositions = (centerY) => {
  return {
    keshav: [0, centerY + 40, 0],
    company: [0, centerY, 0],
    shulka: [0, centerY - 40, 0],
  };
};

export const generateDoubleHelixPositions = (
  radius,
  count,
  height,
  centerX,
  centerY,
  centerZ
) => {
  const positions = [];
  const angleStep = (4 * Math.PI) / count;
  const heightStep = height / count;

  for (let i = 0; i < count; i++) {
    const angle = i * angleStep;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + i * heightStep - height / 2;
    const z = centerZ + radius * Math.sin(angle);

    positions.push([x, y, z]);
  }

  console.log(`Generated ${positions.length} helix positions`);
  return positions;
};

export const mainNodePositions = {
  keshav: [0, 40, 0],
  company: [0, 0, 0],
  shulka: [0, -40, 0],
};
