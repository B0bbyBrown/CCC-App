import React, { useEffect, useState } from "react";
import { fetchData } from "../../Utils/fetchData";
import { Projects } from "./components/Projects/Projects";
import { Clients } from "./components/ClientC/Clients";
import { Partnerships } from "./components/Partnerships/Partnerships";
import { Achievements } from "./components/Achievements/Achievements";
import { Goals } from "./components/Goals/Goals";
import styles from "./CompanyPortfolio.module.css";

export const CompanyPortfolio = () => {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState("projects");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      const result = await fetchData();
      if (result && result.companyData) {
        setData(result.companyData);
      }
      setIsLoading(false);
    }
    loadData();
  }, []);

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (!data) return <div className={styles.error}>Error loading data</div>;

  const { name, description, founded, location, employees, categories } = data;

  const renderActiveTab = () => {
    switch (activeTab) {
      case "projects":
        return <Projects projects={categories.Projects} />;
      case "clients":
        return <Clients clients={categories.Clients} />;
      case "partnerships":
        return <Partnerships partnerships={categories.Partnerships} />;
      case "achievements":
        return <Achievements achievements={categories.Achievements} />;
      case "goals":
        return <Goals goals={categories.Goals} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.gradientBackground} />
      <header className={styles.header}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.companyInfo}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Founded:</span>
            <span className={styles.infoValue}>{founded}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Location:</span>
            <span className={styles.infoValue}>{location}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Employees:</span>
            <span className={styles.infoValue}>{employees}</span>
          </div>
        </div>
      </header>

      <nav className={styles.tabNav}>
        {["projects", "clients", "partnerships", "achievements", "goals"].map(
          (tab) => (
            <button
              key={tab}
              className={`${styles.tabButton} ${
                activeTab === tab ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          )
        )}
      </nav>

      <main className={styles.content}>{renderActiveTab()}</main>
    </div>
  );
};
