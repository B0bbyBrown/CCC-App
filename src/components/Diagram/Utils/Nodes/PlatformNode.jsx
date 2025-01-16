import React, { useState, useRef, useCallback, useEffect, memo } from "react";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const PlatformNode = memo(
  ({ position, color, label, showPopup, hidePopup, nodeData }) => {
    const [isHovered, setIsHovered] = useState(false);
    const timeoutRef = useRef(null);
    const textRef = useRef();

    // Clear timeout on unmount
    useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);

    const handlePointerOver = useCallback(
      (e) => {
        e.stopPropagation();
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        if (!isHovered) {
          setIsHovered(true);
          showPopup(label, position, nodeData);
        }
      },
      [label, position, showPopup, isHovered, nodeData]
    );

    const handlePointerOut = useCallback(
      (e) => {
        e.stopPropagation();

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setIsHovered(false);
          hidePopup();
        }, 200);
      },
      [hidePopup]
    );

    return (
      <group position={position}>
        <mesh onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
          <sphereGeometry args={[3, 32, 32]} />
          <meshStandardMaterial
            color={color}
            metalness={0.5}
            roughness={0.2}
            opacity={isHovered ? 0.8 : 1}
            transparent
          />
        </mesh>
        <Text
          ref={textRef}
          position={[0, 5, 0]}
          fontSize={1.5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </group>
    );
  }
);

PlatformNode.displayName = "PlatformNode";
