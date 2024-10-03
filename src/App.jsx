import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home/Home";
import { CCC } from "./routes/Curious-Cat-Creative/Curious-Cat-Creative";
import { Keshav } from "./routes/Keshav/Keshav";
import { Shulka } from "./routes/Shulka/Shulka";
import { Error404 } from "./routes/404/Error404";
import { Exp } from "./routes/EXP/exp";

import "./App.css";

export const App = () => {
  return (
    <div className="app-container">
      <Router>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Curious-Cat-Creative" element={<CCC />} />
            <Route path="/Keshav" element={<Keshav />} />
            <Route path="/Shulka" element={<Shulka />} />
            <Route path="/Error404" element={<Error404 />} />
            <Route path="/exp" element={<Exp />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};
