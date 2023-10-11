import React, { useState } from "react";
import { tns } from "../../../../node_modules/tiny-slider/src/tiny-slider";

import stockDataa from "../../../data/card";

const Faq = () => {
  const [animations, setAnimations] = useState(["", "", "", "", ""]);

  const toggleAnimation = (index) => {
    const newAnimations = [...animations];
    newAnimations[index] = newAnimations[index] === "open" ? "close" : "open";
    setAnimations(newAnimations);
  };

  return (
    <section class="container">
      <h2 className="Prestationspe_Explication_titre">
        Vos questions les plus fréquentes
      </h2>
      <p className="Header_description_faq">
        Nous serions ravis de travailler avec vous, mais nous comprenons que
        vous puissiez avoir des questions. Cette FAQ rapide couvre l'essentiel.
        Si vous avez d'autres questions, n'hésitez pas à nous contacter.
      </p>
      <div class="accordion">
        <div class="accordion-item">
          <button
            id="item1"
            onClick={() => toggleAnimation(0)}
            aria-expanded={animations[0]}
          >
            <span class="accordion-title">
              Combien coûte la création d'un site web ?
            </span>
            <span class="icon" aria-hidden="true"></span>
          </button>
          <div className={`accordion-content ${animations[0]}`}>
            <p>
              Le prix d'un site web varie en fonction de ses fonctionnalités, de
              sa complexité et de son étendue. En général, un site web simple
              coûte entre 500 € et 1000 €. Un site web plus complexe, avec des
              fonctionnalités avancées, peut coûter plusieurs milliers d'euros.
            </p>
          </div>
        </div>
        <div class="accordion-item">
          <button
            id="item2"
            onClick={() => toggleAnimation(1)}
            aria-expanded={animations[1]}
          >
            <span class="accordion-title">
              Quel est le délai de création d'un site web ?
            </span>
            <span class="icon" aria-hidden="true"></span>
          </button>
          <div className={`accordion-content ${animations[1]}`}>
            <p>
              Le délai de création d'un site web dépend de la complexité du
              projet. En général, un site web simple peut être créé en quelques
              semaines. Un site web plus complexe peut prendre plusieurs mois.
            </p>
          </div>
        </div>
        <div class="accordion-item">
          <button
            id="item3"
            onClick={() => toggleAnimation(2)}
            aria-expanded={animations[2]}
          >
            <span class="accordion-title">
              Quels sont les avantages de créer un site web avec votre
              entreprise ?
            </span>
            <span class="icon" aria-hidden="true"></span>
          </button>
          <div className={`accordion-content ${animations[2]}`}>
            <p>
              Voici quelques avantages de créer un site web avec notre
              entreprise : Nous avons une équipe expérimentée de développeurs et
              de designers web. Nous utilisons les dernières technologies et
              tendances web. Nous nous engageons à fournir un service client de
              qualité.
            </p>
          </div>
        </div>
        <div class="accordion-item">
          <button
            id="item4"
            onClick={() => toggleAnimation(3)}
            aria-expanded={animations[3]}
          >
            <span class="accordion-title">
              Quelles sont les garanties que vous offrez ?
            </span>
            <span class="icon" aria-hidden="true"></span>
          </button>
          <div className={`accordion-content ${animations[3]}`}>
            <p>A revoir</p>
          </div>
        </div>
        <div class="accordion-item">
          <button
            id="item5"
            onClick={() => toggleAnimation(4)}
            aria-expanded={animations[4]}
          >
            <span class="accordion-title">
              Comment puis-je obtenir un devis gratuit ?
            </span>
            <span class="icon" aria-hidden="true"></span>
          </button>
          <div className={`accordion-content ${animations[4]}`}>
            <p>
              Pour obtenir un devis gratuit, veuillez nous contacter en
              remplissant le formulaire de contact sur notre site web. Nous vous
              répondrons dans les plus brefs délais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
