import React from "react";

const HeaderJu = () => {
  return (
    <div className="Header_global">
      <p className="Header_titre">DemarreTonProjet</p>
      <h1 className="Header_creation">Création de sites internet</h1>
      <p className="Header_description">
        Un site performant en toute simplicité : rapide, adapté et optimisé pour
        répondre à toutes vos exigences. Faites le choix d'un site qui vous
        ressemble, pour une expérience en ligne optimale.
      </p>
      <p className="Header_description">Votre devis en quelques minutes !</p>
      <a href="../devis">
        <button className="Header_button"> Me contacter </button>
      </a>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
    </div>
  );
};

export default HeaderJu;
