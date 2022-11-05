import React from "react";
import Julien from "../../../Images/julien.png"
import Florent from "../../../Images/florent.png"
import Bg from "../../../Images/Bg_realisation.png"

const Nous = () => {
  return <div className="Nous ">
    <div className="sectionbox">
    <h2 className="Nous_titre">
      A PROPOS DE NOUS
    </h2>
    <div className="Nous_developpeur">
      Développeur
    </div>
    <div className="Nous_colonne">
      <div className="Nous_image">
        <div className="large">
          <img src={Bg} className="Nous_Image_1"/>
          <div className="Nous_Image_23">
            <img src={Bg} className="Nous_Image_2"/>
            <img src={Bg} className="Nous_Image_3"/>
          </div>
        </div>
        <div className="large">
          <img src={Bg} className="Nous_Image_4"/>
          <img src={Bg} className="Nous_Image_5"/>
        </div>
      </div>
      <div className="Nous_partenaire">
        <h3 className="Nous_parfaitpartenaire">Votre parfait partenaire</h3>
        <p className="Nous_partenaire_text">C'est après la satisfaction de plusieurs clients qu'est nait "DemarreTonProjet". Un groupe réunissant deux frères dans le but de répondre à la demande grandissant de la mise en ligne d'entreprises. DemarreTonProjet, c'est la chance de mettre toutes les chances de vos côtés pour augmenter vos visites, de permettre d'étandre votre rayon de prospection et donc de générer plus de ventes ou de chantiers.</p>
        <div className="Nous_julien">
          
          <img src={Julien}></img>
          <div className="Nous_Julien_titre">
            <h4>Julien Escots</h4>
            <p className="Nous_Julien_dev">Développeur Backend</p>
          </div>
        </div>
        <div className="Nous_florent">
          
        <img src={Florent}></img>
          <div className="Nous_Julien_titre">
            <h4>Florent Escots</h4>
            <p className="Nous_Julien_dev">Développeur Frontend</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>;
};

export default Nous;
