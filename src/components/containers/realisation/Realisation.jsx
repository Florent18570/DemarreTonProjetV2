import React, { useRef, useEffect, useState } from "react";
import Image from "../../../Images/dégradé.png";
import { useParams } from "react-router-dom";
import { NotFound} from "..";
import stockDataa from "../../../data/card"

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


if(typeof stockData[parseInt(params.userId)].id !== "undefined"){
  return (
    <div className="RealisationPage">
      <header>
        <h1>{stockData[parseInt(params.userId)].compagnie} </h1>
        <p> {stockData[parseInt(params.userId)].intro}</p>
        <div className="barre_vertical"></div>
      </header>

      <div className="RealisationPage__projetDetail">
        <div className="Realisation__projetDetail__container delay1">
          <h3> Service</h3>
          <p> {stockData[parseInt(params.userId)].service} </p>
        </div>
        <div className="Realisation__projetDetail__container delay2">
          <h3> Technologie</h3>
          <p> {stockData[parseInt(params.userId)].technologie} </p>
        </div>
        <div className="Realisation__projetDetail__container delay3">
          <h3> Date </h3>
          <p> {stockData[parseInt(params.userId)].date} </p>
        </div>
        <div className="Realisation__projetDetail__container delay4">
          <h3> Site Internet</h3>
          <p> {stockData[parseInt(params.userId)].site} </p>
        </div>
      </div>

      <div ref={myRef} className={`${myElemenIsVisible ? "opacity" : ""}`}>
        <img src={stockData[parseInt(params.userId)].src} alt="Image" />
      </div>

      <div className="RealisationPage__etude">
        <h2> Etude de cas </h2>
        <h3>Processus</h3>
        
        {stockData[parseInt(params.userId)].processus.map((data, key) => {
          return (<div>
            <h4>{data.etape} </h4>
            <p>{data.description} </p>
          </div>
          )
        })}
        

        
      </div>

      <div className="RealisationPage__autreProjet">
        <div className="RealisationPage__autreProjet__top">
          <h2> Plus d'études de cas </h2>
          <button> Tout voir </button>
        </div>

        <div className="RealisationPage__autreProjet__grid">
          <div className="RealisationPage__autreProjet__grid__card">
            <img src={Image} alt="Image" />
            <div className="RealisationPage__autreProjet__grid__card__content">
              <h3> Carlili</h3>
              <p>
                Pour la campagne marketing de l'entreprise carlili, j'ai
                développé la langing page de leur nouveau lancement
              </p>
            </div>
          </div>

          <div className="RealisationPage__autreProjet__grid__card">
            <img src={Image} alt="Image" />
            <div className="RealisationPage__autreProjet__grid__card__content">
              <h3> Carlili</h3>
              <p>
                Pour la campagne marketing de l'entreprise carlili, j'ai
                développé la langing page de leur nouveau lancement
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }else{
    return (
      <div>
      <NotFound/>
      <div ref={myRef} className={`${myElemenIsVisible ? "opacity" : ""}`}>
      </div>
      </div>);

  }
};

export default Realisation;
