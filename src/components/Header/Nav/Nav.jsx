import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const navLinks = {
  "/Curious-Cat-Creative": "Curious Cat Creative",
  "/Keshav": "Keshav",
  "/Shulka": "Shulka",
};

export const Nav = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.navList}>
        {Object.keys(navLinks).map((path, index) => (
          <li
            key={index}
            className={`${styles.navItem} ${styles[`item${index}`]}`}
          >
            <Link to={path} className={styles.link}>
              <div className={styles.sphere}>
                <span className={styles.navText}>{navLinks[path]}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
