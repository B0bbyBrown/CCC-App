import React from "react";
import { getCategoryComponent } from "../../utils/categoryMapper";
import styles from "./TabContent.module.css";

export const TabContent = ({ category, content }) => {
  console.log(`TabContent rendering for category: ${category}`, content);

  if (!content) return null;

  const CategoryComponent = getCategoryComponent(category);

  return (
    <div className={styles.tabContent}>
      {Array.isArray(content) ? (
        content.map((item, index) => {
          console.log(`Rendering item ${index} for ${category}:`, item);
          return <CategoryComponent key={index} data={item} />;
        })
      ) : (
        <CategoryComponent data={content} />
      )}
    </div>
  );
};
