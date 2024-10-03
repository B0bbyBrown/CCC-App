import React from "react";
import styles from "./AchievementCard.module.css";

export const AchievementCard = ({ achievement }) => (
  <div className={styles.achievementCard}>
    <h3>{achievement.title}</h3>
    <p className={styles.date}>{achievement.date}</p>
    {achievement.description && (
      <p className={styles.description}>{achievement.description}</p>
    )}
  </div>
);
