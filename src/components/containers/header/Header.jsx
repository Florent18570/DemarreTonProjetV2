import React from "react";
import logo from "../../../Images/Logo.png";

const Header = () => {
  return (
    <header className="navbar">
      <img className="navbar__logo" src={logo} alt="logo" />

      <nav>
        <ul className="navbar__links">
          <li>
            <a href="#Accueil">Accueil</a>
          </li>
          <li>
            <a href="#Prestations"> Prestations</a>
          </li>
          <li>
            <a href="#Réalisations"> Réalisations</a>
          </li>
          <li>
            <a href="#Devis"> Faire un devis</a>
          </li>
          <li>
            <a href="#L'agence"> L'agence</a>
          </li>
        </ul>
      </nav>
      <a class="cta" href="#Contact">
        <button>Contact</button>
      </a>
    </header>
  );
};

export default Header;
