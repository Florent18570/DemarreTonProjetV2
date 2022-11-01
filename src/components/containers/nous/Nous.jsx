import React from "react";
import Julien from "../../../Images/julien.png"
import Florent from "../../../Images/florent.png"

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
        <div className="Nous_Image_1">
          1
        </div>
        <div className="Nous_Image_23">
          <div className="Nous_Image_2">
            2
          </div>
          <div className="Nous_Image_3">
            3
          </div>
        </div>
        </div>
        <div className="large">
        <div className="Nous_Image_4">
          4
        </div>
        <div className="Nous_Image_5">
          5
        </div>
        </div>
      </div>
      <div className="Nous_partenaire">
        <h3 className="Nous_parfaitpartenaire">Votre parfait partenaire</h3>
        <p className="Nous_partenaire_text">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <div className="Nous_julien">
          
          <img src={Julien}></img>
          <div>
            <h4>Julien Escots</h4>
            <p>Développeur Backend</p>
          </div>
        </div>
        <div className="Nous_florent">
          
        <img src={Florent}></img>
          <div>
            <h4>Florent Escots</h4>
            <p>Développeur Frontend</p>
          </div>
        </div>
      </div>
    </div>

  </div>;
};

export default Nous;
