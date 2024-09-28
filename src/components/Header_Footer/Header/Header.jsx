import React from "react";
import { Logo } from "../Logo/logo";
import { Nav } from "../Nav/Nav";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.nav}>
        <Nav />
      </div>
    </header>
  );
};
