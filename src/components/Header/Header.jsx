import "/src/components/Header/Header.css";
import { Nav } from "/src/components/Nav/Nav";
import { LightDark } from "/src/components/Light-Dark/LightDark";
import { ContactCTA } from "/src/components/Contact/ContactCTA";

function Header() {
  return (
    <div className="headerMain">
      <div className="headerBody">
        <div className="name">
          <h1 className="siteName" href="#">
            CCC inc
          </h1>
        </div>

        <div className="nav">
          <Nav />
        </div>

        <div className="darkLight">
          <LightDark />
        </div>

        <div className="contactCTA">
          <ContactCTA />
        </div>
      </div>
    </div>
  );
}

export { Header };
