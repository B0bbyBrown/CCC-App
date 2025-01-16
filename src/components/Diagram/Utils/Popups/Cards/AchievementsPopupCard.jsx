import React from "react";
import { PopupCardBase } from "./PopupCardBase";
import styles from "./AchievementsPopupCard.module.css";

export const AchievementsPopupCard = ({ data }) => {
  return (
    <PopupCardBase title="Achievements">
      <div className={styles.achievements}>
        {data.map((achievement, index) => (
          <div key={index} className={styles.achievement}>
            <h4>{achievement.title}</h4>
            <p className={styles.description}>{achievement.description}</p>
            {achievement.date && (
              <span className={styles.date}>{achievement.date}</span>
            )}
          </div>
        ))}
      </div>
    </PopupCardBase>
  );
};
