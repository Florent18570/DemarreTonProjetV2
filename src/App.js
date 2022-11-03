import React, { Fragment } from "react";
import "./styles/main.css";
import "./styles/normalise.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notfound"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<NotFound/>} />
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}
