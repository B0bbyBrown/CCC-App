import React from "react";
import { Logo } from "../Header/Logo/logo";
import { Nav } from "../Header/Nav/Nav";
import "./Header.module.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Logo />
      </div>
      <div className="nav">
        <Nav />
      </div>
    </header>
  );
};
