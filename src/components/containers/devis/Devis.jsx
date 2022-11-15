import React from "react";
import grid1 from "../../../Images/grid.png";
import grid2 from "../../../Images/grid2.png";
import emailjs from '@emailjs/browser';


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

  const sendEmail = (e) => {
    e.preventDefault();
    const form = document.getElementsByName("form")[0];

    console.log(form);

    emailjs.sendForm('service_3wkj3bk', 'template_y4gdhbh', form, 'AJy9gQABv4ckSwv4i')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

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
        <div className="Devis_Form_titre"><h3>voici le formulaire de contact</h3></div>

          <form className="Devis_form" name="form" onSubmit={sendEmail}>
          <input type="text" class="Devis_Form_text" maxlength="256" name="name" data-name="name" placeholder="Nom * " id="Nom-3" required=""/>
          <input type="email" class="Devis_Form_email" maxlength="256" name="mail" data-name="mail" placeholder="Email *" id="Email-3" required=""></input>
          <input type="tel" class="Devis_Form_tel" maxlength="256" name="message" data-name="message" placeholder="Téléphone *" id="T-l-phone-3" required=""></input>
          <input type="text" class="Devis_Form_entreprise" maxlength="256" name="Entreprise" data-name="Entreprise" placeholder="Entreprise" id="Entreprise-3"></input>
          <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </section>
    </div>
};

export default Devis;
