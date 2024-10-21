import React from "react";
import styles from "./ClientCard.module.css";

export function ClientCard({ client }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.clientName}>{client.name}</h3>
      <p className={styles.industry}>
        <strong>Industry:</strong> {client.industry}
      </p>
      <p className={styles.projects}>
        <strong>Projects:</strong> {client.projects.join(", ")}
      </p>
      <div className={styles.contact}>
        <p>
          <strong>Contact:</strong>
        </p>
        <p>Email: {client.contact.email}</p>
        <p>Phone: {client.contact.phone}</p>
      </div>
      <p className={styles.feedback}>
        <strong>Feedback:</strong> {client.feedback}
      </p>
    </div>
  );
}
