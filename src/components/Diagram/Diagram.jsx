import React, {
  useState,
  useRef,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { renderNodes } from "./Utils/Nodes/NodeRenderer";
import { PopupMain } from "./Utils/Popups/PopupMain";
import { getScreenPosition } from "./Utils/getScreenPosition";
import styles from "./Diagram.module.css";
import { fetchData } from "../../Utils/fetchData";

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
    if (!nodeData) return;
    setPopupInfo({ label, position, data: nodeData });
  }, []);

  const hidePopup = useCallback(() => {
    setPopupInfo(null);
  }, []);

  const memoizedNodes = useMemo(() => {
    return data ? renderNodes(data, showPopup, hidePopup) : null;
  }, [data, showPopup, hidePopup]);

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
          {memoizedNodes}
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
