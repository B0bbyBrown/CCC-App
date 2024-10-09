import React from "react";
import { PopupIndividual } from "./PopupIndividual";
import { PopupCompany } from "./PopupCompany";
import styles from "./PopupMain.module.css";

export const PopupMain = ({ position, data }) => (
  <div
    className={styles.popup}
    style={{
      position: "absolute",
      top: `${position.y}px`,
      left: `${position.x}px`,
    }}
  >
    {data && Object.keys(data).length > 0 ? (
      data.categories ? (
        <PopupCompany data={data} />
      ) : (
        <PopupIndividual data={data} />
      )
    ) : (
      <div className={styles.noData}>No data available</div>
    )}
  </div>
);
