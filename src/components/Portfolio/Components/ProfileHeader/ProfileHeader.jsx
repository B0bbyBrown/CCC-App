import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import styles from "./ProfileHeader.module.css";

export const ProfileHeader = ({
  name,
  title,
  summary,
  socialMedia,
  contact,
}) => (
  <header className={styles.profileHeader}>
    <h1>{name}</h1>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.summary}>{summary}</p>
    <div className={styles.socialLinks}>
      {socialMedia.linkedin && (
        <a
          href={socialMedia.linkedin}
          className={`${styles.socialLink} ${styles.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      )}
      {socialMedia.github && (
        <a
          href={socialMedia.github}
          className={`${styles.socialLink} ${styles.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      )}
      {socialMedia.twitter && (
        <a
          href={socialMedia.twitter}
          className={`${styles.socialLink} ${styles.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      )}
    </div>
    <div className={styles.contactInfo}>
      <div className={styles.contactItem}>
        <FaEnvelope />
        <span>{contact.email}</span>
      </div>
      <div className={styles.contactItem}>
        <FaPhone />
        <span>{contact.phone}</span>
      </div>
      <div className={styles.contactItem}>
        <FaMapMarkerAlt />
        <span>{contact.location}</span>
      </div>
    </div>
  </header>
);
