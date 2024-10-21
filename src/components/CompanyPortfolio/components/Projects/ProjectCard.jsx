import React from "react";
import styles from "./ProjectCard.module.css";

function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.projectName}>{project.name}</h3>
      <p className={styles.description}>{project.description}</p>
      <p className={styles.detail}>
        <strong>Duration:</strong> {project.duration}
      </p>
      <p className={styles.detail}>
        <strong>Technologies:</strong> {project.technologies.join(", ")}
      </p>
      <p className={styles.detail}>
        <strong>Team Members:</strong> {project.teamMembers.join(", ")}
      </p>
      <p className={styles.detail}>
        <strong>Status:</strong> {project.status}
      </p>
      <p className={styles.detail}>
        <strong>Client:</strong> {project.client}
      </p>
      <p className={styles.detail}>
        <strong>Budget:</strong> {project.budget}
      </p>
      <p className={styles.detail}>
        <strong>Outcomes:</strong> {project.outcomes}
      </p>
    </div>
  );
}

export default ProjectCard;
