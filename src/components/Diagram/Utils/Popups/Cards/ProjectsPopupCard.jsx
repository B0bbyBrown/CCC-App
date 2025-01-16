import React from "react";
import { PopupCardBase } from "./PopupCardBase";
import styles from "./ProjectsPopupCard.module.css";

export const ProjectsPopupCard = ({ data }) => {
  return (
    <PopupCardBase title="Projects">
      <div className={styles.projectsContainer}>
        {data.map((project, index) => (
          <div key={index} className={styles.project}>
            <div className={styles.projectHeader}>
              <h4 className={styles.projectTitle}>{project.name}</h4>
              {project.status && (
                <span
                  className={`${styles.status} ${
                    styles[project.status.toLowerCase()]
                  }`}
                >
                  {project.status}
                </span>
              )}
            </div>

            {project.description && (
              <p className={styles.description}>{project.description}</p>
            )}

            {project.technologies && (
              <div className={styles.technologies}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className={styles.tag}>
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {project.highlights && (
              <div className={styles.highlights}>
                <h5>Key Features</h5>
                <ul>
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.links && (
              <div className={styles.links}>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    GitHub
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </PopupCardBase>
  );
};
