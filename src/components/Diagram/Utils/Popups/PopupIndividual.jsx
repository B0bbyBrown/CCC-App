import React from "react";
import styles from "./PopupIndividual.module.css";

export const PopupIndividual = ({ data }) => {
  console.log("PopupIndividual data:", data);

  const renderData = (data) => {
    if (Array.isArray(data)) {
      return (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{renderData(item)}</li>
          ))}
        </ul>
      );
    } else if (typeof data === "object" && data !== null) {
      return (
        <ul>
          {Object.entries(data).map(([key, value], index) => (
            <li key={index}>
              <strong>{key}:</strong> {renderData(value)}
            </li>
          ))}
        </ul>
      );
    } else if (typeof data === "boolean") {
      return data ? "True" : "False";
    } else if (data !== undefined && data !== null) {
      return data.toString();
    } else {
      return "No data available";
    }
  };

  return (
    <div className={styles.popup}>
      <h3 className={styles.header}>Details</h3>
      <div className={styles.content}>
        {data ? renderData(data) : "No data available"}
      </div>
    </div>
  );
};
