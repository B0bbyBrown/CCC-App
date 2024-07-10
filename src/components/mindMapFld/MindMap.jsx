import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MindMap.module.css";

const MindMap = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.mindMapContainer}>
      <div className={styles.triangleContainer}>
        <div
          className={`${styles.circle} ${styles.topCircle}`}
          onClick={() => navigate("/Curious-Cat-Creative")}
        >
          <h3>Curious Cat Creative</h3>
        </div>
        <div
          className={`${styles.circle} ${styles.leftCircle}`}
          onClick={() => navigate("/KeshavInfo")}
        >
          <h3>Keshav</h3>
        </div>
        <div
          className={`${styles.circle} ${styles.rightCircle}`}
          onClick={() => navigate("/ShulkaInfo")}
        >
          <h3>Shulka</h3>
        </div>
      </div>
    </div>
  );
};

export { MindMap };
