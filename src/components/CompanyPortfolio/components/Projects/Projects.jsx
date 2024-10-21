import React from "react";
import { FaCheckCircle, FaHourglassHalf } from "react-icons/fa";
import styles from "./Projects.module.css";

export function Projects({ projects }) {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>Our Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div key={project.name} className={styles.projectItem}>
            <div className={styles.projectIcon}>
              {project.status === "Completed" ? (
                <FaCheckCircle className={styles.iconCompleted} />
              ) : (
                <FaHourglassHalf className={styles.iconInProgress} />
              )}
            </div>
            <h3 className={styles.projectName}>{project.name}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.projectDetails}>
              <span className={styles.projectClient}>
                Client: {project.client}
              </span>
              <span className={styles.projectDuration}>
                Duration: {project.duration}
              </span>
              <span className={styles.projectTechnologies}>
                Tech: {project.technologies.join(", ")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
