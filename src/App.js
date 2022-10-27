import React from "react";
import { Routes, Route } from "react-router-dom";
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
      {/* <Auth /> */}

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
        <Route path="P7_Openclassroom/" element={<Login />} />
        <Route path="P7_Openclassroom/accueil" element={<Home />} />
        <Route path="P7_Openclassroom/new_Post" element={<NewPost />} />
        <Route path="P7_Openclassroom/login" element={<Login />} />
        <Route path="P7_Openclassroom/register/*" element={<Register />} />
        <Route
          path="P7_Openclassroom/modifier_post"
          element={<Modifier_post />}
        />
        {/* <Route path="/delete_post" element={<Delete_post />} /> */}
      </Routes>
    </div>
  );
}

export default App;
