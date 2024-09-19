import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ThreeDSpiderDiagram } from "./components/Diagram/ThreeDSpiderDiagram";
import { CuriousCatCreative } from "./routes/Curious-Cat-Creative/Curious-Cat-Creative";
import { Keshav } from "./routes/Keshav/Keshav";
import { Shulka } from "./routes/Shulka/Shulka";
import { Scene } from "./components/Shaders/BackDrop/Scene";
import "./App.css";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* {<Scene />} */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <ThreeDSpiderDiagram />
              </div>
            </>
          }
        />
        <Route path="/Curious-Cat-Creative" element={<CuriousCatCreative />} />
        <Route path="/Keshav" element={<Keshav />} />
        <Route path="/Shulka" element={<Shulka />} />
      </Routes>
    </Router>
  );
};

export default App;
