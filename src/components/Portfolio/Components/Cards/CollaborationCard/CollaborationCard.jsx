import React from "react";
import styles from "./CollaborationCard.module.css";

export const CollaborationCard = ({ collaboration }) => (
  <div className={styles.collaborationCard}>
    <h3>{collaboration.title}</h3>
    <p className={styles.partners}>{collaboration.partners}</p>
    <p className={styles.date}>{collaboration.date}</p>
    {collaboration.description && (
      <p className={styles.description}>{collaboration.description}</p>
    )}
  </div>
);
