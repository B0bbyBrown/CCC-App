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

        {/* Inner triangle 1 */}
        <line
          x1="50"
          y1="25"
          x2="20"
          y2="75"
          stroke="white"
          strokeWidth="0.3"
        />
        <line
          x1="50"
          y1="25"
          x2="80"
          y2="75"
          stroke="white"
          strokeWidth="0.3"
        />
        <line
          x1="20"
          y1="75"
          x2="80"
          y2="75"
          stroke="white"
          strokeWidth="0.3"
        />

        {/* Inner triangle 2 */}
        <line
          x1="50"
          y1="40"
          x2="30"
          y2="70"
          stroke="white"
          strokeWidth="0.3"
        />
        <line
          x1="50"
          y1="40"
          x2="70"
          y2="70"
          stroke="white"
          strokeWidth="0.3"
        />
        <line
          x1="30"
          y1="70"
          x2="70"
          y2="70"
          stroke="white"
          strokeWidth="0.3"
        />
      </svg>
      <div
        className={styles.circle}
        id={styles.topCircle}
        onClick={() => navigate("/company")}
      >
        Company
      </div>
      <div
        className={styles.circle}
        id={styles.leftCircle}
        onClick={() => navigate("/individual1")}
      >
        Individual 1
      </div>
      <div
        className={styles.circle}
        id={styles.rightCircle}
        onClick={() => navigate("/individual2")}
      >
        Individual 2
      </div>
    </div>
  );
};

export { MindMap };
