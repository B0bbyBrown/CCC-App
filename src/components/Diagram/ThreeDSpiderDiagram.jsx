import React, { useState, useEffect, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styles from "./ThreeDSpiderDiagram.module.css";
import { CentralNode } from "./Components/CentralNode";
import { PlatformNode } from "./Components/PlatformNode";
import { CurvedArm } from "./Components/CurvedArm";
import { Popup } from "./Components/Popup";
import positions from "./Utils/Positions";

const ThreeDSpiderDiagram = () => {
  const [categories, setCategories] = useState([]);
  const [popupData, setPopupData] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const color = "#800080"; // Dark Purple
  const individual1Color = "#3CF3FF"; // Light Blue
  const individual2Color = "#EB03FF"; // Light Pink

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
        const combinedCategories = new Set();
        for (const individual in data.individuals) {
          for (const category in data.individuals[individual].categories) {
            combinedCategories.add(category);
          }
        }
        setCategories([...combinedCategories]);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleClick = (data) => {
    console.log("Navigating to:", data); // Replace with actual navigation logic
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
            company: data.company.categories[label],
            individual1: data.individuals.Shulka.categories[label],
            individual2: data.individuals.Keshav.categories[label],
          });
          setPopupPosition(position);
        })
        .catch((error) => console.error("Error fetching data:", error));
    } else {
      setPopupData(null);
    }
  }, []);

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
            position={positions.centralNode}
            color={color}
            label="Curious Cat Creative"
            showPopup={showPopup}
          />

          {/* Main Bubbles for Individuals */}
          <PlatformNode
            position={positions.individualNodes.Shulka}
            label="Shulka"
            color={individual1Color}
            onClick={handleClick}
            showPopup={showPopup}
            scale={1.5} // Larger scale for main nodes
          />
          <PlatformNode
            position={positions.individualNodes.Keshav}
            label="Keshav"
            color={individual2Color}
            onClick={handleClick}
            showPopup={showPopup}
            scale={1.5} // Larger scale for main nodes
          />

          {/* Company Sub Nodes */}
          {positions.companySubNodes.map((pos, index) => (
            <React.Fragment key={index}>
              <CurvedArm
                start={positions.centralNode}
                end={pos}
                color={color}
              />
              <PlatformNode
                position={pos}
                label={categories[index]}
                color={color}
                onClick={handleClick}
                showPopup={showPopup}
                isCentral={true} // Indicate central sub-nodes
              />
            </React.Fragment>
          ))}

          {/* Combined Sub Nodes */}
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <CurvedArm
                start={positions.individualNodes.Shulka}
                end={positions.combinedSubNodes[index]}
                color={individual1Color}
              />
              <CurvedArm
                start={positions.individualNodes.Keshav}
                end={positions.combinedSubNodes[index]}
                color={individual2Color}
              />
              <PlatformNode
                position={positions.combinedSubNodes[index]}
                label={category}
                color={color}
                onClick={handleClick}
                showPopup={showPopup}
                isCentral={false} // Indicate non-central sub-nodes
              />
            </React.Fragment>
          ))}

          <OrbitControls />
        </Canvas>

        {popupData && <Popup position={popupPosition} data={popupData} />}
      </div>
    </div>
  );
};

export { ThreeDSpiderDiagram };
