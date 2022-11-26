import React from "react";
import grid1 from "../../../Images/grid.png";
import grid2 from "../../../Images/grid2.png";
import grid3 from "../../../Images/grid3.png";
import grid4 from "../../../Images/grid4.png";

const Prestation = () => {
  return (
    <section className="Prestation">
      <h2> Faites vous accompagner pour votre visibilité sur internet </h2>

      <div className="Prestation__grid">
        <div className="Prestation__grid__card delay1 ">
          <div className="Prestation__grid__card__img">
            <img src={grid1} alt="grid1" />
          </div>
          <div className="Prestation__grid__card__content">
            <h3> Création de sites internet</h3>
            <p>
              Développement de votre site sur-mesure avec toutes les
              fonctionnalit"s nécessaires.
            </p>
            <a href="/prestation/creation"> En savoir plus</a>
          </div>
        </div>

        <div className="Prestation__grid__card delay2">
          <div className="Prestation__grid__card__img">
            <img src={grid2} alt="grid1" />
          </div>
          <div className="Prestation__grid__card__content">
            <h3> UX Design</h3>
            <p>
              Optimisation de l'expérience utilisateur pour améliorer la
              conversation.
            </p>
            <a href="/prestation/uxdesign"> En savoir plus</a>
          </div>
        </div>

        <div className="Prestation__grid__card delay3">
          <div className="Prestation__grid__card__img">
            <img src={grid3} alt="grid1" />
          </div>
          <div className="Prestation__grid__card__content">
            <h3> Référencement naturel</h3>
            <p>
              Amélioration de votre position dans les moteurs de recherche avec
              le trafic organique.
            </p>
            <a href="/prestation/referencement"> En savoir plus</a>
          </div>
        </div>

        <div className="Prestation__grid__card delay4">
          <div className="Prestation__grid__card__img">
            <img src={grid4} alt="grid1" />
          </div>
          <div className="Prestation__grid__card__content">
            <h3> Maintenance technique </h3>
            <p>
              Hébergement, cybersécurité, sauvegarde, maintenance de votre
              application
            </p>
            <a href="/prestation/maintenance"> En savoir plus</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prestation;
