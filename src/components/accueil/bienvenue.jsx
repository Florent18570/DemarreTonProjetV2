import React from "react";
import { Link } from "react-router-dom";

const Bienvenue = () => {
  let data = sessionStorage.getItem("user");
  let arrayUser = data.split(",");
  // console.log(arrayUser);

  let param = {
    nom: arrayUser[0],
    prenom: arrayUser[1],
  };
  return (
    <div className="containerBienvenue">
      <h1 className="bienvenue">Bienvenue {param.nom + " " + param.prenom}</h1>
      <Link to="/new_Post">
        <button className="nouvellePublication">Nouvelle publication</button>
      </Link>
    </div>
  );
};

export default Bienvenue;
