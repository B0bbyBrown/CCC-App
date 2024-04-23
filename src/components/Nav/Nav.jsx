import "/src/components/Nav/Nav.css";
import { NavItem } from "./NavItem";

function Nav() {
  return (
    <ol className="nav">
      <NavItem linkText="Home" link="#home" />
      <li className="nav-item">
        <a href="#home">Home</a>
      </li>
      <li className="nav-item">
        <a href="#projects">Projects</a>
      </li>
      <li className="nav-item">
        <a href="#about">About</a>
      </li>
      <li className="nav-item">
        <a href="#contact">Contact</a>
      </li>
    </ol>
  );
}

export { Nav };
