import React from "react";
import styles from "./EducationCard.module.css";

export const EducationCard = ({ education }) => (
  <div className={styles.educationCard}>
    <h3>{education.degree}</h3>
    <p className={styles.institution}>{education.institution}</p>
    <p className={styles.duration}>{education.duration}</p>
    {education.achievements && (
      <div className={styles.achievements}>
        <h4>Achievements:</h4>
        <ul>
          {education.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);
