import React from "react";
import { PopupIndividual } from "./PopupIndividual";
import { PopupCompany } from "./PopupCompany";
import styles from "./PopupMain.module.css";

export function PopupMain({ position, data }) {
  if (!data) return null;

  const isCompany = data.label === "Curious Cat Creative";

  return (
    <div className={styles.popup} style={{ left: position.x, top: position.y }}>
      {isCompany ? (
        <PopupCompany position={position} data={data} />
      ) : (
        <PopupIndividual position={position} data={data} />
      )}
    </div>
  );
}
