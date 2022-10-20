import React, { Fragment } from "react";
import "./styles/main.css";
import "./styles/normalise.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home";

export default function App() {
  return (
    <Router>
      <Home exact path="/" />
    </Router>
  );
}
