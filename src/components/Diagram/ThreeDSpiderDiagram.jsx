// src/components/ThreeDSpiderDiagram.jsx
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import styles from "./ThreeDSpiderDiagram.module.css";

const Node = ({ position, label, color }) => {
  const textRef = useRef();
  const { camera } = useThree();

  useFrame(() => {
    if (textRef.current) {
      textRef.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <mesh position={position}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color={color} />
      <Text ref={textRef} position={[0, 0.7, 0]} fontSize={0.3} color="white">
        {label}
      </Text>
    </mesh>
  );
};

const Arm = ({ start, end, color, thickness = 0.05 }) => {
  const cylinderRef = useRef();

  useEffect(() => {
    const startVec = new THREE.Vector3(...start);
    const endVec = new THREE.Vector3(...end);
    const direction = new THREE.Vector3().subVectors(endVec, startVec);
    const length = direction.length();
    const midpoint = new THREE.Vector3()
      .addVectors(startVec, endVec)
      .divideScalar(2);

    // Align the cylinder with the direction
    const axis = new THREE.Vector3(0, 1, 0).cross(direction).normalize();
    const angle = Math.acos(
      new THREE.Vector3(0, 1, 0).dot(direction.normalize())
    );

    cylinderRef.current.position.copy(midpoint);
    cylinderRef.current.scale.set(1, length / 2, 1);
    cylinderRef.current.setRotationFromAxisAngle(axis, angle);
  }, [start, end]);

  return (
    <mesh ref={cylinderRef}>
      <cylinderGeometry args={[thickness, thickness, 1, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// Manually adjusted positions to ensure proper connection
const categoryPositions = [
  [-7, 5, 0],
  [-7, -5, 0],
  [-7, 0, 5],
  [-7, 0, -5], // Left-side categories
  [7, 5, 0],
  [7, -5, 0],
  [7, 0, 5],
  [7, 0, -5], // Right-side categories
  [0, 5, 7],
  [0, -5, 7],
  [0, 5, -7],
  [0, -5, -7], // Top-bottom categories
  [5, 7, 0],
  [-5, 7, 0],
  [5, -7, 0],
  [-5, -7, 0], // Front-back categories
];

const ThreeDSpiderDiagram = () => {
  const categories = [
    "Projects",
    "Companies",
    "Ventures",
    "Skills",
    "Experience",
    "Education",
    "Hobbies",
    "Certifications",
    "Achievements",
    "Goals",
    "Innovation",
    "Research",
    "Development",
    "Teamwork",
    "Leadership",
  ];

  const color = "#800080"; // Dark Purple
  const individual1Color = "#ADD8E6"; // Light Blue
  const individual2Color = "#FFB6C1"; // Light Pink

  // Positions for main bubbles (individuals)
  const mainBubbleDistance = 14; // Distance of individual bubbles from center
  const mainBubblePositions = [
    [-mainBubbleDistance, 0, 0], // Left
    [mainBubbleDistance, 0, 0], // Right
  ];

  const handleClick = (data) => {
    console.log("Navigating to:", data); // Replace with actual navigation logic
  };

  return (
    <div className={styles.container}>
      <div className={styles.canvasContainer}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />

          {/* Central Sphere */}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color={color} />
          </mesh>

          {/* Main Bubbles for Individuals */}
          <mesh position={mainBubblePositions[0]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color={individual1Color} />
          </mesh>
          <mesh position={mainBubblePositions[1]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color={individual2Color} />
          </mesh>

          {/* Nodes and Arms */}
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <Node
                position={categoryPositions[index]}
                label={category}
                color={color}
              />
              <Arm
                start={[0, 0, 0]}
                end={categoryPositions[index]}
                color={color}
              />
              <Arm
                start={mainBubblePositions[0]}
                end={categoryPositions[index]}
                color={individual1Color}
                thickness={0.03}
              />
              <Arm
                start={mainBubblePositions[1]}
                end={categoryPositions[index]}
                color={individual2Color}
                thickness={0.03}
              />
            </React.Fragment>
          ))}

          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
};

export default ThreeDSpiderDiagram;
