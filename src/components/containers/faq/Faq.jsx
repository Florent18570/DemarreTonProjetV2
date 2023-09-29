import React, { useEffect } from "react";
import { tns } from "../../../../node_modules/tiny-slider/src/tiny-slider";

import stockDataa from "../../../data/card";

const Faq = () => {

  var choixitem1 = false;
  var choixitem2 = false;
  var choixitem3 = false;
  var choixitem4 = false;
  var choixitem5 = false;




    
    function item1(){
      if(choixitem1 == true){
        choixitem1 = false;
      }else{
        choixitem1 = true;
        document.getElementById("item2").setAttribute("aria-expanded", false);
        document.getElementById("item3").setAttribute("aria-expanded", false);
        document.getElementById("item4").setAttribute("aria-expanded", false);
        document.getElementById("item5").setAttribute("aria-expanded", false);
        choixitem2 = false;
        choixitem3 = false;
        choixitem4 = false;
        choixitem5 = false;

      }
      document.getElementById("item1").setAttribute("aria-expanded", choixitem1);

      console.log(choixitem1);
    }

    function item2(){
      if(choixitem2 == true){
        choixitem2 = false;
      }else{
        choixitem2 = true;

        document.getElementById("item1").setAttribute("aria-expanded", false);
        document.getElementById("item3").setAttribute("aria-expanded", false);
        document.getElementById("item4").setAttribute("aria-expanded", false);
        document.getElementById("item5").setAttribute("aria-expanded", false);
        choixitem1 = false;
        choixitem3 = false;
        choixitem4 = false;
        choixitem5 = false;
      }
      document.getElementById("item2").setAttribute("aria-expanded", choixitem2);

      console.log(choixitem2);
    }

    function item3(){
      if(choixitem3 == true){
        choixitem3 = false;
      }else{
        choixitem3 = true;

        document.getElementById("item2").setAttribute("aria-expanded", false);
        document.getElementById("item1").setAttribute("aria-expanded", false);
        document.getElementById("item4").setAttribute("aria-expanded", false);
        document.getElementById("item5").setAttribute("aria-expanded", false);
        choixitem2 = false;
        choixitem1 = false;
        choixitem4 = false;
        choixitem5 = false;
      }
      document.getElementById("item3").setAttribute("aria-expanded", choixitem3);

      console.log(choixitem3);
    }

    function item4(){
      if(choixitem4 == true){
        choixitem4 = false;
      }else{
        choixitem4 = true;

        document.getElementById("item2").setAttribute("aria-expanded", false);
        document.getElementById("item3").setAttribute("aria-expanded", false);
        document.getElementById("item1").setAttribute("aria-expanded", false);
        document.getElementById("item5").setAttribute("aria-expanded", false);
        choixitem2 = false;
        choixitem3 = false;
        choixitem1 = false;
        choixitem5 = false;
      }
      document.getElementById("item4").setAttribute("aria-expanded", choixitem4);

      console.log(choixitem4);
    }

    function item5(){
      if(choixitem5 == true){
        choixitem5 = false;
      }else{
        choixitem5 = true;

        document.getElementById("item2").setAttribute("aria-expanded", false);
        document.getElementById("item3").setAttribute("aria-expanded", false);
        document.getElementById("item4").setAttribute("aria-expanded", false);
        document.getElementById("item1").setAttribute("aria-expanded", false);
        choixitem2 = false;
        choixitem3 = false;
        choixitem4 = false;
        choixitem1 = false;
      }
      document.getElementById("item5").setAttribute("aria-expanded", choixitem5);

      console.log(choixitem5);
    }

    
    return (


    <div class="container">
  <h2 className="Prestationspe_Explication_titre">Vos questions les plus fréquentes</h2>
  <p className="Header_description_faq">
          Nous serions ravis de travailler avec vous, mais nous comprenons que vous puissiez avoir des questions. Cette FAQ rapide couvre l'essentiel. Si vous avez d'autres questions, n'hésitez pas à nous contacter.
      </p>
  <div class="accordion">
    <div class="accordion-item">
      <button id="item1" onClick={item1} aria-expanded="false"><span class="accordion-title">Combien coûte la création d'un site web ?</span><span class="icon" aria-hidden="true"></span></button>
      <div class="accordion-content">
        <p>Le prix d'un site web varie en fonction de ses fonctionnalités, de sa complexité et de son étendue. En général, un site web simple coûte entre 500 € et 1000 €. Un site web plus complexe, avec des fonctionnalités avancées, peut coûter plusieurs milliers d'euros.</p>
      </div>
    </div>
    <div class="accordion-item">
      <button id="item2" onClick={item2} aria-expanded="false"><span class="accordion-title">Quel est le délai de création d'un site web ?</span><span class="icon" aria-hidden="true"></span></button>
      <div class="accordion-content">
        <p>Le délai de création d'un site web dépend de la complexité du projet. En général, un site web simple peut être créé en quelques semaines. Un site web plus complexe peut prendre plusieurs mois.</p>
      </div>
    </div>
    <div class="accordion-item">
      <button id="item3" onClick={item3} aria-expanded="false"><span class="accordion-title">Quels sont les avantages de créer un site web avec votre entreprise ?</span><span class="icon" aria-hidden="true"></span></button>
      <div class="accordion-content">
        <p>Voici quelques avantages de créer un site web avec notre entreprise :

Nous avons une équipe expérimentée de développeurs et de designers web.
Nous utilisons les dernières technologies et tendances web.
Nous nous engageons à fournir un service client de qualité.</p>
      </div>
    </div>
    <div class="accordion-item">
      <button id="item4" onClick={item4} aria-expanded="false"><span class="accordion-title">Quelles sont les garanties que vous offrez ?</span><span class="icon" aria-hidden="true"></span></button>
      <div class="accordion-content">
        <p>A revoir</p>
      </div>
    </div>
    <div class="accordion-item">
      <button id="item5" onClick={item5} aria-expanded="false" ><span class="accordion-title">Comment puis-je obtenir un devis gratuit ?</span><span class="icon" aria-hidden="true"></span></button>
      <div class="accordion-content">
        <p>Pour obtenir un devis gratuit, veuillez nous contacter en remplissant le formulaire de contact sur notre site web. Nous vous répondrons dans les plus brefs délais.</p>
      </div>
    </div>
  </div>
</div>

    );



    
};

export default Faq;