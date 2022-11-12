import React from "react";
import test from "../../../Images/test.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faarrowright } from "@fortawesome/free-solid-svg-icons";

const stockData = [
  {
    src: "src",
    titre: "TWTR",
    description: "description",
    Date: "5 sec ago",
  },
  {
    src: "src",
    titre: "TWTR",
    description: "description",
    Date: "5 sec ago",
  },
  {
    src: "src",
    titre: "TWTR",
    description: "description",
    Date: "5 sec ago",
  },
  {
    src: "src",
    titre: "TWTR",
    description: "description",
    Date: "5 sec ago",
  },
  {
    src: "src",
    titre: "TWTR",
    description: "description",
    Date: "5 sec ago",
  },
  {
    src: "src",
    titre: "TWTR",
    description: "description",
    Date: "5 qfqsdfqsdfqsec ago",
  },
];

var deplacement = [100, 200, 300];
var dep = 0;

const PresentationJu = () => {
  function moveUp() {
    document.getElementsByClassName("Presentation_proj")[0].style.transform =
      "translate(" + deplacement[dep] + "px,0px)";
    dep++;

    if (dep <= deplacement.length) {
    } else {
      dep = 0;
      document.getElementsByClassName("Presentation_proj")[0].style.transform =
        "translate(" + deplacement[dep] + "px,0px)";
    }
  }

  function moveDown() {
    document.getElementsByClassName("Presentation_proj")[0].style.transform =
      "translate(-" + deplacement[dep] + "px,0px)";
    dep--;

    if (dep > 0) {
    } else {
      dep = 0;
      document.getElementsByClassName("Presentation_proj")[0].style.transform =
        "translate(-" + deplacement[dep] + "px,0px)";
    }
  }

  return (
    <div className="Presentation_glob">
      <div className="Presentation">
        {stockData.map((data, key) => {
          return (
            <div key={key} className="Presentation__card">
              <img src={test} alt="test" />

              <div className="Presentation__card__content">
                <p className="Presentation__card__content__categorie">
                  Gestion évènementielle
                </p>
                <p className="Presentation__card__content__title">
                  La fabrique Général
                </p>
              </div>
            </div>
          );
        })}
        <div>
          {/* <FontAwesomeIcon icon={faCoffee} />
          <FontAwesomeIcon icon={faarrowright} /> */}
          <button onClick={moveUp}>Avant</button>
          <button onClick={moveDown}>Après</button>
        </div>
      </div>
    </div>
  );
};

export default PresentationJu;
