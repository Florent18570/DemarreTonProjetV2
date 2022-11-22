import React from "react";
import processus1 from "../../../Images/processus1.png";
import processus2 from "../../../Images/processus2.png";
import processus3 from "../../../Images/processus3.png";

import Union from "../../../Images/Union.png";
import rectangle from "../../../Images/rectangle.png";
import fleche from "../../../Images/flechedroite.png";

const Processus = () => {
  return (
    <section className="Processus">
      <div className="Processus__left">
        <h2> Un processus simple mais efficace en trois étape</h2>
        <p>
          De l'étape de la recherche de solution jusqu'au processus de
          lancement, je vous propose un accompagnement 100% personnalisé.
        </p>
      </div>

      <div className="Processus__right">
        <div className="Processus__right__card">
          <img className="Union" src={Union} alt="Union" />
          <img src={processus1} alt="" />
          <div className="horizontalBar"></div>
          <div className="Processus__right__card__content">
            <h3> 01. Plan d'analyse</h3>
            <p>
              Nous analysons ensemble votre projet afin d'utiliser les meilleurs
              outils et solutions qui permettront de mener à bien votre projet
            </p>
          </div>
        </div>
        <div className="animation_load ">
          <div className="animation_carré rectanglebleu "></div>
          <div className="animation_carré "></div>
          <div className="animation_carré "></div>
          <div className="animation_carré "></div>
          <div className="animation_carré "></div>
          <div className="animation_carré "></div>
        </div>

        <div className="Processus__right__card ">
          <img src={processus2} alt="" />
          <div className="horizontalBar"></div>
          <div className="Processus__right__card__content">
            <h3> 02. Développement</h3>
            <p>
              Développement de la solution de A à Z et de son écosystème en
              intégrant les outils nécessaires.{" "}
            </p>
          </div>
        </div>
        <div className="animation_load ">
          <div className="animation_carré rectanglebleu anidelay"></div>
          <div className="animation_carré "></div>
          <div className="animation_carré "></div>
          <div className="animation_carré "></div>
          <div className="animation_carré "></div>
          <div className="animation_carré "></div>
        </div>

        <div className="Processus__right__card ">
          <img src={processus3} alt="" />
          <div className="horizontalBar"></div>
          <div className="Processus__right__card__content">
            <h3> 03. Lancement </h3>
            <p>
              Je vous accompagne dans le lancement de votre produit et bien
              après, afin d'assurer le fonctionnement sur le long terme.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Processus;
