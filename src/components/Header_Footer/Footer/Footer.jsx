import React from "react";
import styles from "./Footer.module.css"; // Use CSS module

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>© 2024 Curious Cat Creative. All rights reserved.</p>
        <div className={styles.socialIcons}>
          <a href="#">Facebook</a> | <a href="#">Twitter</a> |{" "}
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};
