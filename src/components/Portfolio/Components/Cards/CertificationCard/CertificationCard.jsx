import React from "react";
import styles from "./CertificationCard.module.css";

export const CertificationCard = ({ certification }) => (
  <div className={styles.certificationCard}>
    <h3>{certification.title}</h3>
    <p className={styles.issuer}>{certification.issuer}</p>
    <p className={styles.date}>{certification.date}</p>
    {certification.link && (
      <a
        href={certification.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.certificationLink}
      >
        View Certificate
      </a>
    )}
  </div>
);
