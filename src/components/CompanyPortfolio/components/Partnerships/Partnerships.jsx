import React from "react";
import { FaHandshake } from "react-icons/fa";
import styles from "./Partnerships.module.css";

export function Partnerships({ partnerships }) {
  return (
    <section className={styles.partnershipsSection}>
      <h2 className={styles.sectionTitle}>Our Strategic Partnerships</h2>
      <div className={styles.partnershipGrid}>
        {partnerships.map((partnership) => (
          <div key={partnership.name} className={styles.partnershipItem}>
            <div className={styles.partnershipIcon}>
              <FaHandshake />
            </div>
            <h3 className={styles.partnerName}>{partnership.name}</h3>
            <p className={styles.collaboration}>{partnership.collaboration}</p>
            <div className={styles.partnershipDetails}>
              <span className={styles.duration}>
                Duration: {partnership.duration}
              </span>
              {partnership.impact && (
                <span className={styles.impact}>
                  Impact: {partnership.impact}
                </span>
              )}
            </div>
            {partnership.focusAreas && (
              <div className={styles.focusAreas}>
                <h4>Focus Areas:</h4>
                <ul>
                  {partnership.focusAreas.map((area, index) => (
                    <li key={index}>{area}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
