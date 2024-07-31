import React from "react";
import { renderData } from "../renderData";
import styles from "./PopupCompany.module.css";

export const PopupCompany = ({ data }) => (
  <div className={styles.popup}>
    <h3 className={styles.header}>{data?.name || "No Name Available"}</h3>
    <div className={styles.content}>
      {data ? renderData(data.categories || data) : "No data available"}
    </div>
  </div>
);
