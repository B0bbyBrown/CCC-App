import React from "react";
import { FaTrophy } from "react-icons/fa";
import styles from "./Achievements.module.css";

export function Achievements({ achievements }) {
  return (
    <section className={styles.achievementsSection}>
      <h2 className={styles.sectionTitle}>Our Achievements</h2>
      <div className={styles.achievementsRow}>
        {achievements.map((achievement) => (
          <div key={achievement.title} className={styles.achievementItem}>
            <div className={styles.achievementIcon}>
              <FaTrophy />
            </div>
            <h3 className={styles.achievementTitle}>{achievement.title}</h3>
            <p className={styles.achievementDate}>{achievement.date}</p>
            <p className={styles.achievementDescription}>
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
