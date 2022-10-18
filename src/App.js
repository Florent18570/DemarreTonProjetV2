import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home";

export default function App() {
  return (
    <Router>
      <Home exact path="/" />
    </Router>
  );
}
