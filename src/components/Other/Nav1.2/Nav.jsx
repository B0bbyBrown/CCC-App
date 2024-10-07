import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";

const navLinks = {
  "/Curious-Cat-Creative": "Curious Cat Creative",
  "/Keshav": "Keshav",
  "/Shulka": "Shulka",
};

export const Nav = () => {
  const location = useLocation();
  const links = Object.keys(navLinks);

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {links.map((path, index) => (
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
      </nav>
    </div>
  );
};
