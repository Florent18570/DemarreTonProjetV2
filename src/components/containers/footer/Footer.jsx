import React from "react";
import card_footer from "../../../Images/card_footer.webp";

import instagram from "../../../Images/instagram.webp";
import twitter from "../../../Images/twitter.webp";
import facebook from "../../../Images/facebook.webp";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="Footer__left">
          <img src={card_footer} alt="card_footer" />
          <div className="info__footer">
            <div className="info__footer__div p1">
              <a href="tel:0667632587" ><h3> Téléphone </h3></a>
              <p> 07 62 06 88 30</p>
            </div>
            <div className="info__footer__div__border"></div>
            <div className="info__footer__div p2">
              <h3> Adresse mail </h3>
              <p> DemarreTonProjet@gmail.com</p>
            </div>
            <div className="info__footer__div__border p3"></div>
            <div className="info__footer__div p3">
              <img src={instagram} alt="instagram logo" />
              <img src={twitter} alt="twitter" />
              <img src={facebook} alt="facebook" />
            </div>
          </div>
        </div>
        <div className="reseau">
          <img src={instagram} alt="instagram logo" />
          <img src={twitter} alt="twitter" />
          <img src={facebook} alt="facebook" />
        </div>

        <div className="Footer__right">
          <div className="Footer__right__devis">
          <a href="../devis"><p> Estimons le cout de votre projet  </p></a>  
          <a href="../devis"><button> Demander un devis </button></a>
          </div>

          <div className="Footer__right__link">
            <div className="Footer__right__link__container">
              <h3> Prestation </h3>
              <a href="../prestation/creation"><p>  Site Internet </p></a>
              <a href="../prestation/uxdesign"><p> UX Design </p></a>
            </div>
            <div className="Footer__right__link__container ">
              <h3> Information </h3>
              <p> L'agence </p>
              <a href="../devis"><p> Devis </p></a>  
            </div>
            <div className="Footer__right__link__container">
              <h3> Prestation </h3>
              <a href="../prestation/referencement"><p> Référencement </p></a>
              <a href="../prestation/maintenance"><p> Maintenance </p></a>   
            </div>
          </div>
          <div className="Footer__right__link__horizontalBarre"></div>
          <div className="Footer__right__link__mentionLegal">
            <p> @2022 - DemarreTonProjet </p>
            <div>
              <p> Mention légales </p>
              <p> Politique de Confidentialité </p>
              <a href="/images/Conditions-Generales.pdf">
                <p>CGV </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
