import React from "react";
import styles from "./Popup.module.css";

const Popup = ({ position, data }) => {
  if (!data) return null;

  const { label, company, individual1, individual2, details } = data;

  return (
    <div
      className={styles.popup}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className={styles.popupContent}>
        <div className={styles.popupHeader}>{label}</div>
        <div className={styles.popupBody}>
          <div className={styles.column}>
            <h4>Individual 1</h4>
            <ul>
              {individual1 && Object.keys(individual1).length > 0 ? (
                Object.keys(individual1).map((key, index) => (
                  <li key={index}>
                    <strong>{key}:</strong>{" "}
                    {Array.isArray(individual1[key])
                      ? individual1[key].join(", ")
                      : individual1[key]}
                  </li>
                ))
              ) : (
                <li>No data available</li>
              )}
            </ul>
          </div>
          <div className={styles.column}>
            <h4>Individual 2</h4>
            <ul>
              {individual2 && Object.keys(individual2).length > 0 ? (
                Object.keys(individual2).map((key, index) => (
                  <li key={index}>
                    <strong>{key}:</strong>{" "}
                    {Array.isArray(individual2[key])
                      ? individual2[key].join(", ")
                      : individual2[key]}
                  </li>
                ))
              ) : (
                <li>No data available</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Popup };
