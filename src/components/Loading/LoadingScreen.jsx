import React from "react";
import styles from "./LoadingScreen.module.css";

export const LoadingScreen = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
};
