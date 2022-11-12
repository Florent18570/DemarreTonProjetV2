import React from "react";
import test from "../../../Images/test.png";
import stockDataa from "../../../data/card"




var deplacement = [100, 200, 300];
var dep = 0;

const PresentationJu = () => {

  var stockData = stockDataa();


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
                  {data.service}
                </p>
                <p className="Presentation__card__content__title">
                  {data.compagnie}
                </p>
              </div>
            </div>
          );
        })}
        <div>
          <button onClick={moveUp}>Avant</button>
          <button onClick={moveDown}>Après</button>
        </div>
      </div>
    </div>
  );
};

export default PresentationJu;
