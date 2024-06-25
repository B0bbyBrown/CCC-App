import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import styles from "./ThreeDSpiderDiagram.module.css";

const PlatformNode = ({
  position,
  label,
  color,
  onClick,
  scale = 1,
  showTooltip,
}) => {
  const textRef = useRef();
  const platformRef = useRef();
  const { camera } = useThree();

  useFrame(() => {
    if (textRef.current) {
      textRef.current.quaternion.copy(camera.quaternion);
    }
  });

  const handlePointerOver = () => {
    showTooltip(label, position);
  };

  const handlePointerOut = () => {
    showTooltip(null, null);
  };

  return (
    <mesh
      position={position}
      onClick={() => onClick(label)}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <sphereGeometry args={[0.5 * scale, 32, 32]} />
      <meshStandardMaterial color={color} />
      <mesh ref={platformRef} position={[0, 0.55 * scale, 0]}>
        <cylinderGeometry args={[0.6 * scale, 0.6 * scale, 0.1 * scale, 32]} />
        <meshStandardMaterial color="#333" />
        <Text
          ref={textRef}
          position={[0, 0.3 * scale, 0]} // Moved the text higher
          fontSize={0.35 * scale} // Increased font size
          color="white"
          anchorX="center"
          anchorY="middle"
          fontFamily="k2d-extrabold, sans-serif" // Apply K2D font
        >
          {label}
        </Text>
      </mesh>
    </mesh>
  );
};

const CentralNode = ({ position, color }) => {
  const meshRef = useRef();
  const textRef = useRef();
  const { camera } = useThree();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    meshRef.current.scale.set(
      1 + 0.1 * Math.sin(elapsedTime * 2),
      1 + 0.1 * Math.sin(elapsedTime * 2),
      1 + 0.1 * Math.sin(elapsedTime * 2)
    );
    if (textRef.current) {
      textRef.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const CurvedArm = ({ start, end, color, thickness = 0.05 }) => {
  const curveRef = useRef();

  useEffect(() => {
    const startVec = new THREE.Vector3(...start);
    const endVec = new THREE.Vector3(...end);
    const midPoint = new THREE.Vector3()
      .addVectors(startVec, endVec)
      .multiplyScalar(0.5);
    const midPointA = new THREE.Vector3().lerpVectors(startVec, midPoint, 0.5);
    const midPointB = new THREE.Vector3().lerpVectors(midPoint, endVec, 0.5);

    // Adjust control points to create a football shape
    midPointA.y += Math.abs(end[0] - start[0]) * 0.5;
    midPointB.y += Math.abs(end[0] - start[0]) * 0.5;

    const curve = new THREE.CubicBezierCurve3(
      startVec,
      midPointA,
      midPointB,
      endVec
    );
    const points = curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    curveRef.current.geometry = geometry;
  }, [start, end]);

  return (
    <line ref={curveRef}>
      <bufferGeometry />
      <lineBasicMaterial color={color} linewidth={thickness} />
    </line>
  );
};

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
  const [categories, setCategories] = useState([]);
  const [tooltip, setTooltip] = useState({ label: null, position: null });

  const color = "#800080"; // Dark Purple
  const individual1Color = "#3CF3FF"; // Light Blue
  const individual2Color = "#EB03FF"; // Light Pink

  const mainBubbleDistance = 14; // Distance of individual bubbles from center
  const mainBubblePositions = [
    [-mainBubbleDistance, 0, 0], // Left
    [mainBubbleDistance, 0, 0], // Right
  ];

  useEffect(() => {
    fetch("/src/components/Diagram/categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleClick = (data) => {
    if (data === "Individual 1") {
      console.log("Navigating to Individual 1's details"); // Replace with actual navigation logic for Individual 1
    } else if (data === "Individual 2") {
      console.log("Navigating to Individual 2's details"); // Replace with actual navigation logic for Individual 2
    } else {
      console.log("Navigating to:", data); // Replace with actual navigation logic for categories
    }
  };

  const showTooltip = (label, position) => {
    setTooltip({ label, position });
  };

  return (
    <div className={styles.container}>
      <div className={styles.canvasContainer}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />

          {/* Central Sphere */}
          <CentralNode position={[0, 0, 0]} color={color} />

          {/* Main Bubbles for Individuals */}
          <PlatformNode
            position={mainBubblePositions[0]}
            label="Individual 1"
            color={individual1Color}
            onClick={handleClick}
            showTooltip={showTooltip}
            scale={1.5} // Larger scale for main nodes
          />
          <PlatformNode
            position={mainBubblePositions[1]}
            label="Individual 2"
            color={individual2Color}
            onClick={handleClick}
            showTooltip={showTooltip}
            scale={1.5} // Larger scale for main nodes
          />

          {/* Nodes and Curved Arms */}
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <PlatformNode
                position={categoryPositions[index]}
                label={category.name}
                color={color}
                onClick={handleClick}
                showTooltip={showTooltip}
              />
              <CurvedArm
                start={[0, 0, 0]}
                end={categoryPositions[index]}
                color={color}
              />
              <CurvedArm
                start={mainBubblePositions[0]}
                end={categoryPositions[index]}
                color={individual1Color}
                thickness={0.03}
              />
              <CurvedArm
                start={mainBubblePositions[1]}
                end={categoryPositions[index]}
                color={individual2Color}
                thickness={0.03}
              />
            </React.Fragment>
          ))}

          <OrbitControls />
        </Canvas>

        {tooltip.label && (
          <div
            className={styles.tooltip}
            style={{
              left: `${tooltip.position[0] + 50}%`,
              top: `${tooltip.position[1] + 50}%`,
            }}
          >
            {tooltip.label}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThreeDSpiderDiagram;
