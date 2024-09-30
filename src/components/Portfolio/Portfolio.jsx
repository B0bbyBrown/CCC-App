import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
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

const ProjectCard = ({ project }) => (
  <div className={styles.projectCard}>
    <h3>{project.name}</h3>
    <p>{project.description}</p>
    <p className={styles.projectDetail}>Role: {project.role}</p>
    <p className={styles.projectDetail}>Duration: {project.duration}</p>
    <div className={styles.techTags}>
      {project.technologies.map((tech, i) => (
        <span key={tech} className={styles.techTag}>
          {tech}
        </span>
      ))}
    </div>
    {project.achievements && (
      <div className={styles.achievements}>
        <h4>Achievements:</h4>
        <ul>
          {project.achievements.map((achievement, i) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const CompanyCard = ({ company }) => (
  <div className={styles.companyCard}>
    <h3>{company.name}</h3>
    <p>
      {company.role} | {company.years}
    </p>
    <div className={styles.skillTags}>
      {company.skills.map((skill, i) => (
        <span key={i} className={styles.skillTag}>
          {skill}
        </span>
      ))}
    </div>
    {company.responsibilities && (
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
  if (!data) return <p>No data available for this category.</p>;

  switch (category) {
    case "Projects":
      return (
        <div className={styles.projectsGrid}>
          {data.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      );
    case "Companies":
      return (
        <div className={styles.companiesList}>
          {data.map((company, index) => (
            <CompanyCard key={index} company={company} />
          ))}
        </div>
      );
    case "Skills":
      return <SkillsSection skills={data} />;
    case "Education":
      return (
        <div className={styles.educationList}>
          {data.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </div>
      );
    case "Certifications":
      return (
        <div className={styles.certificationsSection}>
          <ul>
            {data.map((cert, index) => (
              <li key={index}>
                {cert.name} ({cert.issuer}, {cert.year})
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return <p>No data available for this category.</p>;
  }
};

export const Portfolio = ({ data }) => {
  if (!data) return <div>Loading...</div>;

  const { name, title, summary, contact, socialMedia, categories } = data;
  const [activeTab, setActiveTab] = useState(Object.keys(categories)[0]);

  return (
    <div className={styles.portfolioContainer}>
      <header className={styles.portfolioHeader}>
        <h1>{name}</h1>
        {title && <p className={styles.title}>{title}</p>}
        {summary && <p className={styles.summary}>{summary}</p>}
        {socialMedia && (
          <div className={styles.socialLinks}>
            {Object.entries(socialMedia).map(([platform, url]) => (
              <SocialLink
                key={platform}
                url={url}
                platform={platform}
                icon={
                  platform === "linkedin"
                    ? FaLinkedin
                    : platform === "github"
                    ? FaGithub
                    : platform === "twitter"
                    ? FaTwitter
                    : null
                }
              />
            ))}
          </div>
        )}
      </header>

      {contact && (
        <div className={styles.contactInfo}>
          <h2>Contact Information</h2>
          <div className={styles.contactDetails}>
            {contact.email && (
              <ContactItem
                icon={FaEnvelope}
                text={contact.email}
                label="Email"
              />
            )}
            {contact.phone && (
              <ContactItem icon={FaPhone} text={contact.phone} label="Phone" />
            )}
            {contact.location && (
              <ContactItem
                icon={FaMapMarkerAlt}
                text={contact.location}
                label="Location"
              />
            )}
          </div>
        </div>
      )}

      {categories && (
        <nav className={styles.portfolioNav}>
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={activeTab === category ? styles.active : ""}
            >
              {category}
            </button>
          ))}
        </nav>
      )}

      <main className={styles.portfolioMain}>
        {categories && (
          <TabContent category={activeTab} data={categories[activeTab]} />
        )}
      </main>
    </div>
  );
};
