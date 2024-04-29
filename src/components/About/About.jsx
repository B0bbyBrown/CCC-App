import "/src/components/About/About.css";
import { AboutH } from "/src/components/About/Header/AboutH.jsx";
import { AboutB } from "/src/components/About/Body/AboutB.jsx";

function About() {
  return (
    <>
      <div className="about">
        <div className="aH" id="about">
          <AboutH />
        </div>
        <div className="aB">
          <AboutB />
        </div>
      </div>
    </>
  );
}

export { About };
