import React, { useState, useEffect } from "react";
import grid1 from "../../../Images/grid.png";
import grid2 from "../../../Images/grid2.png";
import emailjs from "@emailjs/browser";
import { tns } from "../../../../node_modules/tiny-slider/src/tiny-slider";

const Devis = () => {
  const [slider, setSlider] = useState("");
  const [active, setActive] = useState(null);

  const [dataTabs, setDataTabs] = useState([
    {
      id: 1,
      img: grid1,
      h3: " J'ai une idée de site",
      p: "Afin de concevoir un site au plus proche de votre souhait,nous vous laissons remplir le formulaire de contact afin quenous puissions répondre à votre demande au plus vite.",
      href: "#etape",
    },
    {
      id: 2,
      img: grid2,
      h3: "Je n'ai aucune idée du visuel",
      p: "Le design ? Nous pouvons nous en occuper. Pour nous aider et vous donner rapidement et en ligne une fourchette de prix,nous vous laissons remplir le formulaire suivant.",
      href: "#devis",
    },
  ]);

  useEffect(() => {
    var sliderdefault = tns({
      container: ".my-slider",
      gutter: 20,
      mouseDrag: false,
      loop: false,
      prevButton: ".precedent",
      nextButton: ".suivant",
      nav: false,
      responsive: {
        1600: {
          items: 1,
        },
        1024: {
          items: 1,
        },
        768: {
          items: 1,
        },
        480: {
          items: 1,
        },
      },
    });

    setSlider(sliderdefault);
  }, []);

  function goTo(slidenb, event) {
    console.log(event.target);
    var target = event.target;
    target.addEventListener("click", function () {
      slider.goTo(Number(slidenb));
    });
  }

  var switchdevis = 0;

  function devischange(choix) {
    switchdevis = choix;

    var buttonoui = document.getElementsByName("ouiidee")[0];
    var buttonnon = document.getElementsByName("nonidee")[0];
    var avantnone = document.getElementsByName("precedent")[0];
    console.log(buttonnon);

    if (switchdevis == 1) {
      //menu désactivé
      buttonoui.classList.add("animation_choixdevis");
      buttonoui.classList.remove("animation_choixdevis_reverse");

      buttonnon.classList.remove("animation_choixdevis");
      buttonnon.classList.add("animation_choixdevis_reverse");
      avantnone.classList.remove("displaynone");
    } else {
      //menu activé
      buttonoui.classList.remove("animation_choixdevis");
      buttonoui.classList.add("animation_choixdevis_reverse");

      buttonnon.classList.add("animation_choixdevis");
      buttonnon.classList.remove("animation_choixdevis_reverse");

      avantnone.classList.add("displaynone");
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
    const form = document.getElementsByName("form")[0];

    console.log(form);

    emailjs
      .sendForm(
        "service_3wkj3bk",
        "template_y4gdhbh",
        form,
        "AJy9gQABv4ckSwv4i"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const NavLink = ({ id, img, h3, p, isActive, href, onClick }) => {
    return (
      <a href={href}>
        <button
          key={id}
          className={isActive ? "active" : ""}
          onClick={() => {
            devischange(id);
            navigate(id);
          }}
        >
          <div
            className={`Prestation__grid__card marge_prestation ${
              isActive ? "active" : ""
            }`}
          >
            <div className="Prestation__grid__card__img">
              <img src={img} alt="grid1" />
            </div>
            <div className="Prestation__grid__card__content">
              <h3 className={` ${isActive ? "activeH3" : ""}`}> {h3}</h3>
              <p className={` ${isActive ? "activep" : ""}`}>{p}</p>
            </div>
          </div>
        </button>
      </a>
    );
  };

  const navigate = (id) => {
    setActive(id);
  };

  return (
    <div>
      <section className="Prestationdevis">
        <h2> Faites vous accompagner pour votre visibilité sur internet </h2>

        <div className="Prestation__grid">
          {dataTabs.map((item) => (
            <NavLink
              key={item.id}
              {...item}
              isActive={active === item.id}
              onClick={navigate}
            />
          ))}
        </div>

        <div className="Prestation__grid__form displaynone">
          <button name="precedent" className=" precedent displaynone">
            Retour
          </button>
          <div
            name="ouiidee"
            className="Prestation__grid__choix etape my-slider"
          >
            <div name="etape1 " id="etape" className="etape1 slide">
              <h2>Est-ce pour une création ou une refonte de site ?</h2>

              <div className="etape1__flex etape_margin">
                <button onClick={(e) => goTo(10, e)} className="Etape1_slide1">
                  Création
                </button>
                <button onClick={(e) => goTo(10, e)} className="Etape1_slide2">
                  Refonte (site déjà existant)
                </button>
              </div>
            </div>
            <div name="etape1 " className="etape1 slide ">
              <h2> Quel est l'objectif du site ? </h2>

              <div className="etape1__flex etape_margin">
                <button onClick={(e) => goTo(2, e)} className="Etape2_slide1">
                  Présenter mon activité
                </button>
                <button onClick={(e) => goTo(2, e)} className="Etape2_slide2">
                  Vendre / Mettre en relation
                </button>
              </div>
            </div>
            <div name="etape1 " className="etape1 slide ">
              <h2>Aspect graphique de votre site</h2>
              <div className="etape1__flex etape_margin">
                <button onClick={(e) => goTo(3, e)} className="Etape3_slide1">
                  J'ai déjà mes propres maquettes
                </button>
                <button onClick={(e) => goTo(3, e)} className="Etape3_slide2">
                  Un design simple mais efficace
                </button>
                <button onClick={(e) => goTo(3, e)} className="Etape3_slide3">
                  Un design recherché sur mesure
                </button>
              </div>
            </div>

            <div name="etape1 " className="etape1 slide ">
              <h2>
                Souhaitez-vous que votre site s’adapte aux mobiles et tablettes
                ?
              </h2>
              <div className="etape1__flex etape_margin">
                <button onClick={(e) => goTo(4, e)} className="Etape3_slide1">
                  Oui
                </button>
                <button onClick={(e) => goTo(4, e)} className="Etape3_slide2">
                  Non
                </button>
              </div>
            </div>

            <div name="etape1 " className="etape1 slide ">
              <h2>
                Combien de pages doit contenir mon site ? (approximativement) *
              </h2>

              <div className="etape1__flex etape_margin">
                <input type="range" min="1" max="100" />
              </div>

              <button onClick={(e) => goTo(5, e)} className="Etape2_slide1">
                Valider
              </button>
            </div>

            <div name="etape1 " className="etape1 slide ">
              <h2> Fournissez vous les images pour le contenu du site ? </h2>

              <div className="etape1__flex etape_margin">
                <button onClick={(e) => goTo(6, e)} className="Etape2_slide1">
                  Oui
                </button>
                <button onClick={(e) => goTo(6, e)} className="Etape2_slide2">
                  Non, j'ai besoin de création de contenu
                </button>
              </div>
            </div>

            <div name="etape1 " className="etape1 slide ">
              <h2>
                Quelles fonctionnalités je souhaite pour mon site internet ?
              </h2>

              <div className="etape1__flex etape_margin">
                <button onClick={(e) => goTo(7, e)} className="Etape2_slide1">
                  Oui
                </button>
                <button onClick={(e) => goTo(7, e)} className="Etape2_slide2">
                  Non, j'ai besoin de création de contenu
                </button>
              </div>
            </div>

            <div name="etape1 " className="etape1 slide ">
              <h2>
                Qui doit gérer l'hébergement et la gestion des noms de domaines
                ?
              </h2>

              <div className="etape1__flex etape_margin">
                <button onClick={(e) => goTo(8, e)} className="Etape2_slide1">
                  Vous
                </button>
                <button onClick={(e) => goTo(8, e)} className="Etape2_slide1">
                  Nous
                </button>
              </div>
            </div>

            <div name="etape1 " className="etape1 slide ">
              <h2>
                Souhaitez-vous profiter de mise à jour de sécurité et
                d'ergonomie ?
              </h2>

              <div className="etape1__flex etape_margin">
                <button onClick={(e) => goTo(9, e)} className="Etape2_slide1">
                  Oui
                </button>
                <button onClick={(e) => goTo(9, e)} className="Etape2_slide1">
                  Non
                </button>
              </div>
            </div>

            <div name="etape1 " className="etape1 slide ">
              <h2>Je souhaite mon site internet</h2>

              <div className="etape1__flex etape_margin">
                <button onClick={(e) => goTo(10, e)} className="Etape2_slide1">
                  Dès que possible
                </button>
                <button onClick={(e) => goTo(10, e)} className="Etape2_slide1">
                  Dans les 3 prochains mois
                </button>
                <button onClick={(e) => goTo(10, e)} className="Etape2_slide2">
                  Je ne suis pas particulièrement pressé
                </button>
              </div>
            </div>

            <div name="etape1 " className="etape1 slide ">
              <h2>
                Encore une dernière étape pour obtenir une estimation du prix :
              </h2>
              <div className="etape1__flex etape_margin formulaire">
                <label htmlFor="id"> Nom et Prénom * </label>
                <input
                  type="text"
                  name="id"
                  placeholder="Votre nom et prénom"
                />
                <div className="flexrow">
                  <div className="tel">
                    <label htmlFor="tel"> Téléphone </label>
                    <input type="text" name="tel" placeholder="Téléphone" />
                  </div>
                  <div className="mail">
                    <label htmlFor="mail"> Adresse e-mail *</label>
                    <input
                      type="text"
                      name="mail"
                      placeholder="Adresse e-mail"
                    />
                  </div>
                </div>

                <button onClick={(e) => goTo(11, e)} className="Etape2_slide2">
                  Obtenir une estimation du prix
                </button>
              </div>
            </div>
          </div>

          <button className="controle suivant ">Après</button>

          <div name="nonidee" className="Prestation__grid__choix contact">
            <div className="Devis_Form_titre">
              <h3>Contact</h3>
            </div>

            <form
              className="Devis_form"
              id="devis"
              name="form"
              onSubmit={sendEmail}
            >
              <label htmlFor="name"> Nom et Prénom</label>
              <input
                type="text"
                className="Devis_Form_text Devis_form_template"
                maxlength="256"
                name="name"
                data-name="name"
                placeholder="Nom * "
                id="name"
                required
              />
              <label htmlFor="Email"> Email</label>
              <input
                type="email"
                className="Devis_Form_email Devis_form_template"
                maxlength="256"
                name="mail"
                data-name="mail"
                placeholder="Email *"
                id="Email"
                required
              />
              <label htmlFor="phone"> Téléphone</label>
              <input
                type="tel"
                className="Devis_Form_tel Devis_form_template"
                maxlength="256"
                name="message"
                data-name="message"
                placeholder="Téléphone *"
                id="phone"
                required
              />
              <label htmlFor="Entreprise"> Entreprise</label>
              <input
                type="text"
                className="Devis_Form_entreprise Devis_form_template"
                maxlength="256"
                name="Entreprise"
                data-name="Entreprise"
                placeholder="Entreprise"
                id="Entreprise"
              />

              <input className="sendForm" type="submit" value="Send" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Devis;
