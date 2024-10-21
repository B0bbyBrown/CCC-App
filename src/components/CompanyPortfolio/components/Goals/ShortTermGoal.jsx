import React from "react";
import { GoalCard } from "./GoalCard";
import styles from "./ShortTermGoal.module.css";

export function ShortTermGoals({ goals }) {
  return (
    <div className={styles.shortTermGoals}>
      <h3 className={styles.subSectionTitle}>Short-Term Goals</h3>
      <div className={styles.goalsGrid}>
        {goals.map((goal, index) => (
          <GoalCard key={index} goal={goal} type="short-term" />
        ))}
      </div>
    </div>
  );
}
