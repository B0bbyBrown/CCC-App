import React from "react";
import { Diagram } from "../../components/Diagram/Diagram";
import { Header } from "../../components/Header_Footer/Header/Header";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className={styles.homeContainer}>
        <Diagram />
      </div>
    </>
  );
};
