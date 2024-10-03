import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { SocialLink } from "../SocialLink/SocialLink";
import { ContactItem } from "../ContactItem/ContactItem";
import styles from "./Header.module.css";

export const Header = ({ name, title, summary, socialMedia, contact }) => (
  <header className={styles.portfolioHeader}>
    <h1>{name}</h1>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.summary}>{summary}</p>
    <div className={styles.socialLinks}>
      {Object.entries(socialMedia).map(([platform, url]) => (
        <SocialLink key={platform} url={url} platform={platform} />
      ))}
    </div>
    <div className={styles.contactInfo}>
      <ContactItem icon={FaEnvelope} text={contact.email} />
      <ContactItem icon={FaPhone} text={contact.phone} />
      <ContactItem icon={FaMapMarkerAlt} text={contact.location} />
    </div>
  </header>
);
