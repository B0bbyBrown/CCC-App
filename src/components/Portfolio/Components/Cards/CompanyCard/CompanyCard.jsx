import React from "react";
import styles from "./CompanyCard.module.css";

export const CompanyCard = ({ data }) => {
  if (!data) {
    return null;
  }

  const {
    company,
    role,
    duration,
    responsibilities = [],
    achievements = [],
  } = data;

  return (
    <div className={styles.companyCard}>
      <div className={styles.header}>
        {role && <h3 className={styles.role}>{role}</h3>}
        {company && <h4 className={styles.company}>{company}</h4>}
        {duration && <p className={styles.duration}>{duration}</p>}
      </div>

      {responsibilities.length > 0 && (
        <div className={styles.section}>
          <h4>Responsibilities</h4>
          <ul className={styles.list}>
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      )}

      {achievements.length > 0 && (
        <div className={styles.section}>
          <h4>Key Achievements</h4>
          <ul className={styles.list}>
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
