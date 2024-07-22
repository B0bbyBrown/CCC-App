import React from "react";
import styles from "./PopupIndividual.module.css";

export function PopupIndividual({ position, data }) {
  return (
    <div className={styles.popup} style={{ left: position.x, top: position.y }}>
      <h3>{data.label}</h3>
      {data.Keshav && (
        <div>
          <h4>Keshav</h4>
          <p>{JSON.stringify(data.Keshav[0])}</p> {/* Display first entry */}
        </div>
      )}
      {data.Shulka && (
        <div>
          <h4>Shulka</h4>
          <p>{JSON.stringify(data.Shulka[0])}</p> {/* Display first entry */}
        </div>
      )}
    </div>
  );
}
