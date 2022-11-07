import React from "react";

import accueil_image from "../../../Images/accueil_image.png";
import vague from "../../../Images/vague.png";

const Presentation = () => {
  return (
    <div className="presentation">
      <div className="">
        <img className="presentation__vague" src={vague} alt="fond_dégradé" />

        <div className="presentation__header">
          <div className="presentation__header__text">
            <h1>
              Création de sites <span> internet</span>
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis eligendi quia numquam totam nam laudantium. Eveniet,
              distinctio! Tenetur eum ipsa temporibus ducimus deleniti fuga
              doloribus adipisci molestiae maxime, cum debitis.
            </p>
          </div>

          <img
            className="presentation__accueil_image"
            src={accueil_image}
            alt="fond_dégradé"
          />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
