import React from "react";
import styles from "./ExhibitionCard.module.css";

export const ExhibitionCard = ({ exhibition }) => (
  <div className={styles.exhibitionCard}>
    <h3>{exhibition.title}</h3>
    <p className={styles.venue}>{exhibition.venue}</p>
    <p className={styles.date}>{exhibition.date}</p>
    {exhibition.description && (
      <p className={styles.description}>{exhibition.description}</p>
    )}
  </div>
);
