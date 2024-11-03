import React from "react";
import styles from "./GenericCard.module.css";
import { useTheme } from "../../../../../context/ThemeContext";

export const GenericCard = ({ data }) => {
  const { theme } = useTheme();

  return (
    <div
      className={styles.genericCard}
      style={{
        background: theme.card.background,
        color: theme.text.primary,
      }}
    >
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className={styles.field}>
          <h4 style={{ color: theme.text.primary }}>{key}</h4>
          {Array.isArray(value) ? (
            <ul>
              {value.map((item, index) => (
                <li key={index} style={{ color: theme.text.secondary }}>
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ color: theme.text.secondary }}>{value}</p>
          )}
        </div>
      ))}
    </div>
  );
};
