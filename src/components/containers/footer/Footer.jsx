import React from "react";
import { FaBeer } from "react-icons/fa";
import card_footer from "../../../Images/card_footer.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__left">
        <img src={card_footer} alt="card_footer" />
      </div>
      <div className="Footer__right"></div>
      <div className="Footer__right__devis">
        <p> Estimons le cout de votre projet </p>
        <button> Demander un devis </button>
      </div>
      <div className="Footer__right__link">
        <div className="Footer__right__link__container">
          <h3> Prestation </h3>
          <p> Site Internet </p>
          <p> Refonte de site</p>
        </div>
        <div className="Footer__right__link__container">
          <h3> Information </h3>
          <p> L'agence </p>
          <p> devis</p>
        </div>
        <div className="Footer__right__link__container">
          <h3> Prestation </h3>
          <p> Site Internet </p>
          <p> Refonte de site</p>
        </div>
      </div>
      <div className="Footer__right__link__horizontalBarre"></div>
      <div className="Footer__right__link__mentionLegal">
        <p> @2022 - DemarreTonProjet </p>
        <p> Mention légales </p>
        <p> Politique de Confidentialité </p>
      </div>
    </div>
  );
};

export default Footer;
