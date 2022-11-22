import React, {  useEffect } from "react";
import {  Link } from "react-router-dom";
import { tns } from "../../../../node_modules/tiny-slider/src/tiny-slider";
import test from "../../../Images/test.png";
import stockDataa from "../../../data/card";


const PresentationJu = () => {
  var stockData = stockDataa();


  

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
          items: 3,
        },
        1180: {
          items: 2,
        },
        768: {
          items: 1,
        },
        640: {
          items: 2,
        },
      },
    });
  }, []);

  return (
    <>
      <div className="Presentation__glob">
        <div className="Presentation__left">
          <h2 className="Presentation__H2"> Les derniers sites</h2>
          <div className="Presentation__left__text">
          <p className="Presentation__left__text__p"> Toujours pas convaincu ? Vous pouvez regarder nos créations publics sur la partie d'à côté. Des boutons sont disponibles pour vous permettre de naviguer entre eux. Regarder mes réalisations.</p>
          <Link to="/allrealisation">
          <button className="Presentation__left__text__button"> Voir toutes mes réalisations</button>
          </Link>
          
          </div>
        </div>
        <div className="Presentation_card_bg">
        <div className="Presentation__right my-slider">
          {stockData.map((data, key) => {
            return (
              <div className="slide">
                <a href={"/realisation/"+data.id}>
                <div key={key} className="Presentation__right__card ">
                  <img src={data.src} alt="test" />

                  <div className="Presentation__right__card__content">
                    <p className="Presentation__right__card__content__categorie">
                      {data.service}
                    </p>
                    <p className="Presentation__right__card__content__title">
                      {data.compagnie}
                    </p>
                  </div>
                </div>{" "}
                </a>
              </div>
            );
          })}
        </div>
        <div className="sfd">
        <button className="previous"> &#8249; &#8249; </button>
        <button className="next"> &#8250; &#8250; </button>
      </div>
        </div>
        <div>
          {/* <FontAwesomeIcon icon={faCoffee} />
          <FontAwesomeIcon icon={faarrowright} /> */}
        </div>
      </div>
      
    </>
  );
};

export default PresentationJu;
