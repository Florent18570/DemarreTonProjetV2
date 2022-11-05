import React, { useState } from "react";
import logo from "../../../Images/Logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => {
  return (
    <>
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
        <button>Con</button>
      </a>
    </>
  );
};

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="navbar">
      <div className="pc">
        <img className="navbar__logo" src={logo} alt="logo" />
        <Menu />
      </div>

      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {console.log(toggleMenu)}
        <img className="navbar-menu_logo" src={logo} alt="logo" />
        {toggleMenu && (
          <div className="navbar-menu__container scale-up-center">
            <div className="navbar-menu__container__links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
