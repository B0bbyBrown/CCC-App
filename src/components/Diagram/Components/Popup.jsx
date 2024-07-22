import React from "react";
import styles from "./Popup.module.css";

export const Popup = ({ position, data }) => {
  if (!data) return null;

  const { label, company, individual1, individual2 } = data;

  const renderCategoryData = (categoryData) => {
    if (!categoryData) return <li>No data available</li>;

    return Object.keys(categoryData).map((key, index) => {
      const value = categoryData[key];
      if (Array.isArray(value)) {
        return (
          <li key={index}>
            <strong>{key}:</strong> {value.join(", ")}
          </li>
        );
      } else if (typeof value === "object") {
        return (
          <li key={index}>
            <strong>{key}:</strong> {JSON.stringify(value)}
          </li>
        );
      } else {
        return (
          <li key={index}>
            <strong>{key}:</strong> {value}
          </li>
        );
      }
    });
  };

  return (
    <div
      className={styles.popup}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className={styles.header}>{label}</div>
      <div className={styles.content}>
        <div className={styles.column}>
          <h3>Company</h3>
          <ul>{renderCategoryData(company)}</ul>
        </div>
        <div className={styles.column}>
          <h3>Shulka</h3>
          <ul>{renderCategoryData(individual1)}</ul>
        </div>
        <div className={styles.column}>
          <h3>Keshav</h3>
          <ul>{renderCategoryData(individual2)}</ul>
        </div>
      </div>
    </div>
  );
};
