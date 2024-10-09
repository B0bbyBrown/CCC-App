import React, { useRef } from "react";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { colors } from "../../../../Utils/colors";

export const MainNode = ({ position, color, label, data, size }) => {
  const textRef = useRef();

  useFrame(({ camera }) => {
    if (textRef.current) {
      textRef.current.lookAt(camera.position);
    }
  });

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
      </mesh>
      <Text
        ref={textRef}
        position={[0, size + 2, 0]}
        fontSize={size * 0.75}
        color={colors.mainNodeText}
        anchorX="center"
        anchorY="bottom"
      >
        {label}
      </Text>
    </group>
  );
};
