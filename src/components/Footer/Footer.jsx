import "./Footer.css";

function Footer() {
  return (
    <div className="footerBody">
      <div className="left">
        <p>© 2024 | All Rights Reserved | Privacy Policy</p>
      </div>
      <div className="center">
        <a href="#">Home</a>
        <p className="spacer">|</p>
        <a href="#">About</a>
        <p className="spacer">|</p>
        <a href="#">Services</a>
        <p className="spacer">|</p>
        <a href="#">Projects</a>
        <p className="spacer">|</p>
        <a href="#">Contact</a>
      </div>
      <div className="right">
        <p>Designed by Nova Web Solutions</p>
      </div>
    </div>
  );
}

export { Footer };
