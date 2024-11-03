import React from "react";
import styles from "./Loading.module.css";

export const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}></div>
      <p>Loading portfolio data...</p>
    </div>
  );
};
