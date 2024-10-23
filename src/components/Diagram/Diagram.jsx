import React, { useState, useEffect, useRef, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { getScreenPosition } from "./Utils/getScreenPosition";
import { PopupMain } from "./Utils/Popups/PopupMain";
import { renderNodes } from "./Utils/Nodes/NodeRenderer";
import { fetchData } from "../../Utils/fetchData";
import styles from "./Diagram.module.css";

export const Diagram = () => {
  const [data, setData] = useState(null);
  const [popupInfo, setPopupInfo] = useState(null);
  const canvasRef = useRef(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    loadData();
  }, []);

  const showPopup = useCallback((label, position, nodeData) => {
    setPopupInfo({ label, position, data: nodeData });
  }, []);

  const hidePopup = useCallback(() => {
    setPopupInfo(null);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.canvasContainer} ref={canvasRef}>
        <Canvas
          camera={{
            fov: 75,
            near: 0.1,
            far: 1000,
            position: [0, 0, 200],
          }}
          onCreated={({ camera }) => {
            cameraRef.current = camera;
          }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
          {data && renderNodes(data, showPopup, hidePopup)}
        </Canvas>
      </div>
      {popupInfo && cameraRef.current && canvasRef.current && (
        <PopupMain
          position={getScreenPosition(
            popupInfo.position,
            canvasRef.current,
            cameraRef.current
          )}
          data={popupInfo.data}
        />
      )}
    </div>
  );
};

export default Diagram;
