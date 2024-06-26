import React from "react";
import styles from "./Popup.module.css";

const Popup = ({ position, data }) => {
  if (!data) return null;

  return (
    <div className={styles.popup} style={{ left: position.x, top: position.y }}>
      <h3>{data.label}</h3>
      {data.company && (
        <div className={styles.popupSection}>
          <div className={styles.popupTitle}>Company</div>
          <div className={styles.popupContent}>{data.company}</div>
        </div>
      )}
      {data.individual1 && (
        <div className={styles.popupSection}>
          <div className={styles.popupTitle}>Individual 1</div>
          <div className={styles.popupContent}>{data.individual1}</div>
        </div>
      )}
      {data.individual2 && (
        <div className={styles.popupSection}>
          <div className={styles.popupTitle}>Individual 2</div>
          <div className={styles.popupContent}>{data.individual2}</div>
        </div>
      )}
      {data.details && (
        <div className={styles.popupSection}>
          <div className={styles.popupTitle}>Details</div>
          <div className={styles.popupContent}>{data.details}</div>
        </div>
      )}
    </div>
  );
};

export { Popup };
