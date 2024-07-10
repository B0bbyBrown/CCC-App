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
  const [companyData, setCompanyData] = useState(null);
  const [keshavData, setKeshavData] = useState(null);
  const [shulkaData, setShulkaData] = useState(null);

  const centralColor = "#800080"; // Dark Purple
  const keshavColor = "#3CF3FF"; // Baby Blue
  const shulkaColor = "#EB03FF"; // Pink

  useEffect(() => {
    Promise.all([
      fetch("/src/components/Diagram/Utils/companyData.json").then((response) =>
        response.json()
      ),
      fetch("/src/components/Diagram/Utils/keshavData.json").then((response) =>
        response.json()
      ),
      fetch("/src/components/Diagram/Utils/shulkaData.json").then((response) =>
        response.json()
      ),
    ])
      .then(([companyData, keshavData, shulkaData]) => {
        console.log("Fetched data:", { companyData, keshavData, shulkaData });

        setCompanyData(companyData);
        setKeshavData(keshavData);
        setShulkaData(shulkaData);

        const combinedCategories = new Set();
        for (const category in keshavData.categories) {
          combinedCategories.add(category);
        }
        for (const category in shulkaData.categories) {
          combinedCategories.add(category);
        }
        setCategories([...combinedCategories]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleClick = (data) => {
    console.log("Navigating to:", data); // Replace with actual navigation logic
  };

  const showPopup = useCallback(
    (label, position) => {
      if (label) {
        console.log(`Showing popup for ${label}`);
        setPopupData({
          label,
          company: companyData?.categories[label],
          individual1: shulkaData?.categories[label],
          individual2: keshavData?.categories[label],
        });
        setPopupPosition(position);
      } else {
        setPopupData(null);
      }
    },
    [companyData, keshavData, shulkaData]
  );

  const hidePopup = () => {
    setPopupData(null);
  };

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
            color={centralColor}
            label="Curious Cat Creative"
            showPopup={showPopup}
            hidePopup={hidePopup}
          />

          {/* Main Bubbles for Individuals */}
          <PlatformNode
            position={positions.individualNodes.Keshav}
            label="Keshav"
            color={keshavColor}
            onClick={handleClick}
            showPopup={showPopup}
            hidePopup={hidePopup}
            scale={1.5} // Larger scale for main nodes
            isIndividualSubNode={true}
          />
          <PlatformNode
            position={positions.individualNodes.Shulka}
            label="Shulka"
            color={shulkaColor}
            onClick={handleClick}
            showPopup={showPopup}
            hidePopup={hidePopup}
            scale={1.5} // Larger scale for main nodes
            isIndividualSubNode={true}
          />

          {/* Company Sub Nodes */}
          {positions.companySubNodes.map((pos, index) => {
            const category = Object.keys(companyData?.categories || {})[index];
            if (category) {
              return (
                <React.Fragment key={index}>
                  <CurvedArm
                    start={positions.centralNode}
                    end={pos}
                    color={centralColor}
                  />
                  <PlatformNode
                    position={pos}
                    label={category}
                    color="black" // Black with wireframe for central sub nodes
                    onClick={handleClick}
                    showPopup={showPopup}
                    hidePopup={hidePopup}
                    isIndividualSubNode={false}
                  />
                </React.Fragment>
              );
            }
            return null;
          })}

          {/* Combined Sub Nodes */}
          {categories.map((category, index) => {
            const endPosition = positions.combinedSubNodes[index];
            return (
              <React.Fragment key={index}>
                <CurvedArm
                  start={positions.individualNodes.Keshav}
                  end={endPosition}
                  color={keshavColor}
                />
                <CurvedArm
                  start={positions.individualNodes.Shulka}
                  end={endPosition}
                  color={shulkaColor}
                />
                <PlatformNode
                  position={endPosition}
                  label={category}
                  color="white" // White with wireframe for combined sub nodes
                  onClick={handleClick}
                  showPopup={showPopup}
                  hidePopup={hidePopup}
                  isIndividualSubNode={true}
                />
              </React.Fragment>
            );
          })}

          <OrbitControls />
        </Canvas>

        {popupData && <Popup position={popupPosition} data={popupData} />}
      </div>
    </div>
  );
};

export { ThreeDSpiderDiagram };
