import React, { useState, useRef, useCallback } from "react";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const PlatformNode = ({
  position,
  color,
  label,
  showPopup,
  hidePopup,
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
        console.log(`Mouse entered: ${label}`);
        setHovered(true);
        showPopup(label, position.toArray());
      }
    },
    [label, position, showPopup, hovered]
  );

  const handlePointerOut = useCallback(
    (e) => {
      e.stopPropagation();
      console.log(`Mouse left: ${label}`);
      setHovered(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        hidePopup();
        console.log(`Popup hidden for: ${label}`);
      }, 100); // 100ms delay before hiding popup
    },
    [hidePopup, label]
  );

  return (
    <group
      position={position}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <mesh>
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
