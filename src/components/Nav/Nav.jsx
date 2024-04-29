import "/src/components/Nav/Nav.css";

function Nav() {
  return (
    <ol className="nav">
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ol>
  );
}

export { Nav };
