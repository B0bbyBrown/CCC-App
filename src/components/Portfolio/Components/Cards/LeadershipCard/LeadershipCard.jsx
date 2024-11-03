import React from "react";
import styles from "./LeadershipCard.module.css";

export const LeadershipCard = ({ data }) => {
  if (!data) return null;

  // Handle string format
  if (typeof data === "string") {
    return (
      <div className={styles.leadershipCard}>
        <p className={styles.description}>{data}</p>
      </div>
    );
  }

  // Handle object format
  const {
    title,
    description,
    role,
    organization,
    duration,
    teamSize,
    initiatives = [],
    outcomes = [],
    skills = [],
    challenges = [],
  } = data;

  return (
    <div className={styles.leadershipCard}>
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
        {organization && (
          <div className={styles.detail}>
            <span className={styles.label}>Organization:</span>
            <span className={styles.value}>{organization}</span>
          </div>
        )}
        {duration && (
          <div className={styles.detail}>
            <span className={styles.label}>Duration:</span>
            <span className={styles.value}>{duration}</span>
          </div>
        )}
        {teamSize && (
          <div className={styles.detail}>
            <span className={styles.label}>Team Size:</span>
            <span className={styles.value}>{teamSize}</span>
          </div>
        )}
      </div>

      {initiatives.length > 0 && (
        <div className={styles.section}>
          <h4>Key Initiatives</h4>
          <ul className={styles.list}>
            {initiatives.map((initiative, index) => (
              <li key={index}>{initiative}</li>
            ))}
          </ul>
        </div>
      )}

      {outcomes.length > 0 && (
        <div className={styles.section}>
          <h4>Outcomes & Impact</h4>
          <ul className={styles.list}>
            {outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      )}

      {challenges.length > 0 && (
        <div className={styles.section}>
          <h4>Challenges Addressed</h4>
          <ul className={styles.list}>
            {challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>
      )}

      {skills.length > 0 && (
        <div className={styles.section}>
          <h4>Leadership Skills</h4>
          <div className={styles.tags}>
            {skills.map((skill, index) => (
              <span key={index} className={styles.tag}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
