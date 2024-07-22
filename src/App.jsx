import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Scene } from "./components/Shaders/Background";
import { ThreeDSpiderDiagram } from "./components/Diagram/ThreeDSpiderDiagram";
import { MindMap } from "./components/MindMap/MindMap";
import { CuriousCatCreative } from "./routes/Curious-Cat-Creative/Curious-Cat-Creative";
import { Keshav } from "./routes/Keshav/Keshav";
import { Shulka } from "./routes/Shulka/Shulka";

export const App = () => {
  return (
    <Router>
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
        {/* <Scene /> */}
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ThreeDSpiderDiagram />
                <MindMap />
              </>
            }
          />
          <Route
            path="/Curious-Cat-Creative"
            element={<CuriousCatCreative />}
          />
          <Route path="/Keshav" element={<Keshav />} />
          <Route path="/Shulka" element={<Shulka />} />
        </Routes>
      </div>
    </Router>
  );
};
