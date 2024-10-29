import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./ThemeToggle.module.css";

export const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};
