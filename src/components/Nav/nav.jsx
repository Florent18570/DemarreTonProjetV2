import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import { toast } from "react-toastify";

function register() {
  return (
    <nav>
      <header>
        <img src={logo} alt="logo Groupomania" />
        <nav>
          <Link to="/login">
            <button href="login.html" class="connexion login">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button href="inscription.html" class="connexion inscription">
              S'inscrire
            </button>
          </Link>
        </nav>
      </header>
    </nav>
  );
}

function deconnexion() {
  sessionStorage.clear();
  var deconnexionMessage = "A bientôt ! ";
  sessionStorage.setItem("deconnexionMessage", deconnexionMessage);
}

function login() {
  return (
    <nav>
      <header>
        <img src={logo} alt="logo Groupomania" />
        <nav>
          <Link to="/login">
            <button class="deconnexion" onClick={deconnexion}>
              Se déconnecter
            </button>
          </Link>
        </nav>
      </header>
    </nav>
  );
}

export default function registerOrLogin() {
  let data = sessionStorage.getItem("user");

  if (data) {
    return login();
  } else {
    return register();
  }
}
