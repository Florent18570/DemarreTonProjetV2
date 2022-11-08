import React from "react";
import processus1 from "../../../Images/processus1.png";
import processus2 from "../../../Images/processus2.png";
import processus3 from "../../../Images/processus3.png";

const Processus = () => {
  return (
    <section className="Processus">
      <div className="Processus__left">
        <h2> Un processus simple mais efficace en trois étape</h2>
        <p>
          De l'étape de la recherche de solution jusqu'au processus de
          lancement, je vous propose un accompagnement 100% personnalisé.
        </p>
        <button> En savoir plus </button>
      </div>

      <div className="Processus__right">
        <div className="Processus__right__card ">
          <img src={processus1} alt="" />
          <div className="Processus__right__card__content">
            <h3> 01. Plan d'analyse</h3>
            <p>
              Nous analysons ensemble votre projet afin d'utiliser les meilleurs
              outils et solutions qui permettront de mener à bien votre projet
            </p>
          </div>
        </div>

        <div className="Processus__right__card ">
          <img src={processus2} alt="" />
          <div className="Processus__right__card__content">
            <h3> 01. Plan d'analyse</h3>
            <p>
              Nous analysons ensemble votre projet afin d'utiliser les meilleurs
              outils et solutions qui permettront de mener à bien votre projet
            </p>
          </div>
        </div>

        <div className="Processus__right__card ">
          <img src={processus3} alt="" />
          <div className="Processus__right__card__content">
            <h3> 01. Plan d'analyse</h3>
            <p>
              Nous analysons ensemble votre projet afin d'utiliser les meilleurs
              outils et solutions qui permettront de mener à bien votre projet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Processus;
