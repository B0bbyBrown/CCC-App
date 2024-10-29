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

const renderContent = (category, content) => {
  if (!content) return null;

  switch (category) {
    case "ArtProjects":
      return content.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ));
    case "Skills":
      return <SkillsSection skills={content} />;
    case "Experience":
      return content.map((company, index) => (
        <CompanyCard key={index} company={company} />
      ));
    case "Education":
      return content.map((education, index) => (
        <EducationCard key={index} education={education} />
      ));
    case "Certifications":
      return content.map((certification, index) => (
        <CertificationCard key={index} certification={certification} />
      ));
    case "Exhibitions":
      return content.map((exhibition, index) => (
        <ExhibitionCard key={index} exhibition={exhibition} />
      ));
    case "Collaborations":
      return content.map((collaboration, index) => (
        <CollaborationCard key={index} collaboration={collaboration} />
      ));
    case "Workshops":
      return content.map((workshop, index) => (
        <WorkshopCard key={index} workshop={workshop} />
      ));
    case "Publications":
      return content.map((publication, index) => (
        <PublicationCard key={index} publication={publication} />
      ));
    case "Achievements":
      return content.map((achievement, index) => (
        <AchievementCard key={index} achievement={achievement} />
      ));
    default:
      return null;
  }
};

export const TabContent = ({ category, content }) => {
  const Icon = categoryIcons[category];

  return (
    <div className={styles.portfolioContent}>
      <h2 className={styles.categoryTitle}>
        {Icon && <Icon className={styles.categoryIcon} />}
        {category}
      </h2>
      {renderContent(category, content)}
    </div>
  );
};
