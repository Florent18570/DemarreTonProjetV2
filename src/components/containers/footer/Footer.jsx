import React from "react";
import { FaBeer  } from "react-icons/fa";

const Footer = () => {
  return <div className="Footer">
    <div className="Footer_Bloc_devis">
      <p className="Footer_confier">Confiez-nous vos besoins, laissez-vous guider par nos experts et travaillons ensemble sur la réussite de vos projets </p>
      <button className="Footer_Button_devis">Demander un devis</button>
    </div>

    <div className="Footer_Bloc_presta">
      <div className="Footer_presta">
        <h3 className="Footer_H3">Prestations</h3>
        <li className="Footer_li Footer_li_SiteInternet ">Refonte de site</li>
        <li className="Footer_li Footer_li_Refonte">Site Internet</li>
      </div>
      <div className="Footer_presta">
        <h3 className="Footer_H3">Informations</h3>
        <li className="Footer_li Footer_li_Agence">L'agence</li>
        <li className="Footer_li Footer_li_Devis  ">Devis</li>
      </div>
      <div className="Footer_presta">
        <h3 className="Footer_H3">Nous contacter</h3>
        <li className="Footer_li Footer_li_Enveloppe">Contactez-nous</li>
        <img className="Footer_li"></img><FaBeer />
      </div>
    </div>

    <div className="Footer_Bloc_footer">
      <p className="Footer_Bloc_Footer_p">Mentions légales</p>
      <p className="Footer_Bloc_Footer_p">@ 2022 - DemarreTonProjet</p>
      <p className="Footer_Bloc_Footer_p">Politique de confidientialité</p>
    </div>


  </div>;
};

export default Footer;
