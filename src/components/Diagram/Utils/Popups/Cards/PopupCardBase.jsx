import React from "react";
import styles from "./PopupCardBase.module.css";

export const PopupCardBase = ({ title, children, className }) => {
  return (
    <div className={`${styles.card} ${className || ""}`}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
