import React from "react";
import styles from "./WorkshopCard.module.css";

export const WorkshopCard = ({ workshop }) => (
  <div className={styles.workshopCard}>
    <h3>{workshop.title}</h3>
    <p className={styles.venue}>{workshop.venue}</p>
    <p className={styles.date}>{workshop.date}</p>
    {workshop.description && (
      <p className={styles.description}>{workshop.description}</p>
    )}
  </div>
);
