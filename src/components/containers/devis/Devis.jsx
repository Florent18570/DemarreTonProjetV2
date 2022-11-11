import React from "react";
import grid1 from "../../../Images/grid.png";
import grid2 from "../../../Images/grid2.png";
import grid3 from "../../../Images/grid3.png";
import grid4 from "../../../Images/grid4.png";


const Devis = () => {

 

  var switchdevis = 0;

  function devischange(choix) {
    switchdevis = choix;
    
    var buttonoui = document.getElementsByName("ouiidee")[0];
    var buttonnon = document.getElementsByName("nonidee")[0];
    console.log(buttonnon);


    if (switchdevis == 1) {
      //menu désactivé
      buttonoui.classList.add("animation_choixdevis");
      buttonoui.classList.remove("animation_choixdevis_reverse");

      buttonnon.classList.remove("animation_choixdevis");
      buttonnon.classList.add("animation_choixdevis_reverse");

    


    } else {
      //menu activé
      buttonoui.classList.remove("animation_choixdevis");
      buttonoui.classList.add("animation_choixdevis_reverse");

      buttonnon.classList.add("animation_choixdevis");
      buttonnon.classList.remove("animation_choixdevis_reverse");

     

      
    }
  }

  return <div>
    <section className="Prestation">
      <h2> Faites vous accompagner pour votre visibilité sur internet </h2>

      
      <div className="Prestation__grid">

        <button onClick={() => devischange(1)} >
        <div className="Prestation__grid__card">
          <div className="Prestation__grid__card__img">
            <img src={grid1} alt="grid1" />
          </div>
          <div className="Prestation__grid__card__content">
            <h3> J'ai une idée de site</h3>
            <p>
              Afin de concevoir un site au plus proche de votre souhait, nous vous laissons remplir le formulaire de contact afin que nous puissions répondre à votre demande au plus vite.
            </p>
            <a href=""> En savoir plus</a>
          </div>
        </div>
        </button>

        <button onClick={() => devischange(2)}>
        <div className="Prestation__grid__card">
          <div className="Prestation__grid__card__img">
            <img src={grid2} alt="grid1" />
          </div>
          <div className="Prestation__grid__card__content">
            <h3>Je n'ai aucune idée du visuel</h3>
            <p>
              Le design ? Nous pouvons nous en occuper. Pour nous aider et vous donner rapidement et en ligne une fourchette de prix, nous vous laissons remplir le formulaire suivant.
            </p>
            <a href=""> En savoir plus</a>
          </div>
        </div>
        </button>

        
      </div>

      <div className="Prestation__grid__form">

      <div name="ouiidee" className="Prestation__grid__choix">
          <div className="Prestation__grid__card__img">
            <img  src={grid2} alt="grid1" />
          </div>
          <div className="Prestation__grid__card__content">
            <h3>Jezjnzekjnezkjzeezkne n'ai aucune idée du visuel</h3>
            <p >
              Le design ? Nous pouvons nous en occuper. Pour nous aider et vous donner rapidement et en ligne une fourchette de prix, nous vous laissons remplir le formulaire suivant.
            </p>
            <a href=""> En savoir plus</a>
          </div>
        </div>

        <div name="nonidee" className="Prestation__grid__choix">
          <div className="Prestation__grid__card__img">
            <img src={grid2} alt="grid1" />
          </div>
          <div className="Prestation__grid__card__content">
            <h3>Je n'ai aucune idée du visuel</h3>
            <p>
              Le design ? Nous pouvons nous en occuper. Pour nous aider et vous donner rapidement et en ligne une fourchette de prix, nous vous laissons remplir le formulaire suivant.
            </p>
            <a href=""> En savoir plus</a>
          </div>
        </div>
      </div>
    </section>
    </div>
};

export default Devis;
