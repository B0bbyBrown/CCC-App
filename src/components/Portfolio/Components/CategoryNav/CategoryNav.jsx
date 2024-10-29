import React from "react";
import { categoryIcons } from "../../utils/icons";
import styles from "./CategoryNav.module.css";

export const CategoryNav = ({ categories, activeTab, setActiveTab }) => {
  return (
    <nav className={styles.categoryNav}>
      {Object.keys(categories).map((category) => {
        const Icon = categoryIcons[category];
        return (
          <button
            key={category}
            className={`${styles.categoryButton} ${
              activeTab === category ? styles.active : ""
            }`}
            onClick={() => setActiveTab(category)}
          >
            {Icon && <Icon className={styles.icon} />}
            <span className={styles.label}>{category}</span>
          </button>
        );
      })}
    </nav>
  );
};
