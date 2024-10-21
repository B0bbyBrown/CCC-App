import React from "react";
import { CompanyPortfolio } from "../../components/CompanyPortfolio/CompanyPortfolio";
import { Header } from "../../components/Header_Footer/Header/Header";
import { Footer } from "../../components/Header_Footer/Footer/Footer";
import styles from "./CuriousCatCreative.module.css";

export const CCC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <CompanyPortfolio />
      <Footer />
    </div>
  );
};
