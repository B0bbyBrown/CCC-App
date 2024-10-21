import React from "react";
import styles from "./Clients.module.css";

export function Clients({ clients }) {
  return (
    <section className={styles.clientsSection}>
      <h2 className={styles.sectionTitle}>Our Valued Clients</h2>
      <div className={styles.clientGrid}>
        {clients.map((client) => (
          <div key={client.name} className={styles.clientCard}>
            <h3 className={styles.clientName}>{client.name}</h3>
            <p className={styles.industry}>{client.industry}</p>
            <blockquote className={styles.feedback}>
              {client.feedback}
            </blockquote>
            <p className={styles.projects}>
              Projects: {client.projects.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
