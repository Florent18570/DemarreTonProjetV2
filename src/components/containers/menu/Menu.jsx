import React from "react";
import logo from "../../../Images/Logo.png";
import { FcMenu } from "react-icons/fc";
import { useState, useEffect } from "react";

const Menu = () => {

  const [isShown, setIsShown] = useState(false);

  var switchmenu = new Boolean(false);

  function menuchange() {
    switchmenu = !switchmenu;
    var navbutton = document.getElementsByClassName("Menu_mobile")[0];
    if (switchmenu) {
      //menu désactivé
      navbutton.classList.add("animation_horizontal_reverse");
      navbutton.classList.remove("animation_horizontal");
    } else {
      //menu activé
      navbutton.classList.add("animation_horizontal");
      navbutton.classList.remove("animation_horizontal_reverse");
    }
  }

  let lastSScroll = 0;

  window.addEventListener("scroll", () => {
    var menu = document.getElementsByClassName("Menu")[0];
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0 && menu.classList.contains("scroll-up")) {
      menu.classList.remove("scroll-up");
    }

    console.log(currentScroll);
    console.log("last", lastSScroll);
    if (
      currentScroll > lastSScroll &&
      !menu.classList.contains("scroll-down")
    ) {
      menu.classList.remove("scroll-up");
      menu.classList.add("scroll-down");
    }
    if (currentScroll < lastSScroll && menu.classList.contains("scroll-down")) {
      menu.classList.remove("scroll-down");
      menu.classList.add("scroll-up");
    }
    lastSScroll = currentScroll;
  });

  return (
    <div className="Menu scroll-up" onMouseLeave={() => setIsShown(false)}>
      <div className="Menu_ordi" >
        <div className="Menu_Ordi_partiegauche">
          <div className="Menu_Ordi_Partiegauche_image">
            <img className="Menu_Ordi_Partiegauche_Image_img" src={logo} />
          </div>
          <div className="Menu_Ordi_Partiegauche_menu">
            <a href="/" className="Menu_Ordi_Partiegauche_Menu_element">
              Acceuil
            </a>
            <a className="Menu_Ordi_Partiegauche_Menu_element smenu" 
            onMouseEnter={() => setIsShown(true)}
            
            onClick={() => setIsShown(true)}
            >
              Prestation
              

            </a>
            
            <a
              href="/allrealisation"
              className="Menu_Ordi_Partiegauche_Menu_element"
            >
              Réalisation
            </a>
            <a className="Menu_Ordi_Partiegauche_Menu_element">L'agence</a>
          </div>
          {isShown && (
              <div className="sousmenu">
                <a className="Menu_Ordi_Partiegauche_Menu_element">
                  Création de sites internet
                </a>
                <a className="Menu_Ordi_Partiegauche_Menu_element">
                  UX Design
                </a>
                <a className="Menu_Ordi_Partiegauche_Menu_element">
                  Référencement naturel
                </a>
                <a className="Menu_Ordi_Partiegauche_Menu_element">
                  Maintenance technique
                </a>
              </div>
              )}
        </div>
        <div className="Menu_Ordi_partiedroite">
          <a href="/devis" className="Header_button"> Demander un devis</a>
        </div>
        <div className="Menu_Mobile_button">
          <button className="Menu_Mobile_Button_btn" onClick={menuchange}>
            <FcMenu />
          </button>
        </div>
      </div>

      <div className="Menu_mobile">
        <nav className="Menu_Mobile_menu">
          <a href="/" className="Menu_Ordi_Partiegauche_Menu_element">
            Acceuil
          </a>
          <a className="Menu_Ordi_Partiegauche_Menu_element" onMouseEnter={() => setIsShown(true)}
            
            onBlur={() => setIsShown(false)}>Prestation</a>

          {isShown && (
              <div className="sousmenuphone">
                <a className="Menu_Ordi_Partiegauche_Menu_element">
                  Création de sites internet
                </a>
                <a className="Menu_Ordi_Partiegauche_Menu_element">
                  UX Design
                </a>
                <a className="Menu_Ordi_Partiegauche_Menu_element">
                  Référencement naturel
                </a>
                <a className="Menu_Ordi_Partiegauche_Menu_element">
                  Maintenance technique
                </a>
              </div>
              )}


          <a
            href="/allrealisation"
            className="Menu_Ordi_Partiegauche_Menu_element"
          >
            Réalisation
          </a>


          
          <a className="Menu_Ordi_Partiegauche_Menu_element">L'agence</a>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
