import React from "react";
import { PopupIndividual } from "./PopupIndividual";
import { PopupCompany } from "./PopupCompany";
import styles from "./PopupMain.module.css";

export const PopupMain = ({ position, data }) => {
  console.log("Rendering popup for:", data);

  return (
    <div
      className={styles.popup}
      style={{
        position: "absolute",
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    >
      {data ? (
        Array.isArray(data.categories || data) ? (
          <PopupIndividual data={data.categories || data} />
        ) : (
          <PopupCompany data={data} />
        )
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};
