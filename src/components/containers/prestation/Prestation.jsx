import React from "react";
import grid1 from "../../../Images/grid.png";
import Refonte from "../../../Images/refonte.png";

const Prestation = () => {
  return (
    <section className="Prestation">
      <h2> Faites vous accompagner pour votre visibilité sur internet </h2>

      <div className="Prestation__grid">
        <div className="Prestation__grid__card">
          <div className="Prestation__grid__card__img">
            <img src={grid1} alt="grid1" />
          </div>
          <div className="Prestation__grid__card__content">
            <h3> Création de sites internet</h3>
            <p>
              Développement de votre site sur-mesure avec toutes les
              fonctionnalit"s nécessaires.
            </p>
            <a href=""> En savoir plus</a>
          </div>
        </div>

        <div className="Prestation__grid__card">
          <div className="Prestation__grid__card__img">
            <img src={grid1} alt="grid1" />
          </div>
          <div className="Prestation__grid__card__content">
            <h3> Création de sites internet</h3>
            <p>
              Développement de votre site sur-mesure avec toutes les
              fonctionnalit"s nécessaires.
            </p>
            <a href=""> En savoir plus</a>
          </div>
        </div>

        <div className="Prestation__grid__card">
          <div className="Prestation__grid__card__img">
            <img src={grid1} alt="grid1" />
          </div>
          <div className="Prestation__grid__card__content">
            <h3> Création de sites internet</h3>
            <p>
              Développement de votre site sur-mesure avec toutes les
              fonctionnalit"s nécessaires.
            </p>
            <a href=""> En savoir plus</a>
          </div>
        </div>

        <div className="Prestation__grid__card">
          <div className="Prestation__grid__card__img">
            <img src={grid1} alt="grid1" />
          </div>
          <div className="Prestation__grid__card__content">
            <h3> Création de sites internet</h3>
            <p>
              Développement de votre site sur-mesure avec toutes les
              fonctionnalit"s nécessaires.
            </p>
            <a href=""> En savoir plus</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prestation;
