import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Scene } from "./components/Shaders/Background";
import { ThreeDSpiderDiagram } from "./components/Diagram/ThreeDSpiderDiagram";
import { MindMap } from "./components/Diagram/Components/mindMapFld/MindMap";
import CompanyPage from "./routes/CompanyPage";
import Individual1Page from "./routes/Individual1Page";
import Individual2Page from "./routes/Individual2Page";

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
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/individual1" element={<Individual1Page />} />
          <Route path="/individual2" element={<Individual2Page />} />
        </Routes>
      </div>
    </Router>
  );
};
