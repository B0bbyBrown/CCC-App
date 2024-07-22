import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThreeDSpiderDiagram } from "./components/Diagram/ThreeDSpiderDiagram";
import { Nav } from "./components/Nav/Nav";
import { CuriousCatCreative } from "./routes/Curious-Cat-Creative/Curious-Cat-Creative";
import { Keshav } from "./routes/Keshav/Keshav";
import { Shulka } from "./routes/Shulka/Shulka";

export const App = () => {
  return (
    <Router>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ThreeDSpiderDiagram />
                <Nav /> {/* Add the Nav component to the home page */}
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

export default App;
