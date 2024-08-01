import React from "react";
import styles from "./PopupCompany.module.css";
import { renderData } from "../../Utils/renderData";

export const PopupCompany = ({ data }) => {
  console.log("PopupCompany data:", data);

  return (
    <div className={styles.popup}>
      <h3 className={styles.header}>{data?.name || "No Name Available"}</h3>
      <div className={styles.content}>
        {data ? renderData(data.categories || data) : "No data available"}
      </div>
    </div>
  );
};
