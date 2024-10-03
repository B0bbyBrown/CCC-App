import React from "react";
import styles from "./CompanyCard.module.css";

export const CompanyCard = ({ company }) => (
  <div className={styles.companyCard}>
    <h3>{company.name}</h3>
    <p className={styles.position}>{company.position}</p>
    <p className={styles.duration}>{company.duration}</p>
    {company.responsibilities && (
      <div className={styles.responsibilities}>
        <h4>Responsibilities:</h4>
        <ul>
          {company.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);
