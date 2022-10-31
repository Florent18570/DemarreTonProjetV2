import React from "react";

const Footer = () => {
  return <div className="Footer">
    <div className="Footer_Bloc_devis">
      <p className="Footer_confier">Confiez-nous vos besoins, laissez-vous guider par nos experts et travaillons ensemble sur la réussite de vos projets </p>
      <button className="Footer_Button_devis">Demander un devis ></button>
    </div>

    <div className="Footer_Bloc_presta">
      <div className="Footer_presta">
        <h3 className="Footer_H3">Prestations :</h3>
        <li className="Footer_li">Refonte de site</li>
        <li className="Footer_li">Site Internet</li>
      </div>
      <div className="Footer_presta">
        <h3 className="Footer_H3">Informations :</h3>
        <li className="Footer_li">L'agence</li>
        <li className="Footer_li">Devis</li>
      </div>
      <div className="Footer_presta">
        <h3 className="Footer_H3">Nous contacter :</h3>
        <li className="Footer_li">Contactez-nous</li>
        <li className="Footer_li">Insta / Tweeter / Fb</li>
      </div>
    </div>

    <div className="Footer_Bloc_footer">
      <p>@ 2022 - DemarreTonProjet</p>
      <div>
        <a>Mentions légales</a>
        <a>Politique de confidientialité</a>
      </div>
    </div>


  </div>;
};

export default Footer;
