import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";

const PlatformNode = ({
  position,
  label,
  color,
  onClick,
  scale = 1,
  showPopup,
}) => {
  const textRef = useRef();
  const platformRef = useRef();
  const { camera } = useThree();

  useFrame(() => {
    if (textRef.current) {
      textRef.current.quaternion.copy(camera.quaternion);
    }
  });

  const handlePointerOver = (event) => {
    showPopup(label, {
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handlePointerOut = () => {
    showPopup(null, null);
  };

  return (
    <mesh
      position={position}
      onClick={() => onClick(label)}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <cylinderGeometry args={[0.6 * scale, 0.6 * scale, 0.1 * scale, 32]} />
      <meshStandardMaterial color="#333" />
      <Text
        ref={textRef}
        position={[0, 0.3 * scale, 0]}
        fontSize={0.35 * scale}
        color="white"
        anchorX="center"
        anchorY="middle"
        fontFamily="k2d-extrabold, sans-serif"
      >
        {label}
      </Text>
    </mesh>
  );
};

export { PlatformNode };
