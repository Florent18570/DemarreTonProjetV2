import React from "react";
import grid1 from "../../../Images/grid.png";
import grid2 from "../../../Images/grid2.png";
import grid3 from "../../../Images/grid3.png";
import grid4 from "../../../Images/grid4.png";

const Prestation = () => {
  return (
    <section className="Prestation">
      <h2> Soyez visible sur internet avec un accompagnement sur mesure. </h2>

      <div className="Prestation__grid">
        <a href="/prestation/creation">
          <div className="Prestation__grid__card delay1 ">
            <div className="Prestation__grid__card__img">
              <img src={grid1} alt="Création de sites internet" />
            </div>
            <div className="Prestation__grid__card__content">
              <h3>Création de sites internet</h3>
              <p>
                Développement de votre site sur-mesure avec toutes les
                fonctionnalit"s nécessaires.
              </p>
              <p className="en-savoir-plus">En savoir plus</p>
            </div>
          </div>
        </a>

        <a href="/prestation/uxdesign">
          <div className="Prestation__grid__card delay2 ">
            <div className="Prestation__grid__card__img">
              <img src={grid2} alt="UX Design" />
            </div>
            <div className="Prestation__grid__card__content">
              <h3>UX Design</h3>
              <p>
                Optimisation de l'expérience utilisateur pour améliorer la
                conversation.
              </p>
              <p className="en-savoir-plus">En savoir plus</p>
            </div>
          </div>
        </a>

        <a href="/prestation/referencement">
          <div className="Prestation__grid__card delay3">
            <div className="Prestation__grid__card__img">
              <img src={grid3} alt="Référencement naturel" />
            </div>
            <div className="Prestation__grid__card__content">
              <h3>Référencement naturel</h3>
              <p>
                Amélioration de votre position dans les moteurs de recherche
                avec le trafic organique.
              </p>
              <p className="en-savoir-plus">En savoir plus</p>
            </div>
          </div>
        </a>

        <a href="/prestation/maintenance">
          <div className="Prestation__grid__card delay4">
            <div className="Prestation__grid__card__img">
              <img src={grid4} alt="Maintenance technique" />
            </div>
            <div className="Prestation__grid__card__content">
              <h3>Maintenance technique</h3>
              <p>
                Hébergement, cybersécurité, sauvegarde, maintenance de votre
                application
              </p>
              <p className="en-savoir-plus">En savoir plus</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Prestation;
