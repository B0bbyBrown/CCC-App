import React from "react";
import { PlatformTemplate, ServiceTemplate } from "./PopupTemplates";
import styles from "./PopupMain.module.css";

export const PopupMain = ({ position, data }) => {
  const getTemplate = () => {
    if (!data) {
      return (
        <div className={styles.noData}>
          <span className={styles.noDataIcon}>ℹ️</span>
          No data available
        </div>
      );
    }

    switch (data.type?.toLowerCase()) {
      case "platform":
        return <PlatformTemplate data={data} />;
      case "service":
        return <ServiceTemplate data={data} />;
      default:
        return (
          <div className={styles.unknownType}>
            <h3>Unknown Node Type</h3>
            <p>Type: {data.type || "Not specified"}</p>
            <p>Data received:</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        );
    }
  };

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
      {getTemplate()}
    </div>
  );
};
