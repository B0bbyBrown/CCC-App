import React from "react";
import styles from "./ResearchCard.module.css";

export const ResearchCard = ({ data }) => {
  if (!data) {
    return null;
  }

  const {
    title,
    abstract,
    authors = [],
    publication,
    date,
    doi,
    keywords = [],
    status,
    link,
    citations = [],
    findings = [],
  } = data;

  return (
    <div className={styles.researchCard}>
      <div className={styles.header}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {authors.length > 0 && (
          <p className={styles.authors}>{authors.join(", ")}</p>
        )}
        {publication && <p className={styles.publication}>{publication}</p>}
        {date && <p className={styles.date}>{date}</p>}
      </div>

      {abstract && <p className={styles.abstract}>{abstract}</p>}

      {keywords.length > 0 && (
        <div className={styles.keywords}>
          {keywords.map((keyword, index) => (
            <span key={index} className={styles.keyword}>
              {keyword}
            </span>
          ))}
        </div>
      )}

      {status && (
        <div className={styles.status}>
          <span className={styles.statusLabel}>Status:</span>
          <span className={styles.statusValue}>{status}</span>
        </div>
      )}

      {findings.length > 0 && (
        <div className={styles.section}>
          <h4>Key Findings</h4>
          <ul className={styles.list}>
            {findings.map((finding, index) => (
              <li key={index}>{finding}</li>
            ))}
          </ul>
        </div>
      )}

      {citations.length > 0 && (
        <div className={styles.section}>
          <h4>Citations</h4>
          <ul className={styles.citationsList}>
            {citations.map((citation, index) => (
              <li key={index}>{citation}</li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles.footer}>
        {doi && (
          <p className={styles.doi}>
            <span>DOI:</span> {doi}
          </p>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            View Publication
          </a>
        )}
      </div>
    </div>
  );
};
