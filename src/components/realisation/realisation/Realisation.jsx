import React from "react";
import Image from "../../../Images/dégradé.png";
import { useParams } from "react-router-dom";

const Realisation = () => {
  const params = useParams();

  return (
    <div className="RealisationPage">
      <header>
        <h1>Compagnie </h1>
        <p> Introdution du projet</p>
      </header>

      <div className="RealisationPage__projetDetail">
        <div className="Realisation__projetDetail__container">
          <h3> Service</h3>
          <p> Développement Web </p>
        </div>
        <div className="Realisation__projetDetail__container">
          <h3> Technologie</h3>
          <p> Webflow </p>
        </div>
        <div className="Realisation__projetDetail__container">
          <h3> Date </h3>
          <p> Jan 2022 </p>
        </div>
        <div className="Realisation__projetDetail__container">
          <h3> Site Internet</h3>
          <p> Koida Academy </p>
        </div>
      </div>

      <img src={Image} alt="Image" />

      <div className="RealisationPage__etude">
        <h2> Etude de cas </h2>
        <h3>Processus</h3>

        <h4>1. Rédaction d'une charte graphique</h4>
        <p>
          Comme tout projet, une charte graphique est au préalable développée
          afin que le site corresponde au mieux à l'identité visuelle de
          l'entreprise.
        </p>

        <h4>2. Design des wireframes et de la maquette</h4>
        <p>
          En reprenant la charte graphique, la totalité des pages a d'abord été
          wireframée, puis, sur Figma, le design a été fait. Après validation du
          client, nous avons pu passer à la suite.
        </p>

        <h4>3. Choix de la solution</h4>
        <p>
          La solution devait s'intégrer dans l'écosystème déjà existant, j'ai
          décidé d'utiliser Webflow pour ensuite exporter le code en HTML/CSS/JS
          et l'intégrer à la solution.
        </p>

        <h4>4. Développement du site</h4>
        <p>
          Une fois la maquette validée et la solution choisie, j'ai pu passer au
          développement du site.
        </p>

        <h4>
          5. Test de performance PageSpeed Insights de Google {params.userId}
        </h4>
        <p>
          Tous mes sites sont optimisés afin d'être le plus performant possible.
        </p>
      </div>

      <div className="RealisationPage__autreProjet">
        <div className="RealisationPage__autreProjet__top">
          <h2> Plus d'études de cas </h2>
          <button> Tout voir </button>
        </div>

        <div className="RealisationPage__autreProjet__grid">
          <div className="RealisationPage__autreProjet__grid__card">
            <img src={Image} alt="Image" />
            <div className="RealisationPage__autreProjet__grid__card__content">
              <h3> Carlili</h3>
              <p>
                Pour la campagne marketing de l'entreprise carlili, j'ai
                développé la langing page de leur nouveau lancement
              </p>
            </div>
          </div>

          <div className="RealisationPage__autreProjet__grid__card">
            <img src={Image} alt="Image" />
            <div className="RealisationPage__autreProjet__grid__card__content">
              <h3> Carlili</h3>
              <p>
                Pour la campagne marketing de l'entreprise carlili, j'ai
                développé la langing page de leur nouveau lancement
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realisation;
