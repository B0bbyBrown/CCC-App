import React from "react";
import styles from "./PopupIndividual.module.css";

export const PopupIndividual = ({ data }) => {
  const categories = Object.keys(data);

  return (
    <div className={styles.popup}>
      {categories.map((category, index) => (
        <div key={index} className={styles.category}>
          <h4>{category}</h4>
          {Object.entries(data[category]).map(([name, details]) => (
            <div key={name} className={styles.individual}>
              <h5>{name}</h5>
              <ul>
                {Object.entries(details).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
