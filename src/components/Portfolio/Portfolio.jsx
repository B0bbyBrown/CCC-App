import React, { useState, useEffect } from "react";
import { ProfileHeader } from "./Components/ProfileHeader/ProfileHeader";
import { CategoryNav } from "./Components/CategoryNav/CategoryNav";
import { TabContent } from "./Components/TabContent/TabContent";
import { ThemeToggle } from "./Components/ThemeToggle/ThemeToggle";
import styles from "./Portfolio.module.css";

export const Portfolio = ({ data, customStyles }) => {
  const [activeTab, setActiveTab] = useState("ArtProjects");
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    // Initialize theme
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  if (!data) return null;

  const { name, title, summary, contact, socialMedia, categories } = data;

  return (
    <div className={`${styles.portfolioContainer} ${customStyles}`}>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <ProfileHeader
        name={name}
        title={title}
        summary={summary}
        contact={contact}
        socialMedia={socialMedia}
      />
      <CategoryNav
        categories={categories}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabContent category={activeTab} content={categories[activeTab]} />
    </div>
  );
};
