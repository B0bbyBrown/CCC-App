import React from "react";
import styles from "./LoadingAnimation.module.css"; // Add your styles

export const LoadingAnimation = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};
