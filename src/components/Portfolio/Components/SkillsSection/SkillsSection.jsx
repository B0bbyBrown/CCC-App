import React from "react";
import styles from "./SkillsSection.module.css";

export const SkillsSection = ({ skills }) => (
  <div className={styles.skillsSection}>
    {Object.entries(skills).map(([category, skillList]) => (
      <div key={category} className={styles.skillCategory}>
        <h3>{category}</h3>
        <ul>
          {skillList.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
