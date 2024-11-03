import React from "react";
import styles from "./ProjectCard.module.css";
import { useTheme } from "../../../../../context/ThemeContext";

export const ProjectCard = ({ project }) => {
  const { theme } = useTheme();

  return (
    <div
      className={styles.projectCard}
      style={{
        background: theme.card.background,
        color: theme.text.primary,
      }}
    >
      <h3 style={{ color: theme.text.primary }}>{project.name}</h3>
      <p style={{ color: theme.text.secondary }}>{project.description}</p>

      <div className={styles.details}>
        <div className={styles.roleAndDuration}>
          <span className={styles.role}>{project.role}</span>
          <span className={styles.duration}>{project.duration}</span>
        </div>

        <div className={styles.technologies}>
          <h4>Technologies & Tools:</h4>
          <div className={styles.techList}>
            {project.technologies.map((tech, index) => (
              <span key={index} className={styles.techItem}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.achievements}>
          <h4>Key Achievements:</h4>
          <ul>
            {project.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
