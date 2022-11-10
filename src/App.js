import React from "react";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Home from "./components/accueil";
import Login from "./components/authentification/login";
import Register from "./components/authentification/register";
import Navbar from "./components/Nav/nav";
// import Auth from "./components/authentification/auth";
import NewPost from "./components/newPost";
import Modifier_post from "./components/modifier_post";
import Delete_post from "./components/delete_post";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/new_Post" element={<NewPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/*" element={<Register />} />
        <Route path="/modifier_post" element={<Modifier_post />} />
        {/* <Route path="/delete_post" element={<Delete_post />} /> */}
      </Routes>
    </div>
  );
}

export default App;
