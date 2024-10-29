import React from "react";
import { Diagram } from "../../components/Diagram/Diagram";
import { Header } from "../../components/Header_Footer/Header/Header";
import { HomeBackground } from "../../components/Shaders/HomeBackground";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.container}>
      <HomeBackground />
      <div className={styles.contentLayer}>
        <Header />
        <div className={styles.homeContainer}>
          <Diagram />
        </div>
      </div>
    </div>
  );
};
