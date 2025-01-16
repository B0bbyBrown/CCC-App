import React from "react";
import { PopupCardBase } from "./PopupCardBase";
import styles from "./SkillsPopupCard.module.css";

export const SkillsPopupCard = ({ data }) => {
  return (
    <PopupCardBase title="Skills">
      <div className={styles.skillsGrid}>
        {Object.entries(data).map(([category, skills]) => (
          <div key={category} className={styles.category}>
            <h4>{category}</h4>
            <div className={styles.skillTags}>
              {skills.map((skill, index) => (
                <span key={index} className={styles.tag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PopupCardBase>
  );
};
