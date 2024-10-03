import React from "react";
import styles from "./ContactItem.module.css";

export const ContactItem = ({ icon: Icon, text }) => (
  <div className={styles.contactItem}>
    <Icon aria-hidden="true" />
    <span>{text}</span>
  </div>
);
