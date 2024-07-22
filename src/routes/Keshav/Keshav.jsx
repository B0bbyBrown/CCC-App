import React, { useEffect, useState } from "react";
import fetchData from "../../components/Diagram/Utils/fetchData";
import { Card } from "../../components/DataCard/Card";
import { Nav } from "../../components/Nav/Nav"; // Import the Nav component
import styles from "./KeshavInfo.module.css";

export const Keshav = () => {
  const [keshavData, setKeshavData] = useState(null);

  useEffect(() => {
    fetchData().then(({ keshavData }) => {
      setKeshavData(keshavData);
    });
  }, []);

  if (!keshavData) {
    return <div>Loading...</div>;
  }

  const categories = Object.keys(keshavData.categories);

  return (
    <div className={styles.container}>
      <Nav /> {/* Add the Nav component */}
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
