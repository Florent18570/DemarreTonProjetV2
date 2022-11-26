import React from "react";
import Julien from "../../../Images/julien.webp";
import Florent from "../../../Images/florent.webp";
import Bg from "../../../Images/undraw_programming_re_kg9v.svg";

const Nous = () => {
  return (
    <div className="Nous">
      <img className="Nous__image_gauche" src={Bg} alt="Bg" />
      <div className="Nous__content">
        <h2> Pourquoi travailler avec moi ? </h2>
        <p>
          Étudiant ingénieur en développement web, applications, et UX Design,
          je suis mon cursus à l'ECE Paris. J'ai commencé mon activité de
          freelance durant ma scolarité, ce qui a permis de développer mes
          compétences à la fois théoriques et pratiques.
        </p>
        <div className="qsd"></div>
        <div className="Nous_content__bottom">
          <div className="Nous_content__bottom__container">
            <img src={Florent} alt="Florent" />
            <div className=" Nous_content__bottom__container__text">
              <h2> Florent Escots</h2>
              <h3> Développeur Frontend</h3>
            </div>
          </div>
          <div className="Nous_content__bottom__container">
            <img src={Julien} alt="Julien" />
            <div className=" Nous_content__bottom__container__text">
              <h2> Julien Escots</h2>
              <h3> Développeur Backend</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nous;
