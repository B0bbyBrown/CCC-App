import React from "react";
import styles from "./GoalCard.module.css";

export function GoalCard({ goal, type }) {
  return (
    <div className={`${styles.card} ${styles[type]}`}>
      <p className={styles.goalText}>{goal.goal}</p>
      <p className={styles.deadline}>
        <strong>Deadline:</strong> {goal.deadline}
      </p>
    </div>
  );
}
