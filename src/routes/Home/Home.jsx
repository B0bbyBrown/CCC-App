import React from "react";
import { Diagram } from "../../components/Diagram/Diagram";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Diagram />
    </div>
  );
};
