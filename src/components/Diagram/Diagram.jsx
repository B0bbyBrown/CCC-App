import React, { useMemo, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { generateDoubleHelixPositions } from "./Utils/Positions";
import { renderNodes } from "./Utils/Nodes/NodeRenderer";
import { fetchData } from "../../Utils/fetchData";
import { renderData } from "./Utils/renderData";
import { LoadingAnimation } from "../Loading/LoadingAnimation";
import styles from "./Diagram.module.css";

export const Diagram = () => {
  const [data, setData] = useState(null);
  const [popupData, setPopupData] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  useEffect(() => {
    fetchData().then((fetchedData) => {
      if (fetchedData) {
        setData({
          keshav: fetchedData.keshavData,
          company: fetchedData.companyData,
          shulka: fetchedData.shulkaData,
        });
      }
    });
  }, []);

  const helixPositions = useMemo(() => {
    if (!data) return [];
    const totalNodes = Object.values(data).reduce((acc, curr) => {
      return (
        acc + 1 + (curr.categories ? Object.keys(curr.categories).length : 0)
      );
    }, 0);
    return generateDoubleHelixPositions(20, totalNodes, 100, 0, 0, 0);
  }, [data]);

  const showPopup = (label, position, data) => {
    setPopupData({ label, position, data });
  };

  const hidePopup = () => {
    setPopupData(null);
  };

  const handleHover = (nodeKey) => {
    setHoveredNode(nodeKey);
  };

  const handleUnhover = () => {
    setHoveredNode(null);
  };

  if (!data) {
    return (
      <div className={styles.container}>
        <Canvas>
          <LoadingAnimation />
        </Canvas>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Canvas camera={{ position: [0, 0, 150], fov: 60 }}>
        <color attach="background" args={["#f0f0f0"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {renderNodes(
          data,
          helixPositions,
          showPopup,
          hidePopup,
          handleHover,
          handleUnhover,
          hoveredNode
        )}
        <OrbitControls />
      </Canvas>
      {popupData && (
        <div
          style={{
            position: "absolute",
            left: popupData.position[0],
            top: popupData.position[1],
            background: "white",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <h3>{popupData.label}</h3>
          {renderData(popupData.data)}
        </div>
      )}
    </div>
  );
};
