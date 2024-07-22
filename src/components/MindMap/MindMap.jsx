import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MindMap.module.css";

const MindMap = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.mindMapContainer}>
      <div className={styles.triangleContainer}>
        <div
          className={`${styles.sphere} ${styles.topSphere}`}
          onClick={() => navigate("/Curious-Cat-Creative")}
        >
          <h3>Curious Cat Creative</h3>
        </div>
        <div
          className={`${styles.sphere} ${styles.leftSphere}`}
          onClick={() => navigate("/Keshav")}
        >
          <h3>Keshav</h3>
        </div>
        <div
          className={`${styles.sphere} ${styles.rightSphere}`}
          onClick={() => navigate("/Shulka")}
        >
          <h3>Shulka</h3>
        </div>
      </div>
    </div>
  );
};

export { MindMap };
