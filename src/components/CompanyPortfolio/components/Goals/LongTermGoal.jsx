import React from "react";
import { GoalCard } from "./GoalCard";
import styles from "./LongTermGoal.module.css";

export function LongTermGoals({ goals }) {
  return (
    <div className={styles.longTermGoals}>
      <h3 className={styles.subSectionTitle}>Long-Term Goals</h3>
      <div className={styles.goalsGrid}>
        {goals.map((goal, index) => (
          <GoalCard key={index} goal={goal} type="long-term" />
        ))}
      </div>
    </div>
  );
}
