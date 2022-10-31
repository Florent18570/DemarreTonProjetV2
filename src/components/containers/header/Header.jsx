import React from "react";
import logo from "../../../Images/Logo.png";

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <img className="navbar__links__logo" src={logo} alt="logo" />
        <a className="navbar__links__a" href="#Accueil">
          Accueil
        </a>
        <a className="navbar__links__a" href="#Prestations">
          Prestations
        </a>
        <a className="navbar__links__a " href="#Réalisations">
          Réalisations
        </a>
        <a className="navbar__links__a devis" href="#Tarifs">
          Faire un devis
        </a>
        <a className="navbar__links__a " href="#L'agence">
          L'agence
        </a>
      </div>
      <div className="navbar__links__end">
        <a href="#contact">Contact</a>
        <button className="navbar__links__end__button" type="button">
          <a href="tel:0762068830">07 62 06 88 30</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
