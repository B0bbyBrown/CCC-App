import React from "react";
import { renderData } from "../renderData";
import styles from "./PopupMain.module.css";

export const PopupMain = ({ position, label, data }) => {
  return (
    <div
      className={`${styles.popup} ${
        data ? styles.popupWithData : styles.popupNoData
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <h2 className={styles.header}>{label}</h2>
      <div className={styles.content}>
        {data ? renderData(label, data) : <p>No data available</p>}
      </div>
    </div>
  );
};
