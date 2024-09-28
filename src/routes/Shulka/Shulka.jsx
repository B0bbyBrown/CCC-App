import React, { useEffect, useState } from "react";
import { fetchData } from "../../Utils/fetchData";
import { Card } from "../../components/DataCard/Card";
import styles from "./ShulkaInfo.module.css";
import { LoadingScreen } from "../../components/Loading/LoadingScreen";

export const Shulka = () => {
  const [shulkaData, setShulkaData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching data for Shulka...");
    fetchData()
      .then(({ shulkaData }) => {
        if (!shulkaData) {
          throw new Error("Shulka data is undefined");
        }
        console.log("Fetched data:", shulkaData);
        setShulkaData(shulkaData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!shulkaData) {
    console.log("Shulka data not loaded yet...");
    return <LoadingScreen />;
  }

  const categories = Object.keys(shulkaData.categories);
  console.log("Shulka categories:", categories);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerText}>Shulka</div>
      </div>
      <div className={styles.grid}>
        {categories.map((category, index) => (
          <Card
            key={index}
            category={category}
            data={shulkaData.categories[category]}
          />
        ))}
      </div>
    </div>
  );
};
