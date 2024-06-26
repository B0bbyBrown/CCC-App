import React from "react";

const CentralNode = ({ position, color, showPopup }) => {
  const handlePointerOver = () => {
    console.log("Pointer over Central Node");
    showPopup("Central Node", { x: position[0], y: position[1] });
  };

  const handlePointerOut = () => {
    console.log("Pointer out Central Node");
    showPopup(null, null);
  };

  return (
    <mesh
      position={position}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export { CentralNode };
