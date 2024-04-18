import "/src/components/styles/Header.css";
import { Nav } from "/src/components/Nav";
import { LightDark } from "/src/components/LightDark";
import { ContactCTA } from "/src/components/ContactCTA";

function Header() {
  return (
    <>
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
    </>
  );
}

export { Header };
