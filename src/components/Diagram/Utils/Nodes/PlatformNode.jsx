import React, { useState, useRef, useCallback } from "react";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const PlatformNode = ({
  position,
  color,
  label,
  showPopup,
  hidePopup,
  nodeData,
}) => {
  const [hovered, setHovered] = useState(false);
  const size = 3; // Increased size
  const textRef = useRef();
  const timeoutRef = useRef(null);

  useFrame(({ camera }) => {
    if (textRef.current) {
      textRef.current.lookAt(camera.position);
    }
  });

  const handlePointerOver = useCallback(
    (e) => {
      e.stopPropagation();
      if (!hovered) {
        setHovered(true);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        showPopup(label, position, nodeData);
      }
    },
    [label, position, showPopup, hovered, nodeData]
  );

  const handlePointerOut = useCallback(
    (e) => {
      e.stopPropagation();
      setHovered(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        hidePopup();
        timeoutRef.current = null;
      }, 100);
    },
    [hidePopup]
  );

  return (
    <group position={position}>
      <mesh onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={hovered ? "#ffffff" : color}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </mesh>
      <Text
        ref={textRef}
        position={[0, size + 1.5, 0]}
        fontSize={hovered ? 3.5 : 3}
        color={hovered ? "#ffffff" : color}
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
};
