import React from "react";
import logo from "../../../Images/Logo.png";
import { FcMenu } from "react-icons/fc";

const Menu = () => {

    var switchmenu = new Boolean(false);
    
    function menuchange(){
        switchmenu = !switchmenu;
        if(switchmenu){
            //menu désactivé
            document.getElementsByClassName("Menu_mobile")[0].style.visibility = "hidden"; 
            document.getElementsByClassName("Menu_mobile")[0].style.opacity = "0"; 
            
        }else{
            //menu activé
            document.getElementsByClassName("Menu_mobile")[0].style.visibility = "visible"; 
            document.getElementsByClassName("Menu_mobile")[0].style.opacity = "1"; 

        }
    }

  return (
    <div className="Menu">
        <div className="Menu_ordi">
            <div className="Menu_Ordi_partiegauche">
                <div className="Menu_Ordi_Partiegauche_image">
                    <img className="Menu_Ordi_Partiegauche_Image_img" src={logo} />
                </div>
                <div className="Menu_Ordi_Partiegauche_menu">
                    <a className="Menu_Ordi_Partiegauche_Menu_element">Acceuil</a>
                    <a className="Menu_Ordi_Partiegauche_Menu_element">Prestation</a>
                    <a className="Menu_Ordi_Partiegauche_Menu_element">Réalisation</a>
                    <a className="Menu_Ordi_Partiegauche_Menu_element">L'agence</a>
                </div>
            </div>
            <div className="Menu_Ordi_partiedroite">
                <button className="Header_button"> Demander un devis</button>
            </div>
            <div className="Menu_Mobile_button">
                <button className="Menu_Mobile_Button_btn" onClick={menuchange}><FcMenu/></button>
            </div>
        </div>

        <div className="Menu_mobile">
            <nav className="Menu_Mobile_menu">
                <a className="Menu_Ordi_Partiegauche_Menu_element">Acceuil</a>
                <a className="Menu_Ordi_Partiegauche_Menu_element">Prestation</a>
                <a className="Menu_Ordi_Partiegauche_Menu_element">Réalisation</a>
                <a className="Menu_Ordi_Partiegauche_Menu_element">L'agence</a>
            </nav>
        </div>
      
    </div>
  );
};

export default Menu;
