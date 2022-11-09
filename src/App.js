import React, { Fragment } from "react";
import "./styles/main.css";
import "./styles/normalise.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import Devis from "./pages/devis";
import Realisation from "./pages/realisation";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/devis" element={<Devis />} />
        <Route exact path="/realisation/:userId" element={<Realisation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
