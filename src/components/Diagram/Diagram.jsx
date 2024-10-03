import React, {
  useMemo,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { fetchData } from "../../Utils/fetchData";
import { renderNodes } from "./Utils/Nodes/NodeRenderer";
import { PopupMain } from "./Utils/Popups/PopupMain";
import { getScreenPosition } from "./Utils/getScreenPosition";
import styles from "./Diagram.module.css";

// New component to set up the initial camera position
const CameraSetup = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 400, 0); // Position the camera above the diagram
    camera.lookAt(0, 0, 0); // Make the camera look at the center of the scene
  }, [camera]);

  return null;
};

export const Diagram = () => {
  const [data, setData] = useState(null);
  const [popupInfo, setPopupInfo] = useState(null);
  const canvasRef = useRef(null);
  const controlsRef = useRef(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  const showPopup = useCallback((label, position, data) => {
    setPopupInfo({ label, position, data });
  }, []);

  const hidePopup = useCallback(() => {
    setPopupInfo(null);
  }, []);

  const nodes = useMemo(() => {
    if (!data) return null;
    return renderNodes(data, showPopup, hidePopup);
  }, [data, showPopup, hidePopup]);

  if (!data) return null;

  return (
    <div className={styles.container}>
      <Canvas ref={canvasRef} camera={{ fov: 50 }}>
        <CameraSetup />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls
          ref={controlsRef}
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minPolarAngle={0} // Allow rotation to the top
          maxPolarAngle={Math.PI / 2} // Restrict rotation to the horizon
        />
        {nodes}
      </Canvas>
      {popupInfo && (
        <PopupMain
          label={popupInfo.label}
          position={getScreenPosition(popupInfo.position, canvasRef.current)}
          data={popupInfo.data}
          onClose={hidePopup}
        />
      )}
    </div>
  );
};

export default Diagram;
