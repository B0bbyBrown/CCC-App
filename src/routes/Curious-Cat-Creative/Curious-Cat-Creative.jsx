import React, { useEffect, useState } from "react";
import { fetchData } from "../../Utils/fetchData";
import { Card } from "../../components/DataCard/Card";
import styles from "./CuriousCatCreative.module.css";
import { LoadingAnimation } from "../../components/Loading/LoadingAnimation";

export const CCC = () => {
  const [curiousCatData, setCuriousCatData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching data for Curious Cat Creative...");
    fetchData()
      .then(({ companyData }) => {
        if (!companyData) {
          throw new Error("Curious Cat Creative data is undefined");
        }
        console.log("Fetched data:", companyData);
        setCuriousCatData(companyData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!curiousCatData) {
    console.log("Curious Cat Creative data not loaded yet...");
    return <LoadingAnimation />;
  }

  const categories = Object.keys(curiousCatData.categories);
  console.log("Curious Cat Creative categories:", categories);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerText}>Curious Cat Creative</div>
        </div>
        <div className={styles.grid}>
          {categories.map((category, index) => (
            <Card
              key={index}
              category={category}
              data={curiousCatData.categories[category]}
            />
          ))}
        </div>
      </div>
    </>
  );
};
