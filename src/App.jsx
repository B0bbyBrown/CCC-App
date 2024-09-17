import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThreeDSpiderDiagram } from "./components/Diagram/ThreeDSpiderDiagram";
import { Header } from "./components/Header/Header";
import { CuriousCatCreative } from "./routes/Curious-Cat-Creative/Curious-Cat-Creative";
import { Keshav } from "./routes/Keshav/Keshav";
import { Shulka } from "./routes/Shulka/Shulka";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ThreeDSpiderDiagram />} />
        <Route path="/Curious-Cat-Creative" element={<CuriousCatCreative />} />
        <Route path="/Keshav" element={<Keshav />} />
        <Route path="/Shulka" element={<Shulka />} />
      </Routes>
    </Router>
  );
};

export default App;
