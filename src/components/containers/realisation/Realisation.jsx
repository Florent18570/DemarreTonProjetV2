import React, { useRef, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { NotFound } from "..";
import stockDataa from "../../../data/card";

const Realisation = () => {
  const params = useParams();

  const myRef = useRef();
  const [myElemenIsVisible, setMyElemenIsVisible] = useState();
  console.log("entry", myElemenIsVisible);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyElemenIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  var stockData = stockDataa();

  var random1 = Math.floor(Math.random() * (stockData.length - 1 + 1)) + 0;
  var random2 = Math.floor(Math.random() * (stockData.length - 1 + 1)) + 0;

  while (random1 === random2) {
    random2 = Math.floor(Math.random() * (stockData.length - 1 + 1)) + 0;
  }

  var suite1 = stockData[random1];
  var suite2 = stockData[random2];

  if (typeof stockData[parseInt(params.userId)].id !== "undefined") {
    return (
      <section className="RealisationPage">
        <header>
          <h1>{stockData[parseInt(params.userId)].compagnie} </h1>
          <p> {stockData[parseInt(params.userId)].intro}</p>
          <div className="barre_vertical"></div>
        </header>

        <div className="RealisationPage__projetDetail">
          <div className="RealisationPage__projetDetail__container delay1">
            <h3> Service</h3>
            <p> {stockData[parseInt(params.userId)].service} </p>
          </div>
          <div className="RealisationPage__projetDetail__container delay2">
            <h3> Technologie</h3>
            <p> {stockData[parseInt(params.userId)].technologie} </p>
          </div>
          <div className="RealisationPage__projetDetail__container delay3">
            <h3> Date </h3>
            <p> {stockData[parseInt(params.userId)].date} </p>
          </div>
          <div className="RealisationPage__projetDetail__container delay4">
            <h3> Site Internet</h3>
            <a href={stockData[parseInt(params.userId)].link}>
              {stockData[parseInt(params.userId)].site}
            </a>
          </div>
        </div>

        <div ref={myRef} className={`${myElemenIsVisible ? "opacity" : ""}`}>
          <img src={stockData[parseInt(params.userId)].src} alt="décoration" />
        </div>

        <div className="RealisationPage__etude">
          <h2> Etude de cas </h2>
          <h3>Processus</h3>

          {stockData[parseInt(params.userId)].processus.map((data, key) => {
            return (
              <div>
                <h4>{data.etape} </h4>
                <p>{data.description} </p>
              </div>
            );
          })}
        </div>

        <div className="RealisationPage__autreProjet">
          <div className="RealisationPage__autreProjet__top">
            <h2> Plus d'études de cas </h2>
            <button>
              <a href="/allrealisation">Tout voir</a>
            </button>
          </div>

          <div className="RealisationPage__autreProjet__grid">
            <a href={"/realisation/" + suite1.id}>
              <div className="RealisationPage__autreProjet__grid__card">
                <img src={suite1.src} alt="realisation1" />
                <div className="RealisationPage__autreProjet__grid__card__content">
                  <h3> {suite1.compagnie}</h3>
                  <p>{suite1.intro}</p>
                </div>
              </div>
            </a>

            <a href={"/realisation/" + suite2.id}>
              <div className="RealisationPage__autreProjet__grid__card">
                <img src={suite2.src} alt="realisation2" />
                <div className="RealisationPage__autreProjet__grid__card__content">
                  <h3> {suite2.compagnie}</h3>
                  <p>{suite2.intro}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <NotFound />
        <div
          ref={myRef}
          className={`${myElemenIsVisible ? "opacity" : ""}`}
        ></div>
      </section>
    );
  }
};

export default Realisation;
