import React from "react";
import { SkillsPopupCard } from "./Cards/SkillsPopupCard";
import { AchievementsPopupCard } from "./Cards/AchievementsPopupCard";
import { ExperiencePopupCard } from "./Cards/ExperiencePopupCard";
import { ProjectsPopupCard } from "./Cards/ProjectsPopupCard";
import { EducationPopupCard } from "./Cards/EducationPopupCard";
import styles from "./PopupContent.module.css";

export const PopupContent = ({ label, data }) => {
  const getPopupCard = () => {
    switch (label.toLowerCase()) {
      case "skills":
        return <SkillsPopupCard data={data} />;
      case "achievements":
        return <AchievementsPopupCard data={data} />;
      case "experience":
        return <ExperiencePopupCard data={data} />;
      case "projects":
        return <ProjectsPopupCard data={data} />;
      case "education":
        return <EducationPopupCard data={data} />;
      default:
        return (
          <div className={styles.defaultCard}>
            <h3>{label}</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        );
    }
  };

  return <div className={styles.popupContent}>{getPopupCard()}</div>;
};
