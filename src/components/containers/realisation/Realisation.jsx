import React, { useRef, useEffect, useState } from "react";
import Image from "../../../Images/dégradé.png";
import { useParams } from "react-router-dom";
import { NotFound} from "..";


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


  const stockData = [
    {
      
      id: "0",
      compagnie: "stb18",
      intro:"Réalisation d'un site web dans le but d'avoir un impact sur internet.",
      service: "Développement Web",
      technologie: "Html / Css / Js / Wordpress",
      date: "Janvier 2022",
      site : "https://stb18.fr",
      src : "../../src/Images/agence.png",
      processus : [{
        etape:"1. Rédaction d'une charte graphique",
        description:"Comme tout projet, une charte graphique est au préalable développée afin que le site corresponde au mieux à l'identité visuelle de l'entreprise."
      },
      {
        etape:"2. Design des wireframes et de la maquette",
        description:"En reprenant la charte graphique, la totalité des pages a d'abord été wireframée, puis, sur Figma, le design a été fait. Après validation du client, nous avons pu passer à la suite."
      },
      {
        etape:"3. Choix de la solution",
        description:"La solution devait s'intégrer dans l'écosystème déjà existant, j'ai décidé d'utiliser Webflow pour ensuite exporter le code en HTML/CSS/JS et l'intégrer à la solution."
      },
      {
        etape:"4. Développement du site",
        description:" Une fois la maquette validée et la solution choisie, j'ai pu passer au développement du site."
      },
      {
        etape:"5. Test de performance PageSpeed Insights de Google",
        description:"Tous mes sites sont optimisés afin d'être le plus performant possible."
      }
      
      ]
        
      
    },
    {
      id: "1",
      compagnie: "Gem-générator",
      intro:"Application web dans le but de prévenir des sites frauduleux",
      service: "Développement logiciel web",
      technologie: "Html / Css / Js / Jquery ",
      date: "Juin 2022",
      site : "https://gems-generator.com/",
      src : "../../../Images/dégradé.png",
      processus : [{
        etape:"1. première étape",
        description:"la première étape, le code, pas évident, surtout quand on a des erreurs incompréhensive"
      },
      {
        etape:"2. Design des wireframes et de la maquette",
        description:"En reprenant la charte graphique, la totalité des pages a d'abord été wireframée, puis, sur Figma, le design a été fait. Après validation du client, nous avons pu passer à la suite."
      },
      {
        etape:"3. Choix de la solution",
        description:"La solution devait s'intégrer dans l'écosystème déjà existant. La solution ? Intégrer du code et JSX c'est trop rapide "
      },
      {
        etape:"4. Développement du site",
        description:" Une fois la maquette validée et la solution choisie, j'ai pu passer au développement du site."
      },
      {
        etape:"5. Test de performance PageSpeed Insights de Google",
        description:"Tous mes sites sont optimisés afin d'être le plus performant possible."
      },
      {
        etape:"6. Test de performance PageSpeed Insights de Google",
        description:"Tous mes sites sont optimisés afin d'être le plus performant possible."
      },
      {
        etape:"7. Test de performance PageSpeed Insights de Google",
        description:"Je m'arrete a 7, c'est long, mais c'est du illimité"
      }
      
      ]
        
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
