import React, { useEffect, useState } from "react";
import fetchData from "../../components/Diagram/Utils/fetchData";
import { Card } from "../../components/DataCard/Card";
import { Nav } from "../../components/Nav/Nav"; // Import the Nav component
import styles from "./Curious-Cat-CreativeInfo.module.css";

export const CuriousCatCreative = () => {
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    fetchData().then(({ companyData }) => {
      setCompanyData(companyData);
    });
  }, []);

  if (!companyData) {
    return <div>Loading...</div>;
  }

  const categories = Object.keys(companyData.categories);

  return (
    <div className={styles.container}>
      <Nav /> {/* Add the Nav component */}
      <div className={styles.header}>
        <div className={styles.headerText}>Curious Cat Creative</div>
      </div>
      <div className={styles.grid}>
        {categories.map((category, index) => (
          <Card
            key={index}
            category={category}
            data={companyData.categories[category]}
          />
        ))}
      </div>
    </div>
  );
};
