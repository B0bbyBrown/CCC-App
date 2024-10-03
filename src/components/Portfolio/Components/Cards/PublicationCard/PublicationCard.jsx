import React from "react";
import styles from "./PublicationCard.module.css";

export const PublicationCard = ({ publication }) => (
  <div className={styles.publicationCard}>
    <h3>{publication.title}</h3>
    <p className={styles.authors}>{publication.authors}</p>
    <p className={styles.journal}>{publication.journal}</p>
    <p className={styles.date}>{publication.date}</p>
    {publication.link && (
      <a
        href={publication.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.publicationLink}
      >
        Read Publication
      </a>
    )}
  </div>
);
