import React from "react";
import styles from "./PopupCompany.module.css";

export const PopupCompany = ({ data }) => (
  <div className={styles.popup}>
    <h3 className={styles.header}>{data?.name || "Company"}</h3>
    <div className={styles.content}>
      {Object.entries(data.categories || {}).map(([category, items]) => (
        <div key={category} className={styles.category}>
          <h4>{category}</h4>
          <ul>
            {Object.entries(items).map(([item, details]) => (
              <li key={item}>
                <strong>{item}:</strong> {details}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);
