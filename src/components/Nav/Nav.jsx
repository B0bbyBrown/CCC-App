import "/src/components/Nav/Nav.css";

function Nav() {
  return (
    <ol className="nav">
      <li>
        <a href="#about" className="nav-item">
          About
        </a>
      </li>
      <li>
        <a href="#services" className="nav-item">
          Services
        </a>
      </li>
      <li>
        <a href="#case-studies" className="nav-item">
          Case Studies
        </a>
      </li>
      <li>
        <a href="#contact" className="nav-item">
          Contact
        </a>
      </li>
    </ol>
  );
}

export { Nav };
