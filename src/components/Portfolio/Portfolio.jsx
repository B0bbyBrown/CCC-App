import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaSearch,
  FaCode,
  FaUsers,
  FaTrophy,
  FaGraduationCap,
  FaBriefcase,
  FaTools,
  FaProjectDiagram,
  FaCertificate,
  FaBehance,
  FaInstagram,
  FaDribbble,
  FaLink,
  FaPalette,
  FaTheaterMasks,
  FaHandshake,
  FaChalkboardTeacher,
  FaBook,
} from "react-icons/fa";
import styles from "./Portfolio.module.css";

const SocialLink = ({ url, icon: Icon, platform }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.socialLink}
    aria-label={`${platform} profile`}
  >
    <Icon />
  </a>
);

const ContactItem = ({ icon: Icon, text, label }) => (
  <div className={styles.contactItem}>
    <Icon aria-hidden="true" />
    <span>{text}</span>
  </div>
);

const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <div className={styles.projectCard}>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>Duration: {project.duration}</p>
      <p>Role: {project.role}</p>
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
      {project.techniques && (
        <div className={styles.techniques}>
          <h4>Techniques:</h4>
          <ul>
            {project.techniques.map((technique, index) => (
              <li key={index}>{technique}</li>
            ))}
          </ul>
        </div>
      )}
      {project.achievements && (
        <div className={styles.achievements}>
          <h4>Achievements:</h4>
          <ul>
            {project.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const CompanyCard = ({ company }) => (
  <div className={styles.companyCard}>
    <h3>{company.name}</h3>
    <p>
      {company.role} | {company.years}
    </p>
    {company.skills && Array.isArray(company.skills) && (
      <div className={styles.skillTags}>
        {company.skills.map((skill, i) => (
          <span key={i} className={styles.skillTag}>
            {skill}
          </span>
        ))}
      </div>
    )}
    {company.responsibilities && Array.isArray(company.responsibilities) && (
      <div className={styles.responsibilities}>
        <h4>Responsibilities:</h4>
        <ul>
          {company.responsibilities.map((resp, i) => (
            <li key={i}>{resp}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const SkillsSection = ({ skills }) => (
  <div className={styles.skillsSection}>
    {Object.entries(skills).map(([skillType, skillList]) => (
      <div key={skillType} className={styles.skillsGroup}>
        <h3>{skillType.replace(/([A-Z])/g, " $1").trim()}</h3>
        <div className={styles.skillTags}>
          {skillList.map((skill, index) => (
            <span
              key={index}
              className={`${styles.skillTag} ${
                styles[skillType.toLowerCase()]
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const EducationCard = ({ education }) => (
  <div className={styles.educationCard}>
    <h3>{education.degree}</h3>
    <p>
      {education.institution}, {education.graduationYear}
    </p>
    {education.achievements && (
      <div className={styles.achievements}>
        <h4>Achievements:</h4>
        <ul>
          {education.achievements.map((achievement, i) => (
            <li key={i}>{achievement}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const TabContent = ({ category, data }) => {
  if (!data || (Array.isArray(data) && data.length === 0)) {
    return (
      <div className={styles.noData}>No data available for this category</div>
    );
  }

  const Icon = categoryIcons[category] || null;

  return (
    <div className={styles.tabContent}>
      <h2 className={styles.categoryTitle}>
        {Icon && <Icon className={styles.categoryIcon} />}
        {category}
      </h2>
      {(() => {
        switch (category) {
          case "Projects":
          case "ArtProjects":
            return (
              <div className={styles.projectsGrid}>
                {data.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            );
          case "Skills":
            return <SkillsSection skills={data} />;
          case "Experience":
            return (
              <div className={styles.companiesList}>
                {data.map((experience, index) => (
                  <CompanyCard key={index} company={experience} />
                ))}
              </div>
            );
          case "Education":
            return (
              <div className={styles.educationList}>
                {data.map((edu, index) => (
                  <EducationCard key={index} education={edu} />
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
                  <CollaborationCard
                    key={index}
                    collaboration={collaboration}
                  />
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
          case "Certifications":
            return (
              <div className={styles.certificationsList}>
                {data.map((certification, index) => (
                  <CertificationCard
                    key={index}
                    certification={certification}
                  />
                ))}
              </div>
            );
          default:
            return (
              <div className={styles.genericList}>
                {Array.isArray(data) ? (
                  data.map((item, index) => (
                    <div key={index} className={styles.genericItem}>
                      {typeof item === "object" ? JSON.stringify(item) : item}
                    </div>
                  ))
                ) : (
                  <div className={styles.genericItem}>
                    {JSON.stringify(data)}
                  </div>
                )}
              </div>
            );
        }
      })()}
    </div>
  );
};

// New card components for Shulka's unique categories
const ExhibitionCard = ({ exhibition }) => (
  <div className={styles.exhibitionCard}>
    <h3>{exhibition.name}</h3>
    <p>{exhibition.venue}</p>
    <p>{exhibition.year}</p>
    {exhibition.description && <p>{exhibition.description}</p>}
  </div>
);

const CollaborationCard = ({ collaboration }) => (
  <div className={styles.collaborationCard}>
    <h3>{collaboration.project}</h3>
    <p>Client: {collaboration.client}</p>
    <p>Year: {collaboration.year}</p>
    {collaboration.description && <p>{collaboration.description}</p>}
  </div>
);

const WorkshopCard = ({ workshop }) => (
  <div className={styles.workshopCard}>
    <h3>{workshop.name}</h3>
    <p>Venue: {workshop.venue}</p>
    <p>Year: {workshop.year}</p>
    {workshop.description && <p>{workshop.description}</p>}
  </div>
);

const PublicationCard = ({ publication }) => (
  <div className={styles.publicationCard}>
    <h3>{publication.title}</h3>
    <p>Publisher: {publication.publisher}</p>
    <p>Year: {publication.year}</p>
    {publication.description && <p>{publication.description}</p>}
  </div>
);

const AchievementCard = ({ achievement }) => {
  if (typeof achievement === "string") {
    return (
      <div className={styles.achievementCard}>
        <p>{achievement}</p>
      </div>
    );
  }

  return (
    <div className={styles.achievementCard}>
      <h3>{achievement.title}</h3>
      {achievement.date && <p>Date: {achievement.date}</p>}
      {achievement.description && <p>{achievement.description}</p>}
      {achievement.issuer && <p>Issuer: {achievement.issuer}</p>}
    </div>
  );
};

const CertificationCard = ({ certification }) => (
  <div className={styles.certificationCard}>
    <h3>{certification.name}</h3>
    <p>Issuer: {certification.issuer}</p>
    <p>Year: {certification.year}</p>
  </div>
);

const categoryIcons = {
  Projects: FaProjectDiagram,
  Skills: FaTools,
  Experience: FaBriefcase,
  Education: FaGraduationCap,
  Certifications: FaCertificate,
  Achievements: FaTrophy,
  Research: FaSearch,
  Development: FaCode,
  Teamwork: FaUsers,
  Leadership: FaUsers,
  ArtProjects: FaPalette,
  Exhibitions: FaTheaterMasks,
  Collaborations: FaHandshake,
  Workshops: FaChalkboardTeacher,
  Publications: FaBook,
};

const socialIcons = {
  instagram: FaInstagram,
  behance: FaBehance,
  dribbble: FaDribbble,
  linkedin: FaLinkedin,
  github: FaGithub,
  twitter: FaTwitter,
};

export const Portfolio = ({ data }) => {
  console.log(
    "Portfolio component received data:",
    JSON.stringify(data, null, 2)
  );

  if (!data) {
    console.log("No data received in Portfolio component");
    return <div>No data available</div>;
  }

  const { name, title, summary, contact, socialMedia, categories } = data;
  console.log("Destructured data:", {
    name,
    title,
    summary,
    contact,
    socialMedia,
    categories: Object.keys(categories),
  });

  // Check if required data is present
  if (!name || !title || !summary || !contact || !socialMedia || !categories) {
    console.error("Missing required data in Portfolio component");
    return <div>Error: Incomplete data</div>;
  }

  // Initialize activeTab with the first category if categories exist, otherwise use an empty string
  const [activeTab, setActiveTab] = useState(
    categories ? Object.keys(categories)[0] : ""
  );

  return (
    <div className={styles.portfolioContainer}>
      <header className={styles.portfolioHeader}>
        <h1>{name}</h1>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.socialLinks}>
          {Object.entries(data.socialMedia).map(([platform, url]) => {
            const Icon = socialIcons[platform];
            return Icon ? (
              <SocialLink
                key={platform}
                url={url}
                icon={Icon}
                platform={platform}
              />
            ) : null;
          })}
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <FaEnvelope />
            <span>{contact.email}</span>
          </div>
          <div className={styles.contactItem}>
            <FaPhone />
            <span>{contact.phone}</span>
          </div>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt />
            <span>{contact.location}</span>
          </div>
        </div>
      </header>

      {categories && (
        <>
          <nav className={styles.portfolioNav}>
            {Object.keys(categories).map((category) => {
              const Icon = categoryIcons[category] || null;
              return (
                <button
                  key={category}
                  className={activeTab === category ? styles.active : ""}
                  onClick={() => setActiveTab(category)}
                >
                  {Icon && <Icon className={styles.categoryIcon} />}
                  {category}
                </button>
              );
            })}
          </nav>

          <section className={styles.portfolioContent}>
            <TabContent category={activeTab} data={categories[activeTab]} />
          </section>
        </>
      )}
    </div>
  );
};
