import React from "react";
import styles from "./SkillsSection.module.css";

export const SkillsSection = ({ data }) => {
  if (!data) {
    return null;
  }

  const { primarySkills = [], secondarySkills = [] } = data;

  return (
    <div className={styles.skillsSection}>
      {primarySkills.length > 0 && (
        <div className={styles.skillCategory}>
          <h3>Primary Skills</h3>
          <div className={styles.skillsList}>
            {primarySkills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      )}

      {secondarySkills.length > 0 && (
        <div className={styles.skillCategory}>
          <h3>Secondary Skills</h3>
          <div className={styles.skillsList}>
            {secondarySkills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
