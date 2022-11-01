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
          <p>Prestations</p>
        </a>
        <a className="navbar__links__a " href="#Réalisations">
          <p>Réalisations</p>
        </a>
        <a className="navbar__links__a devis" href="#Tarifs">
          <p>Faire un devis</p>
        </a>
        <a className="navbar__links__a " href="#L'agence">
          <p>L'agence</p>
        </a>
      </div>
      <div className="navbar__links__end">
        <a href="#contact">
          <p>Contact </p>
        </a>
      </div>
    </div>
  );
};

export default Header;
