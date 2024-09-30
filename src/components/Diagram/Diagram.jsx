import React, { useMemo, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  generateDoubleHelixPositions,
  generateMainNodePositions,
} from "./Utils/Positions";
import { renderNodes } from "./Utils/Nodes/NodeRenderer";
import { fetchData } from "../../Utils/fetchData";
import { renderData } from "./Utils/renderData";
import { LoadingAnimation } from "../Loading/LoadingAnimation";
import styles from "./Diagram.module.css";

export const Diagram = () => {
  const [data, setData] = useState(null);
  const [popupData, setPopupData] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

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

    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const mainNodePositions = useMemo(() => generateMainNodePositions(0), []);

  const helixPositions = useMemo(() => {
    if (!data) return [];
    const totalSubNodes = Object.values(data).reduce((acc, curr) => {
      return acc + (curr.categories ? Object.keys(curr.categories).length : 0);
    }, 0);
    return generateDoubleHelixPositions(20, totalSubNodes, 100, 0, 0, 0);
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
      <div className={styles.container} ref={containerRef}>
        <Canvas>
          <LoadingAnimation />
        </Canvas>
      </div>
    );
  }

  return (
    <div className={styles.container} ref={containerRef}>
      <Canvas camera={{ position: [0, 0, 150], fov: 60 }}>
        <color attach="background" args={["#f0f0f0"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {renderNodes(
          data,
          mainNodePositions,
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
