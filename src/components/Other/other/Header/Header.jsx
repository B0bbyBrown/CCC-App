import React from "react";
import { Nav } from "../Nav/Nav";
import { Logo } from "../Logo/Logo";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.nav}>
        <nav>
          <Nav />
        </nav>
      </div>
    </header>
  );
};
