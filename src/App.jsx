import React from "react";
import "/src/App.css";
import { Scene } from "./components/Shaders/Background";

import {
  Header,
  Hero,
  About,
  Services,
  // CaseStudies,
  // Contact,
  Footer,
} from "/src/components/MainExport";
import ThreeDSpiderDiagram from "./components/Diagram/ThreeDSpiderDiagram";
import { ErrorBoundary } from "./components/Diagram/ErrorBoundary";

function App() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <Scene />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* <Header />
        <Hero />
        <About />
        <Services /> */}

        <ErrorBoundary>
          <ThreeDSpiderDiagram />
        </ErrorBoundary>

        {/* <CaseStudies />
        <Contact /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export { App };
