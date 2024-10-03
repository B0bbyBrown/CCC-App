import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => (
  <div className={styles.projectCard}>
    <h3>{project.name}</h3>
    <p>{project.description}</p>
    {project.technologies && (
      <div className={styles.technologies}>
        <h4>Technologies:</h4>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    )}
    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.projectLink}
      >
        View Project
      </a>
    )}
  </div>
);
