import React from "react";
import styles from "./DevelopmentCard.module.css";

export const DevelopmentCard = ({ data }) => {
  console.log("DevelopmentCard received data:", data);

  if (!data) return null;

  // Handle string format
  if (typeof data === "string") {
    return (
      <div className={styles.developmentCard}>
        <p className={styles.description}>{data}</p>
      </div>
    );
  }

  // Handle object format
  const {
    title,
    description,
    technologies = [],
    methodologies = [],
    outcomes = [],
    metrics = [],
  } = data;

  return (
    <div className={styles.developmentCard}>
      <div className={styles.header}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {description && <p className={styles.description}>{description}</p>}
      </div>

      {technologies.length > 0 && (
        <div className={styles.section}>
          <h4>Technologies Used</h4>
          <div className={styles.tags}>
            {technologies.map((tech, index) => (
              <span key={index} className={styles.tag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {methodologies.length > 0 && (
        <div className={styles.section}>
          <h4>Methodologies</h4>
          <div className={styles.tags}>
            {methodologies.map((method, index) => (
              <span key={index} className={styles.tag}>
                {method}
              </span>
            ))}
          </div>
        </div>
      )}

      {outcomes.length > 0 && (
        <div className={styles.section}>
          <h4>Outcomes</h4>
          <ul className={styles.list}>
            {outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      )}

      {metrics.length > 0 && (
        <div className={styles.section}>
          <h4>Key Metrics</h4>
          <ul className={styles.list}>
            {metrics.map((metric, index) => (
              <li key={index}>{metric}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
