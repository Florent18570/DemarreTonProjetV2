import React from "react";
import { FaBeer } from "react-icons/fa";
import card_footer from "../../../Images/card_footer.png";

const Footer = () => {
  return (
    <>
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



  </>);
};

export default Footer;
