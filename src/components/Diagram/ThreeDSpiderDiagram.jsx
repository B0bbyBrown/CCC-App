import React, { useState, useEffect, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styles from "./ThreeDSpiderDiagram.module.css";
import { CentralNode } from "./Components/CentralNode";
import { PlatformNode } from "./Components/PlatformNode";
import { CurvedArm } from "./Components/CurvedArm";
import { Popup } from "./Components/Popup";

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
  const [categories, setCategories] = useState([]); // Initialize as an empty array
  const [popupData, setPopupData] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const color = "#800080"; // Dark Purple
  const individual1Color = "#3CF3FF"; // Light Blue
  const individual2Color = "#EB03FF"; // Light Pink

  const mainBubbleDistance = 14; // Distance of individual bubbles from center
  const mainBubblePositions = [
    [-mainBubbleDistance, 0, 0], // Left
    [mainBubbleDistance, 0, 0], // Right
  ];

  useEffect(() => {
    fetch("/src/components/Diagram/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setCategories(
          Object.keys(data).filter(
            (key) => key !== "Individual 1" && key !== "Individual 2"
          )
        );
      })
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

  const showPopup = useCallback((label, position) => {
    if (label) {
      fetch("/src/components/Diagram/data.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(`Showing popup for ${label}`);
          setPopupData({
            label,
            company: data[label]?.Company,
            individual1: data[label]?.["Individual 1"],
            individual2: data[label]?.["Individual 2"],
            details: data[label]?.Details,
          });
          setPopupPosition(position);
        })
        .catch((error) => console.error("Error fetching data:", error));
    } else {
      setPopupData(null);
    }
  }, []);

  console.log("Categories:", categories);

  return (
    <div className={styles.container}>
      <div className={styles.canvasContainer}>
        <Canvas
          camera={{
            position: [0, 0, 50], // Adjust the Z value to fit the diagram within the view
            fov: 75,
          }}
        >
          <ambientLight />
          <pointLight position={[10, 10, 10]} />

          {/* Central Sphere */}
          <CentralNode
            position={[0, 0, 0]}
            color={color}
            showPopup={showPopup}
          />

          {/* Main Bubbles for Individuals */}
          <PlatformNode
            position={mainBubblePositions[0]}
            label="Individual 1"
            color={individual1Color}
            onClick={handleClick}
            showPopup={showPopup}
            scale={1.5} // Larger scale for main nodes
          />
          <PlatformNode
            position={mainBubblePositions[1]}
            label="Individual 2"
            color={individual2Color}
            onClick={handleClick}
            showPopup={showPopup}
            scale={1.5} // Larger scale for main nodes
          />

          {/* Curved Arms */}
          {Array.isArray(categories) && categories.length > 0 ? (
            categories.map((category, index) => {
              const endPosition = categoryPositions[index];
              if (!endPosition) {
                console.error(`No position defined for category ${category}`);
                return null;
              }
              console.log(
                `Rendering arm for ${category} at position`,
                endPosition
              );
              return (
                <React.Fragment key={index}>
                  <CurvedArm
                    start={[0, 0, 0]}
                    end={endPosition}
                    color={color}
                  />
                  <CurvedArm
                    start={mainBubblePositions[0]}
                    end={endPosition}
                    color={individual1Color}
                    thickness={0.03}
                  />
                  <CurvedArm
                    start={mainBubblePositions[1]}
                    end={endPosition}
                    color={individual2Color}
                    thickness={0.03}
                  />
                  <PlatformNode
                    position={endPosition}
                    label={category}
                    color={color}
                    onClick={handleClick}
                    showPopup={showPopup}
                  />
                </React.Fragment>
              );
            })
          ) : (
            <></>
          )}

          <OrbitControls />
        </Canvas>

        {popupData && <Popup position={popupPosition} data={popupData} />}
      </div>
    </div>
  );
};

export { ThreeDSpiderDiagram };
