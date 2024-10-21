import React from "react";
import { FaFlag, FaBullseye } from "react-icons/fa";
import styles from "./Goals.module.css";

export function Goals({ goals }) {
  const { shortTermGoals, longTermGoals } = goals;

  return (
    <section className={styles.goalsSection}>
      <h2 className={styles.sectionTitle}>Our Goals</h2>
      <div className={styles.goalsContainer}>
        <div className={styles.goalColumn}>
          <h3 className={styles.columnTitle}>
            <FaFlag className={styles.columnIcon} /> Short-term Goals
          </h3>
          {shortTermGoals.map((goal, index) => (
            <div key={index} className={styles.goalItem}>
              <h4 className={styles.goalTitle}>{goal.goal}</h4>
              <p className={styles.goalDeadline}>Deadline: {goal.deadline}</p>
              {goal.progress && (
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: goal.progress }}
                  >
                    {goal.progress}
                  </div>
                </div>
              )}
              {goal.keyMilestones && (
                <ul className={styles.milestones}>
                  {goal.keyMilestones.map((milestone, idx) => (
                    <li key={idx}>{milestone}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className={styles.goalColumn}>
          <h3 className={styles.columnTitle}>
            <FaBullseye className={styles.columnIcon} /> Long-term Goals
          </h3>
          {longTermGoals.map((goal, index) => (
            <div key={index} className={styles.goalItem}>
              <h4 className={styles.goalTitle}>{goal.goal}</h4>
              <p className={styles.goalDeadline}>Deadline: {goal.deadline}</p>
              {goal.strategies && (
                <ul className={styles.strategies}>
                  {goal.strategies.map((strategy, idx) => (
                    <li key={idx}>{strategy}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
