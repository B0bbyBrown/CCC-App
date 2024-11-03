import { ProjectCard } from "../Components/Cards/ProjectCard/ProjectCard";
import { SkillsSection } from "../Components/SkillsSection/SkillsSection.jsx";
import { CompanyCard } from "../Components/Cards/CompanyCard/CompanyCard";
import { EducationCard } from "../Components/Cards/EducationCard/EducationCard";
import { ExhibitionCard } from "../Components/Cards/ExhibitionCard/ExhibitionCard";
import { WorkshopCard } from "../Components/Cards/WorkshopCard/WorkshopCard";
import { CertificationCard } from "../Components/Cards/CertificationCard/CertificationCard";
import { AchievementCard } from "../Components/Cards/AchievementCard/AchievementCard";
import { ResearchCard } from "../Components/Cards/ResearchCard/ResearchCard";
import { DevelopmentCard } from "../Components/Cards/DevelopmentCard/DevelopmentCard";
import { TeamworkCard } from "../Components/Cards/TeamworkCard/TeamworkCard";
import { LeadershipCard } from "../Components/Cards/LeadershipCard/LeadershipCard";
import { GenericCard } from "../Components/Cards/GenericCard/GenericCard";

export const categoryMapper = {
  // Keshav's categories
  Projects: ProjectCard,
  Skills: SkillsSection,
  Experience: CompanyCard,
  Education: EducationCard,
  Research: ResearchCard,
  Development: DevelopmentCard,
  Teamwork: TeamworkCard,
  Leadership: LeadershipCard,

  // Shulka's categories
  ArtProjects: ProjectCard,
  Exhibitions: ExhibitionCard,
  Workshops: WorkshopCard,

  // Shared categories
  Certifications: CertificationCard,
  Achievements: AchievementCard,
};

export const getCategoryComponent = (category) => {
  return categoryMapper[category] || GenericCard;
};
