import React from "react";
import { PopupCardBase } from "./PopupCardBase";
import styles from "./ExperiencePopupCard.module.css";

export const ExperiencePopupCard = ({ data }) => {
  return (
    <PopupCardBase title="Experience">
      <div className={styles.timeline}>
        {data.map((role, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.roleHeader}>
              <h4>{role.title}</h4>
              <span className={styles.company}>{role.company}</span>
              <span className={styles.duration}>{role.duration}</span>
            </div>
            <ul className={styles.responsibilities}>
              {role.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PopupCardBase>
  );
};
