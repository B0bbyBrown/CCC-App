import React, { useEffect, useState } from "react";
import { ProjectCard } from "./Components/Cards/ProjectCard/ProjectCard";
import { GenericCard } from "./Components/Cards/GenericCard/GenericCard";
import { TeamworkCard } from "./Components/Cards/TeamworkCard/TeamworkCard";
import { LeadershipCard } from "./Components/Cards/LeadershipCard/LeadershipCard";
import { DevelopmentCard } from "./Components/Cards/DevelopmentCard/DevelopmentCard";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { useTheme } from "../../context/ThemeContext";
import { colorThemes } from "../../config/colorThemes";
import styles from "./Portfolio.module.css";

// Icons for categories
import {
  FaProjectDiagram,
  FaTools,
  FaBriefcase,
  FaCode,
  FaUsers,
  FaCrown,
  FaGraduationCap,
  FaFlask,
  FaTrophy,
} from "react-icons/fa";

export const Portfolio = ({ data, portfolioType = "dark" }) => {
  const { theme, toggleTheme } = useTheme();
  const [activeCategory, setActiveCategory] = useState("Projects");

  // Define available categories and their icons
  const categoryIcons = {
    Projects: <FaProjectDiagram className={styles.categoryIcon} />,
    Skills: <FaTools className={styles.categoryIcon} />,
    Experience: <FaBriefcase className={styles.categoryIcon} />,
    Development: <FaCode className={styles.categoryIcon} />,
    Teamwork: <FaUsers className={styles.categoryIcon} />,
    Leadership: <FaCrown className={styles.categoryIcon} />,
    Education: <FaGraduationCap className={styles.categoryIcon} />,
    Research: <FaFlask className={styles.categoryIcon} />,
    Achievements: <FaTrophy className={styles.categoryIcon} />,
  };

  // Get available categories from data
  const availableCategories = Object.keys(data.categories || {});

  useEffect(() => {
    if (availableCategories.length > 0) {
      setActiveCategory(availableCategories[0]);
    }
  }, [data]);

  useEffect(() => {
    console.log("Portfolio mounted with data:", data);
    console.log("Portfolio type:", portfolioType);

    if (
      portfolioType === "light" &&
      theme.primary === colorThemes.dark.primary
    ) {
      console.log("Switching to light theme");
      toggleTheme();
    }
    if (
      portfolioType === "dark" &&
      theme.primary === colorThemes.light.primary
    ) {
      console.log("Switching to dark theme");
      toggleTheme();
    }
  }, [portfolioType, theme.primary, toggleTheme]);

  if (!data) {
    console.error("No data provided to Portfolio component");
    return <div>Error: No portfolio data available</div>;
  }

  console.log("Rendering portfolio with theme:", theme);

  const renderCategoryContent = (category) => {
    const categoryData = data.categories[category];

    switch (category) {
      case "Projects":
        return (
          <div className={styles.grid}>
            {categoryData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        );
      case "Skills":
        return <GenericCard data={categoryData} />;
      case "Experience":
        return (
          <div className={styles.grid}>
            {categoryData.map((exp, index) => (
              <GenericCard key={index} data={exp} />
            ))}
          </div>
        );
      case "Development":
        return <DevelopmentCard items={categoryData} />;
      case "Teamwork":
        return <TeamworkCard items={categoryData} />;
      case "Leadership":
        return <LeadershipCard items={categoryData} />;
      default:
        return <GenericCard data={categoryData} />;
    }
  };

  return (
    <div
      className={styles.portfolioContainer}
      style={{
        background: theme.primary,
        color: theme.text.primary,
      }}
    >
      <ThemeToggle />

      <header
        className={styles.header}
        style={{
          background: `linear-gradient(to bottom, ${theme.gradient.start}, ${theme.gradient.end})`,
        }}
      >
        <h1>{data.name}</h1>
        <h2>{data.title}</h2>
        <p>{data.summary}</p>
      </header>

      <nav className={styles.portfolioNav}>
        {availableCategories.map((category) => (
          <button
            key={category}
            className={`${styles.navButton} ${
              activeCategory === category ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(category)}
            style={{
              color:
                activeCategory === category
                  ? theme.accent
                  : theme.text.secondary,
              borderColor: theme.accent,
            }}
          >
            {categoryIcons[category]}
            {category}
          </button>
        ))}
      </nav>

      <section className={styles.content}>
        <div className={styles.categoryTitle}>
          {categoryIcons[activeCategory]}
          <h2>{activeCategory}</h2>
        </div>
        {renderCategoryContent(activeCategory)}
      </section>
    </div>
  );
};
