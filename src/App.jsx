import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header_Footer/Header/Header";
import { Footer } from "./components/Header_Footer/Footer/Footer";
import { Home } from "./routes/Home/Home";
import { CCC } from "./routes/Curious-Cat-Creative/Curious-Cat-Creative";
import { Keshav } from "./routes/Keshav/Keshav";
import { Shulka } from "./routes/Shulka/Shulka";
import { Error404 } from "./routes/404/Error404";
import "./App.css";

export const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Curious-Cat-Creative" element={<CCC />} />
            <Route path="/Keshav" element={<Keshav />} />
            <Route path="/Shulka" element={<Shulka />} />
            <Route path="/Error404" element={<Error404 />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};
