import React, { useState, useEffect, useCallback } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import styles from "./ThreeDSpiderDiagram.module.css";
import fetchData from "./Utils/fetchData";
import { renderNodes } from "./Utils/Nodes/NodeRenderer";
import positions from "./Utils/Positions";
import { PopupMain } from "./Utils/Popups/PopupMain";

const Scene = ({ data, positions, showPopup, hidePopup, handleNodeClick }) => {
  const { camera } = useThree();

  return (
    <>
      {renderNodes(
        data,
        positions,
        showPopup,
        hidePopup,
        handleNodeClick,
        camera
      )}
      <OrbitControls />
    </>
  );
};

export function ThreeDSpiderDiagram() {
  const [data, setData] = useState({
    keshav: null,
    shulka: null,
    company: null,
    combinedCategories: null,
  });
  const [popupData, setPopupData] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const navigate = useNavigate();

  useEffect(() => {
    fetchData().then(
      ({ companyData, keshavData, shulkaData, combinedCategories }) => {
        setData({
          company: companyData,
          keshav: keshavData,
          shulka: shulkaData,
          combinedCategories,
        });
      }
    );
  }, []);

  const showPopup = useCallback((label, position, data) => {
    console.log("showPopup called with:", { label, position, data });
    setPopupData({ [label]: data });
    setPopupPosition({ x: position[0], y: position[1] });
  }, []);

  const hidePopup = () => {
    setPopupData(null);
  };

  const handleNodeClick = (label) => {
    if (label === "Curious Cat Creative") {
      navigate("/Curious-Cat-Creative");
    } else if (label === "Keshav") {
      navigate("/Keshav");
    } else if (label === "Shulka") {
      navigate("/Shulka");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.canvasContainer}>
        <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
          <Scene
            data={data}
            positions={positions}
            showPopup={showPopup}
            hidePopup={hidePopup}
            handleNodeClick={handleNodeClick}
          />
        </Canvas>
        {popupData && <PopupMain position={popupPosition} data={popupData} />}
      </div>
    </div>
  );
}
