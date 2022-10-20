import React from "react";
import { useState } from "react";
import Creation from "../Images/creation.png";
import Refonte from "../Images/refonte.png";

function App() {
  const Section = () => {
    return (
      <>
        <section className="Prestation">
          <h1 className="titlePrestation">Confiez-nous votre projet</h1>
          <div className="bigbloc">
            <div className="containerSectionPrestation bloc1">
              <div>
                <h2 className="colorsaumongris bold800">
                  Création de votre site Internet
                </h2>
                <p className="bold400">
                  Développez votre visibilité local et boostez votre croissance
                  avec un site internet design, responsive et performant.
                </p>
                <button> En savoir plus</button>
              </div>
              <img src={Creation} alt="Création de votre site Internet" />
            </div>

            <div className="containerSectionPrestation bloc2">
              <div>
                <h2 className="colorsaumon">Refonte de votre site existant</h2>
                <p>
                  Les tendances évoluent régulièrement et un site comportant des
                  aspects graphiques datés peuvent faire fuir l’utilisateur.
                </p>
                <button> En savoir plus</button>
              </div>
              <img src={Refonte} alt="Refonte de votre site existant" />
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Section />
    </>
  );
}

export default App;