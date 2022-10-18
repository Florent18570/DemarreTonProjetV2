import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/home";

function App() {
  return (
    <div className="App">
      {/* <Auth /> */}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
