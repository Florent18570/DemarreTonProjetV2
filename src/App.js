import React, { Fragment } from "react";
import "./styles/main.css";
import "./styles/normalise.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import Devis from "./pages/devis";
import Realisation from "./pages/realisation";
import Allrealisation from "./pages/allrealisation";
import PrestationSpe from "./pages/prestationspe";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/devis" element={<Devis />} />
        <Route exact path="/allrealisation" element={<Allrealisation />} />
        <Route exact path="/realisation/:userId" element={<Realisation />} />
        <Route exact path="/prestation/:prestation" element={<PrestationSpe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
