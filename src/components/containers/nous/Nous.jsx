import React from "react";
import Julien from "../../../Images/julien.webp";
import Florent from "../../../Images/florent.webp";
import Bg from "../../../Images/undraw_programming_re_kg9v.svg";

const Nous = () => {
  return (
    <section className="Nous">

<div class="custom-shape-divider-top-1696825104">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>
      <img className="Nous__image_gauche" src={Bg} alt="Bg" />
      <div className="Nous__content">
        <h2> Pourquoi travailler avec&nbsp;nous&nbsp;? </h2>
        <p>
          Notre passion pour l'informatique a donné naissance à
          DémarreTonProjet. Nous sommes une équipe de professionnels diplômés
          des meilleures formations en la matière, et mettons à votre
          disposition toutes nos compétences pour élaborer le site web qui
          répondra le mieux à vos besoins.
        </p>
        <div className="qsd"></div>
        <div className="Nous_content__bottom">
          <div className="Nous_content__bottom__container">
            <img src={Florent} alt="Florent" />
            <div className=" Nous_content__bottom__container__text">
              <h2> Florent Escots</h2>
              <p className="descriptif-dev"> Développeur Fullstack</p>
            </div>
          </div>
          <div className="Nous_content__bottom__container">
            <img src={Julien} alt="Julien" />
            <div className=" Nous_content__bottom__container__text">
              <h2> Julien Escots</h2>
              <p className="descriptif-dev"> Ingénieur Expert Informatique</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nous;
