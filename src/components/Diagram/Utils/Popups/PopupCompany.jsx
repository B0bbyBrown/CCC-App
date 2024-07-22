import React from "react";
import styles from "./PopupCompany.module.css";

export function PopupCompany({ position, data }) {
  return (
    <div className={styles.popup} style={{ left: position.x, top: position.y }}>
      <h3>{data.name}</h3>
      {data.categories &&
        Object.keys(data.categories).map((category) => (
          <div key={category}>
            <h4>{category}</h4>
            <ul>
              {Array.isArray(data.categories[category])
                ? data.categories[category].map((item, index) => (
                    <li key={index}>
                      {typeof item === "string" ? item : JSON.stringify(item)}
                    </li>
                  ))
                : Object.keys(data.categories[category]).map((subCategory) => (
                    <li key={subCategory}>
                      {subCategory}: {data.categories[category][subCategory]}
                    </li>
                  ))}
            </ul>
          </div>
        ))}
    </div>
  );
}
