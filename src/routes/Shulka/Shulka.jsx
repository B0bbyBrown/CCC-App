import React, { useEffect, useState } from "react";
import fetchData from "../../components/Diagram/Utils/fetchData";
import { Card } from "../../components/DataCard/Card";
import { Nav } from "../../components/Nav/Nav"; // Import the Nav component
import styles from "./ShulkaInfo.module.css";

export const Shulka = () => {
  const [shulkaData, setShulkaData] = useState(null);

  useEffect(() => {
    fetchData().then(({ shulkaData }) => {
      setShulkaData(shulkaData);
    });
  }, []);

  if (!shulkaData) {
    return <div>Loading...</div>;
  }

  const categories = Object.keys(shulkaData.categories);

  return (
    <div className={styles.container}>
      <Nav /> {/* Add the Nav component */}
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

export default Shulka;
