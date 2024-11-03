import React from "react";
import styles from "./AchievementCard.module.css";

export const AchievementCard = ({ data }) => {
  if (!data) {
    return null;
  }

  // Handle both string achievements and object achievements
  if (typeof data === "string") {
    return (
      <div className={styles.achievementCard}>
        <p className={styles.description}>{data}</p>
      </div>
    );
  }

  // If it's an array of strings
  if (Array.isArray(data)) {
    return (
      <div className={styles.achievementCard}>
        <ul className={styles.list}>
          {data.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    );
  }

  const {
    name,
    title, // Added for compatibility
    description,
    date,
    organization,
    category,
    impact = [],
    recognition = [],
    details = [], // Added for compatibility
  } = data;

  return (
    <div className={styles.achievementCard}>
      <div className={styles.header}>
        {(name || title) && <h3 className={styles.title}>{name || title}</h3>}
        {organization && (
          <h4 className={styles.organization}>{organization}</h4>
        )}
        {date && <p className={styles.date}>{date}</p>}
      </div>

      {description && <p className={styles.description}>{description}</p>}

      {category && (
        <div className={styles.category}>
          <span className={styles.categoryLabel}>Category:</span>
          <span className={styles.categoryValue}>{category}</span>
        </div>
      )}

      {details.length > 0 && (
        <div className={styles.section}>
          <ul className={styles.list}>
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}

      {impact.length > 0 && (
        <div className={styles.section}>
          <h4>Impact</h4>
          <ul className={styles.list}>
            {impact.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {recognition.length > 0 && (
        <div className={styles.section}>
          <h4>Recognition</h4>
          <ul className={styles.list}>
            {recognition.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
