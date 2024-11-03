import React from "react";
import styles from "./CertificationCard.module.css";

export const CertificationCard = ({ data }) => {
  if (!data) {
    return null;
  }

  const {
    name,
    issuer,
    date,
    credentialID,
    credentialURL,
    description,
    skills = [],
  } = data;

  return (
    <div className={styles.certificationCard}>
      <div className={styles.header}>
        {name && <h3 className={styles.title}>{name}</h3>}
        {issuer && <h4 className={styles.issuer}>{issuer}</h4>}
        {date && <p className={styles.date}>{date}</p>}
      </div>

      {description && <p className={styles.description}>{description}</p>}

      {skills.length > 0 && (
        <div className={styles.section}>
          <h4>Skills</h4>
          <div className={styles.skillsList}>
            {skills.map((skill, index) => (
              <span key={index} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className={styles.footer}>
        {credentialID && (
          <p className={styles.credentialId}>
            <span>Credential ID:</span> {credentialID}
          </p>
        )}
        {credentialURL && (
          <a
            href={credentialURL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.verifyLink}
          >
            Verify Certificate
          </a>
        )}
      </div>
    </div>
  );
};
