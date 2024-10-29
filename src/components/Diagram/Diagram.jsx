import React, { useState, useEffect, useRef, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { renderNodes } from "./Utils/Nodes/NodeRenderer";
import { fetchData } from "../../Utils/fetchData";
import { getScreenPosition } from "./Utils/getScreenPosition";
import { PopupMain } from "./Utils/Popups/PopupMain";
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

  useEffect(() => {
    console.group("Diagram Data Update");
    console.log("New data:", data);
    console.groupEnd();
  }, [data]);

  const showPopup = useCallback((label, position, nodeData) => {
    console.group("Show Popup");
    console.log("Label:", label);
    console.log("Position:", position);
    console.log("Node Data:", nodeData);
    console.groupEnd();
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
            fov: 60,
            near: 0.1,
            far: 1000,
            position: [0, 200, 0],
          }}
          onCreated={({ camera, gl }) => {
            cameraRef.current = camera;
            camera.lookAt(0, 0, 0);
            // Make the canvas background transparent
            gl.setClearColor(0x000000, 0);
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
          label={popupInfo.label}
          data={popupInfo.data}
        />
      )}
    </div>
  );
};

export default Diagram;
