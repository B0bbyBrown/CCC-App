import React, { useState } from "react";
import { ProfileHeader } from "./Components/ProfileHeader/ProfileHeader";
import { TabContent } from "./Components/TabContent/TabContent";
import { categoryIcons } from "./utils/icons";
import styles from "./Portfolio.module.css";

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

  if (!name || !title || !summary || !contact || !socialMedia || !categories) {
    console.error("Missing required data in Portfolio component");
    return <div>Error: Incomplete data</div>;
  }

  const [activeTab, setActiveTab] = useState(
    categories ? Object.keys(categories)[0] : ""
  );

  return (
    <div className={styles.portfolioContainer}>
      <ProfileHeader
        name={name}
        title={title}
        summary={summary}
        socialMedia={socialMedia}
        contact={contact}
      />

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
