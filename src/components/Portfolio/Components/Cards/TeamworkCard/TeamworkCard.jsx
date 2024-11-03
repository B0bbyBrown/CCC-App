import React from "react";
import styles from "./TeamworkCard.module.css";

export const TeamworkCard = ({ data }) => {
  if (!data) return null;

  // Handle string format
  if (typeof data === "string") {
    return (
      <div className={styles.teamworkCard}>
        <p className={styles.description}>{data}</p>
      </div>
    );
  }

  // Handle object format
  const {
    title,
    description,
    role,
    teamSize,
    duration,
    responsibilities = [],
    achievements = [],
    challenges = [],
    tools = [],
  } = data;

  return (
    <div className={styles.teamworkCard}>
      <div className={styles.header}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {description && <p className={styles.description}>{description}</p>}
      </div>

      <div className={styles.details}>
        {role && (
          <div className={styles.detail}>
            <span className={styles.label}>Role:</span>
            <span className={styles.value}>{role}</span>
          </div>
        )}
        {teamSize && (
          <div className={styles.detail}>
            <span className={styles.label}>Team Size:</span>
            <span className={styles.value}>{teamSize}</span>
          </div>
        )}
        {duration && (
          <div className={styles.detail}>
            <span className={styles.label}>Duration:</span>
            <span className={styles.value}>{duration}</span>
          </div>
        )}
      </div>

      {responsibilities.length > 0 && (
        <div className={styles.section}>
          <h4>Responsibilities</h4>
          <ul className={styles.list}>
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {achievements.length > 0 && (
        <div className={styles.section}>
          <h4>Achievements</h4>
          <ul className={styles.list}>
            {achievements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {challenges.length > 0 && (
        <div className={styles.section}>
          <h4>Challenges Overcome</h4>
          <ul className={styles.list}>
            {challenges.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {tools.length > 0 && (
        <div className={styles.section}>
          <h4>Collaboration Tools</h4>
          <div className={styles.tags}>
            {tools.map((tool, index) => (
              <span key={index} className={styles.tag}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
