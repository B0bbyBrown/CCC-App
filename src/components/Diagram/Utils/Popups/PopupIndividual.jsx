import React from "react";
import { renderData } from "../../Utils/renderData";
import styles from "./PopupIndividual.module.css";

export const PopupIndividual = ({ data }) => {
  const categories = Object.keys(data);

  return (
    <div className={styles.popup}>
      <div className={styles.content}>
        {categories.map((category, index) => (
          <div key={index} className={styles.categoryBlock}>
            <h4 className={styles.category}>{category}</h4>
            <div className={styles.individuals}>
              {Object.keys(data[category]).map((name, idx) => (
                <div key={idx} className={styles.individualBlock}>
                  <h5 className={styles.individual}>{name}</h5>
                  {data[category][name]
                    ? renderData(data[category][name])
                    : "No data available"}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
