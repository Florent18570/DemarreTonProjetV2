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

    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Calque_1" x="0px"
     y="0px" viewBox="0 0 1300 550" space="preserve">


    <path class="st1" d="M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250">
		<animate
                attributeName="d"
                dur="10s"
				begin="1s"
                values="M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250;
                M 0 250 C 600 100 650 450 1300 250 L 1300 550 L 0 550 L 0 250;
				M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250"
                repeatCount="indefinite"
        />
	</path>

	<path class="st1" d="M 0 250 C 600 100 650 450 1300 250 L 1300 550 L 0 550 L 0 250">
		<animate
                attributeName="d"
                dur="15s"
                values="M 0 250 C 600 100 650 450 1300 250 L 1300 550 L 0 550 L 0 250;
                M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250;
				M 0 250 C 600 100 650 450 1300 250 L 1300 550 L 0 550 L 0 250"
                repeatCount="indefinite"
        />
	</path>

	<path class="st1" d="M 0 250 C 950 350 950 150 1300 250 L 1300 550 L 0 550 L 0 250">
		<animate
                attributeName="d"
                dur="10s"
				begin="2s"
                values="M 0 250 C 950 350 950 150 1300 250 L 1300 550 L 0 550 L 0 250;
                M 0 250 C 350 150 350 350 1300 250 L 1300 550 L 0 550 L 0 250;
				M 0 250 C 950 350 950 150 1300 250 L 1300 550 L 0 550 L 0 250"
                repeatCount="indefinite"
        />
	</path>

	<path class="st1" d="M 0 250 C 350 150 350 350 1300 250 L 1300 550 L 0 550 L 0 250">
		<animate
                attributeName="d"
                dur="12s"
                values="M 0 250 C 350 150 350 350 1300 250 L 1300 550 L 0 550 L 0 250;
                M 0 250 C 950 350 950 150 1300 250 L 1300 550 L 0 550 L 0 250;
				M 0 250 C 350 150 350 350 1300 250 L 1300 550 L 0 550 L 0 250"
                repeatCount="indefinite"
        />
	</path>






</svg>



  </div>;
};

export default Footer;
