import React from "react";
import { ProjectCard } from "../Cards/ProjectCard/ProjectCard";
import { CompanyCard } from "../Cards/CompanyCard/CompanyCard";
import { EducationCard } from "../Cards/EducationCard/EducationCard";
import { SkillsSection } from "../SkillsSection/SkillsSection";
import { CertificationCard } from "../Cards/CertificationCard/CertificationCard";
import { ExhibitionCard } from "../Cards/ExhibitionCard/ExhibitionCard";
import { CollaborationCard } from "../Cards/CollaborationCard/CollaborationCard";
import { WorkshopCard } from "../Cards/WorkshopCard/WorkshopCard";
import { PublicationCard } from "../Cards/PublicationCard/PublicationCard";
import { AchievementCard } from "../Cards/AchievementCard/AchievementCard";
import { categoryIcons } from "../../utils/icons";
import styles from "./TabContent.module.css";

export const TabContent = ({ category, data }) => {
  const Icon = categoryIcons[category];

  const renderContent = () => {
    switch (category) {
      case "Projects":
        return (
          <div className={styles.projectsGrid}>
            {data.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        );
      case "Experience":
        return (
          <div className={styles.companiesList}>
            {data.map((company, index) => (
              <CompanyCard key={index} company={company} />
            ))}
          </div>
        );
      case "Education":
        return (
          <div className={styles.educationList}>
            {data.map((education, index) => (
              <EducationCard key={index} education={education} />
            ))}
          </div>
        );
      case "Skills":
        return <SkillsSection skills={data} />;
      case "Certifications":
        return (
          <div className={styles.certificationsList}>
            {data.map((certification, index) => (
              <CertificationCard key={index} certification={certification} />
            ))}
          </div>
        );
      case "Exhibitions":
        return (
          <div className={styles.exhibitionsList}>
            {data.map((exhibition, index) => (
              <ExhibitionCard key={index} exhibition={exhibition} />
            ))}
          </div>
        );
      case "Collaborations":
        return (
          <div className={styles.collaborationsList}>
            {data.map((collaboration, index) => (
              <CollaborationCard key={index} collaboration={collaboration} />
            ))}
          </div>
        );
      case "Workshops":
        return (
          <div className={styles.workshopsList}>
            {data.map((workshop, index) => (
              <WorkshopCard key={index} workshop={workshop} />
            ))}
          </div>
        );
      case "Publications":
        return (
          <div className={styles.publicationsList}>
            {data.map((publication, index) => (
              <PublicationCard key={index} publication={publication} />
            ))}
          </div>
        );
      case "Achievements":
        return (
          <div className={styles.achievementsList}>
            {data.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} />
            ))}
          </div>
        );
      default:
        return <p>No data available for this category.</p>;
    }
  };

  return (
    <div className={styles.tabContent}>
      <h2 className={styles.categoryTitle}>
        {Icon && <Icon className={styles.categoryIcon} />}
        {category}
      </h2>
      {renderContent()}
    </div>
  );
};
