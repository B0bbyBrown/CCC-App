import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Scene } from "./components/Shaders/Background";
import { ThreeDSpiderDiagram } from "./components/Diagram/ThreeDSpiderDiagram";
import { MindMap } from "./components/mindMapFld/MindMap";
import { CuriousCatCreative } from "./routes/Curious-Cat-Creative/Curious-Cat-Creative";
import { KeshavInfo } from "./routes/Keshav/Keshav_info";
import { ShulkaInfo } from "./routes/Shulka/Shulka_info";

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
          <Route path="/KeshavInfo" element={<KeshavInfo />} />
          <Route path="/ShulkaInfo" element={<ShulkaInfo />} />
        </Routes>
      </div>
    </Router>
  );
};
