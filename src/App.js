import React, { Fragment } from "react";
import "./index.css";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home";

export default function App() {
  return (
    <Router>
      <Home exact path="/" />
    </Router>
  );
}
