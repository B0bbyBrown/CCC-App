import React, {
  useMemo,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { fetchData } from "../../Utils/fetchData";
import { renderNodes } from "./Utils/Nodes/NodeRenderer";
import { PopupMain } from "./Utils/Popups/PopupMain";
import { getScreenPosition } from "./Utils/getScreenPosition";
import styles from "./Diagram.module.css";

export const Diagram = () => {
  const [data, setData] = useState(null);
  const [popupInfo, setPopupInfo] = useState(null);
  const canvasRef = useRef(null);

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
      <Canvas ref={canvasRef} camera={{ position: [300, 0, 300], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
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
