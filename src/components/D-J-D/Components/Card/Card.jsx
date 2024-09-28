import React from "react";
import styles from "./Card.module.css";

export function Card({ children }) {
  return <div className={styles.card}>{children}</div>;
}

export function CardHeader({ children }) {
  return <div className={styles["card-header"]}>{children}</div>;
}

export function CardTitle({ children }) {
  return <h3 className={styles["card-title"]}>{children}</h3>;
}

export function CardContent({ children }) {
  return <div className={styles["card-content"]}>{children}</div>;
}

export function CardDescription({ children }) {
  return <p className={styles["card-description"]}>{children}</p>;
}
