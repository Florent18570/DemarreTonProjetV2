import React, { useState, useEffect } from "react";
import { tns } from "../../../../node_modules/tiny-slider/src/tiny-slider";
import test from "../../../Images/test.png";
import stockDataa from "../../../data/card";
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

  useEffect(() => {
    tns({
      container: ".my-slider",
      slideBy: 1,
      speed: 400,
      nav: false,
      rewind: true,
      // swipeAngle: false,
      prevButton: ".previous",
      nextButton: ".next",
      responsive: {
        1600: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        768: {
          items: 2,
        },
        480: {
          items: 1,
        },
      },
    });
  }, []);

  return (
    <>
      <div className="Presentation__glob">
        <div className="Presentation__left">
          <h3> Les derniers sites</h3>
          <p> Toujours pas convaincu ? Regarder mes réalisations.</p>
          <button> Voir toutes mes réalisations</button>
        </div>
        <div className="Presentation__right my-slider">
          {stockData.map((data, key) => {
            return (
              <div className="slide">
                <div key={key} className="Presentation__right__card ">
                  <img src={test} alt="test" />

                  <div className="Presentation__right__card__content">
                    <p className="Presentation__right__card__content__categorie">
                      {data.service}
                    </p>
                    <p className="Presentation__right__card__content__title">
                      {data.compagnie}
                    </p>
                  </div>
                </div>{" "}
              </div>
            );
          })}
        </div>
        <div>
          {/* <FontAwesomeIcon icon={faCoffee} />
          <FontAwesomeIcon icon={faarrowright} /> */}
        </div>
      </div>
      <div className="controlebutton">
        <button className="previous">Avant</button>
        <button className="next">Après</button>
      </div>
    </>
  );
};

export default PresentationJu;
