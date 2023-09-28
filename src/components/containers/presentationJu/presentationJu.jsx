import React, { useEffect } from "react";
import { tns } from "../../../../node_modules/tiny-slider/src/tiny-slider";

import stockDataa from "../../../data/card";

const PresentationJu = () => {
  var stockData = stockDataa();

  useEffect(() => {
    tns({
      container: ".my-slider",
      slideBy: 1,
      speed: 400,
      nav: true,
      rewind: true,
      swipeAngle: false,
      prevButton: ".previous",
      nextButton: ".next",
      responsive: {
        1600: {
          items: 3,
        },
        1023: {
          items: 2,
        },
        768: {
          items: 2,
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
            <p className="Presentation__left__text__p">
              <strong>Vous hésitez encore ?</strong> Jetez un œil à nos
              créations publiques directement depuis notre site web. Vous y
              trouverez une sélection de nos meilleures réalisations. Nous vous
              invitons à cliquer et naviguer au fil des pages pour découvrir
              l'étendue de nos compétences et notre créativité sans
              limites.&nbsp;
              <strong>Vous&nbsp;allez&nbsp;être&nbsp;bluffé&nbsp;!</strong>
            </p>

            <a
              href="/allrealisation"
              className="Presentation__left__text__button"
            >
              Voir toutes nos réalisations
            </a>
          </div>
        </div>
        <div className="Presentation_card_bg">
          <div className="Presentation__right my-slider">
            {stockData.map((data, key) => {
              return (
                <div className="slide">
                  <a href={"/realisation/" + data.id}>
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
                    </div>
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
      </div>
    </>
  );
};

export default PresentationJu;
