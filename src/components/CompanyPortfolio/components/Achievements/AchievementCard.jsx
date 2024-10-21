import React from "react";
import styles from "./AchievementCard.module.css";

export function AchievementCard({ achievement }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.achievementTitle}>{achievement.title}</h3>
      <p className={styles.description}>{achievement.description}</p>
      <p className={styles.date}>
        <strong>Date:</strong> {achievement.date}
      </p>
    </div>
  );
}
