import React, { useEffect, useState } from "react";
import fetchData from "../../components/Diagram/Utils/fetchData";
import { Card } from "../../components/DataCard/Card";
import styles from "./KeshavInfo.module.css";
import { LoadingScreen } from "../../components/Loading/LoadingScreen";
import { Nav } from "../../components/Nav/Nav";

export const Keshav = () => {
  const [keshavData, setKeshavData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching data for Keshav...");
    fetchData()
      .then(({ keshavData }) => {
        if (!keshavData) {
          throw new Error("Keshav data is undefined");
        }
        console.log("Fetched data:", keshavData);
        setKeshavData(keshavData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!keshavData) {
    console.log("Keshav data not loaded yet...");
    return <LoadingScreen />;
  }

  const categories = Object.keys(keshavData.categories);
  console.log("Keshav categories:", categories);

  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.header}>
        <div className={styles.headerText}>Keshav</div>
      </div>
      <div className={styles.grid}>
        {categories.map((category, index) => (
          <Card
            key={index}
            category={category}
            data={keshavData.categories[category]}
          />
        ))}
      </div>
    </div>
  );
};
