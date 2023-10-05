import React from "react";
import stockDataa from "../../../data/card";

const Allrealisationn = () => {
  var stockData = stockDataa();

  return (
    <section className="background">
      <div className="padding">
        <h1 className="allrealisation"> Mes réalisations </h1>
        <div className="barre_vertical"></div>
      </div>

      <div className="gridAllrealisation">
        {stockData.map((data, key) => {
          return (
            <div className="gridAllrealisation__container">
              <a href={"/realisation/" + data.id}>
                <div className="gridAllrealisation__container__image_overflow">
                  <img src={data.src} alt="" />
                </div>

                <div className="gridAllrealisation__container__content">
                  <div className="gridAllrealisation__container__content__top">
                    <h3 className="gridAllrealisation__container__content__top__compagnie">
                      {data.compagnie}
                    </h3>
                    <p className="gridAllrealisation__container__content__top__techno">
                      {data.technologie}
                    </p>
                  </div>
                  <div className="gridAllrealisation__container__content__bottom">
                    <p> {data.intro}</p>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Allrealisationn;
