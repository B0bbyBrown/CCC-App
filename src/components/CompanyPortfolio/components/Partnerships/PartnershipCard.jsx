import React from "react";
import styles from "./PartnershipCard.module.css";

export function PartnershipCard({ partnership }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.partnerName}>{partnership.name}</h3>
      <p className={styles.collaboration}>
        <strong>Collaboration:</strong> {partnership.collaboration}
      </p>
      <p className={styles.duration}>
        <strong>Duration:</strong> {partnership.duration}
      </p>
      <p className={styles.impact}>
        <strong>Impact:</strong> {partnership.impact}
      </p>
    </div>
  );
}
