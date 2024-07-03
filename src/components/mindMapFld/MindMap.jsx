import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MindMap.module.css";

const MindMap = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.mindMapContainer}>
      <svg
        className={styles.lines}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Outer triangle */}
        <line
          x1="50"
          y1="10"
          x2="10"
          y2="80"
          stroke="white"
          strokeWidth="0.5"
        />
        <line
          x1="50"
          y1="10"
          x2="90"
          y2="80"
          stroke="white"
          strokeWidth="0.5"
        />
        <line
          x1="10"
          y1="80"
          x2="90"
          y2="80"
          stroke="white"
          strokeWidth="0.5"
        />
      </svg>
      <div
        className={styles.circle}
        id={styles.topCircle}
        onClick={() => navigate("/Curious-Cat-Creative")}
      >
        <h3>Curious Cat Creative</h3>
      </div>
      <div
        className={styles.circle}
        id={styles.leftCircle}
        onClick={() => navigate("/KeshavInfo")}
      >
        <h3>Keshav</h3>
      </div>
      <div
        className={styles.circle}
        id={styles.rightCircle}
        onClick={() => navigate("/ShalkaInfo")}
      >
        <h3>Shulka</h3>
      </div>
    </div>
  );
};

export { MindMap };
