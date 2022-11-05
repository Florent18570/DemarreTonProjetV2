import React from "react";
import Creation from "../../../Images/creation.png";
import Refonte from "../../../Images/refonte.png";

const Prestation = () => {
  return (
    <section className="Prestation">
      <div className="sectionbox">
      <h1 className="Prestation__titlePrestation">Confiez-nous votre projet</h1>
      <div className="Prestation__container">
        <div className="Prestation__container__bloc bloc1">
          <h3 className="colorsaumongris bold800">
            Création de votre site Internet
          </h3>
          <div className="Prestation__container__bloc__inside">
            <div>
              <p className="bold400">
                Développez votre visibilité local et boostez votre croissance
                avec un site internet design, responsive et performant.
              </p>
              <button> En savoir plus</button>
            </div>
            <img src={Creation} alt="Création de votre site Internet" />
          </div>
        </div>

        <div className="Prestation__container__bloc bloc2">
          <h3 className="colorsaumon">Refonte de votre site existant</h3>
          <div className="Prestation__container__bloc__inside">
            <div>
              <p>
                Les tendances évoluent régulièrement et un site comportant des
                aspects graphiques datés peuvent faire fuir l’utilisateur.
              </p>
              <button> En savoir plus</button>
            </div>
            <div>
              <img src={Refonte} alt="Refonte de votre site existant" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Prestation;
