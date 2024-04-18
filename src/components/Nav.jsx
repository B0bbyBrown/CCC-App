import "/src/components/styles/Nav.css";

function Nav() {
  return (
    <ol className="nav">
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
