import React from "react";
import Julien from "../../../Images/julien.png"
import Florent from "../../../Images/florent.png"
import Bg from "../../../Images/Bg_realisation.png"

const Nous = () => {
  return <div className="Nous">
    <div className="Nous_titre">
      Nous deux, best dev ever
    </div>
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
        <p className="Nous_partenaire_text">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
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

  </div>;
};

export default Nous;
