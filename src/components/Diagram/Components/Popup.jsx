import React from "react";
import styles from "./Popup.module.css";

export const Popup = ({ position, data }) => {
  if (!data) return null;

  const { label, company, individual1, individual2 } = data;

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
          <ul>
            {company && Object.keys(company).length > 0 ? (
              Object.keys(company).map((key, index) => (
                <li key={index}>
                  <strong>{key}:</strong>{" "}
                  {Array.isArray(company[key])
                    ? company[key].join(", ")
                    : company[key]}
                </li>
              ))
            ) : (
              <li>No data available</li>
            )}
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Shulka</h3>
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
          <h3>Keshav</h3>
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
  );
};
