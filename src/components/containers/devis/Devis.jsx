import React, { useState, useEffect, useRef } from "react";
import grid1 from "../../../Images/grid.png";
import grid2 from "../../../Images/grid2.png";
import emailjs from "@emailjs/browser";
import { tns } from "../../../../node_modules/tiny-slider/src/tiny-slider";

import tel from "../../../Images/tel.webp";
import mail from "../../../Images/mail.webp";
import localisation from "../../../Images/localisation.webp";

import facebook from "../../../Images/facebook.webp";
import instagram from "../../../Images/instagram.webp";
import twitter from "../../../Images/twitter.webp";
import interrogation from "../../../Images/interrogation.png";

const Devis = () => {
  const [slider, setSlider] = useState("");
  const [active, setActive] = useState(null);
  const [range, setRange] = useState(0);
  const ref_buttonleft = useRef(null);
  const ref_buttonright = useRef(null);
  const [dataTabs] = useState([
    {
      id: 1,
      img: grid1,
      h3: " J'ai une idée de site",
      p: "Afin de concevoir un site au plus proche de votre souhait,nous vous laissons remplir le formulaire de contact afin quenous puissions répondre à votre demande au plus vite.",
    },
    {
      id: 2,
      img: grid2,
      h3: "Je n'ai aucune idée du visuel",
      p: "Le design ? Nous pouvons nous en occuper. Pour nous aider et vous donner rapidement et en ligne une fourchette de prix,nous vous laissons remplir le formulaire suivant.",
    },
  ]);

  const executeScroll1 = (ref) => {
    ref_buttonright.current.scrollIntoView({
      inline: "end",
      behavior: "smooth",
    });
    // console.log(ref);
  };
  const executeScroll2 = (ref) => {
    // ref.current.scrollIntoView({ inline: "center", behavior: "smooth" });
    // console.log(ref);
  };
  const navigate = (id) => {
    setActive(id);
  };

  useEffect(() => {
    var sliderdefault = tns({
      container: ".my-slider",
      gutter: 20,
      swipeAngle: false,
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

  function valueRange(e) {
    setRange(e.target.value);
  }

  var switchdevis = 0;

  function devischange(choix) {
    switchdevis = choix;

    var buttonoui = document.getElementsByName("ouiidee")[0];
    var buttonnon = document.getElementsByName("nonidee")[0];
    var avantnone = document.getElementsByName("precedent")[0];
    console.log(buttonnon);

    if (switchdevis === 1) {
      //menu désactivé
      buttonoui.classList.add("animation_choixdevis");
      buttonoui.classList.remove("animation_choixdevis_reverse");

      buttonnon.classList.remove("animation_choixdevis");
      buttonnon.classList.add("animation_choixdevis_reverse");
      buttonnon.classList.remove("contact");
      avantnone.classList.remove("displaynone");
    } else {
      //menu activé
      buttonoui.classList.remove("animation_choixdevis");
      buttonoui.classList.add("animation_choixdevis_reverse");

      buttonnon.classList.add("contact");
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

  const NavLink = ({
    id,
    img,
    h3,
    p,
    isActive,
    href,
    ref,
    onClick,
    functionn,
  }) => {
    return (
      <a href={href}>
        <button
          key={id}
          className={isActive ? "active" : ""}
          onClick={() => {
            navigate(id);
            devischange(id);
            executeScroll1();
          }}
        >
          {console.log(functionn)}
          <div
            className={`Prestation__grid__card marge_prestation ${
              isActive ? "active" : ""
            }`}
          >
            <div className="Prestation__grid__card__img">
              <img className="devisImage" src={img} alt="grid1" />
            </div>
            <div className="Prestation__grid__card__content">
              <h3 className={`${isActive ? "activeH3 devish3" : "devish3"}`}>
                {h3}
              </h3>
              <p className={`${isActive ? "activep devisp" : "devisp"}`}>{p}</p>
            </div>
          </div>
        </button>
      </a>
    );
  };

  return (
    <div ref={ref_buttonleft}>
      <section className="Prestationdevis">
        <h2> Faites vous accompagner pour votre visibilité sur internet </h2>

        <div className="Prestation__grid">
          {dataTabs.map((item) => (
            <NavLink key={item.id} {...item} isActive={active === item.id} />
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
                <button onClick={(e) => goTo(1, e)} className="Etape1_slide1">
                  Création
                </button>
                <button onClick={(e) => goTo(1, e)} className="Etape1_slide2">
                  Refonte (site déjà existant)
                </button>
              </div>
              <div className="aide">
                <img src={interrogation} alt="Point d'interogation" />
                <p>
                  Vous ne disposez pas encore d'un site web et souhaitez y
                  remédier choisissez une création de site web. Au contaire, si
                  vous avez déjà un site web mais souhaitez améliorer ses
                  performances, optez pour une refonte. Notez qu'il est
                  important d'avoir une connaissance approfondie des
                  performances du site existant avant de réaliser une refonte.
                  Pour cela, il est recommandé de faire réaliser un audit du
                  site en amont.
                </p>
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
              <div className="aide">
                <img src={interrogation} alt="Point d'interogation" />
                <p>
                  Un site web destiné à présenter une activité peut être utilisé
                  pour donner des informations sur l'entreprise ou
                  l'organisation, ses produits ou services, son histoire, ses
                  valeurs, etc. Il peut également fournir des informations de
                  contact et permettre aux visiteurs de s'inscrire à une
                  newsletter ou de suivre l'entreprise sur les réseaux sociaux.
                  Un site web de vente, en revanche, a pour but principal de
                  permettre aux clients d'acheter des produits ou des services
                  en ligne. Il peut comporter des fonctionnalités telles qu'un
                  panier d'achat, un système de paiement en ligne sécurisé, des
                  avis de clients, etc. Le site peut également offrir des
                  options de livraison et de retour pour les produits achetés.
                </p>
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
              <div className="aide">
                <img src={interrogation} alt="Point d'interogation" />
                <p>
                  Si vous souhaitez attirer les clients grâce à une
                  communication digitale efficace, ne négligez pas l'importance
                  de la forme ! Un site web bien conçu, agréable à utiliser et
                  pensé pour l'utilisateur vous aidera à susciter la confiance
                  de vos prospects. De plus, une identité visuelle immédiatement
                  reconnaissable vous permettra d'avoir plus d'impact et
                  d'accroître votre notoriété. Pour bénéficier de tous ces
                  avantages, il est indispensable d'inclure une prestation de
                  webdesign dans la création de votre site internet. Nous
                  proposons 3 offres adaptées à vos besoins : un design simple
                  et efficace, un design sur mesure pour correspondre à votre
                  identité visuelle, ou encore la possibilité de discuter de
                  votre maquette pour obtenir le meilleur design et la meilleure
                  expérience utilisateur possible. Faites le choix de la qualité
                  pour votre communication digitale !
                </p>
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
              <div className="aide">
                <img src={interrogation} alt="Point d'interogation" />
                <p>
                  Avoir un site responsive est crucial pour la réussite de votre
                  entreprise en ligne. Un site responsive est un site qui
                  s'adapte automatiquement à la taille de l'écran de
                  l'utilisateur, qu'il utilise un ordinateur de bureau, une
                  tablette ou un smartphone. En outre, un site responsive vous
                  permet d'améliorer votre référencement sur les moteurs de
                  recherche. Les moteurs de recherche tels que Google accordent
                  une plus grande importance aux sites qui offrent une
                  expérience utilisateur optimale sur tous les dispositifs, ce
                  qui peut vous aider à améliorer votre classement dans les
                  résultats de recherche. Cela vous permet de plus de vous
                  positionner comme une entreprise innovante et à la pointe de
                  la technologie, ce qui peut vous aider à attirer de nouveaux
                  clients.Ne manquez pas l'occasion d'adopter cette technologie
                  pour votre entreprise en ligne.
                </p>
              </div>
            </div>

            <div name="etape1 " className="etape1 slide ">
              <h2>
                Combien de pages doit contenir mon site ? (approximativement) *
              </h2>

              <div className="etape1__flex etape_margin">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={range}
                  onChange={(e) => valueRange(e)}
                />
                <output id="rangevalue" className="range">
                  {range}
                </output>
              </div>

              <button onClick={(e) => goTo(5, e)} className="Etape2_slide1">
                Valider
              </button>
              <div className="aide">
                <img src={interrogation} alt="Point d'interogation" />
                <p>
                  Il est important de noter que le nombre de pages d'un site web
                  peut avoir un impact significatif sur son prix. Plus un site
                  web comporte de pages, plus il sera coûteux à développer et à
                  maintenir.{" "}
                </p>
              </div>
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
              <div className="aide">
                <img src={interrogation} alt="Point d'interogation" />
                <p>
                  Les images sont un élément crucial pour un site web, car elles
                  permettent d'illustrer le contenu et de le rendre plus
                  attractif et facile à comprendre pour les visiteurs. Elles
                  peuvent également aider à renforcer l'identité visuelle de
                  l'entreprise ou de l'organisation et à renforcer l'impact
                  émotionnel des messages présentés sur le site. Les images
                  peuvent être utilisées pour montrer des produits ou des
                  services, pour mettre en valeur des événements ou des
                  activités, etc.
                  <br></br>
                  Il est important de choisir des images de qualité pour le site
                  web, car des images de mauvaise qualité peuvent nuire à
                  l'expérience utilisateur et à l'image de l'entreprise. Les
                  images doivent également être pertinentes et correspondre au
                  contenu du site pour renforcer l'efficacité du message. Enfin,
                  il est important de respecter les droits d'auteur et de ne pas
                  utiliser des images protégées sans autorisation.
                </p>
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
              <div className="aide">
                <img src={interrogation} alt="Point d'interogation" />
                <p>
                  Les possibilités de création pour un site web sont presque
                  illimitées grâce aux nombreux outils et technologies
                  disponibles. Un site web peut être conçu pour présenter une
                  entreprise ou une organisation, pour vendre des produits ou
                  des services en ligne, pour permettre aux utilisateurs de
                  s'inscrire à un service ou de créer un compte personnel, pour
                  partager des informations ou des contenus, etc. Un site web
                  peut également comporter des fonctionnalités interactives
                  telles que des formulaires en ligne, des forums de discussion,
                  des sondages, des outils de géolocalisation, des interfaces de
                  réseaux sociaux, etc. De plus, les sites web peuvent être
                  optimisés pour les appareils mobiles pour permettre aux
                  utilisateurs de naviguer facilement sur les sites depuis leur
                  smartphone ou leur tablette. En somme, les possibilités de
                  création pour un site web sont vastes et permettent de
                  répondre à de nombreux besoins et objectifs différents.
                </p>
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
              <div className="aide">
                <img src={interrogation} alt="Point d'interogation" />
                <p>
                  Il y a plusieurs avantages à laisser au développeur la gestion
                  de l'hébergement du site web. Tout d'abord, cela peut être
                  plus rentable à long terme, car le développeur sera en mesure
                  de choisir l'hébergement qui offre le meilleur rapport
                  qualité-prix pour le site en question. En outre, le
                  développeur sera mieux placé pour optimiser les performances
                  du site en fonction de ses besoins spécifiques, ce qui peut
                  améliorer l'expérience utilisateur.
                </p>
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
              <div className="aide">
                <img src={interrogation} alt="Point d'interogation" />
                <p>
                  Il y a plusieurs avantages à choisir une offre de maintenance
                  pour un site web. Tout d'abord, cela permet de s'assurer que
                  le site fonctionne correctement et est en bonne santé. De
                  plus, une offre de maintenance permet de faire évoluer votre
                  site en fonction de vos besoins et de votre entreprise. Enfin,
                  cela peut vous aider à économiser de l'argent à long terme en
                  vous offrant une assistance professionnelle pour gérer votre
                  site.
                </p>
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
              <div className="aide">
                <img src={interrogation} alt="Point d'interogation" />
                <p>
                  Il est important de prendre en compte la rapidité de création
                  d'un site lors de la détermination de son prix, car plus le
                  site doit être créé rapidement, plus il y aura de travail à
                  accomplir pour le créer dans les délais impartis. Cela peut
                  entraîner des coûts supplémentaires pour le développeur ou
                  l'agence en charge de la création du site, ce qui se reflétera
                  dans le prix final. Il est donc important de discuter des
                  délais et des attentes en matière de rapidité de création avec
                  le client avant de déterminer le prix du projet.
                </p>
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

          <div
            ref={ref_buttonright}
            name="nonidee"
            className="Prestation__grid__choix   "
          >
            <form
              className="Devis_form formulaire"
              name="form"
              onSubmit={sendEmail}
            >
              <div className="formulaire__left">
                <h3> Contact Information</h3>
                <p>
                  Fill up the form and our team will get back to you within 24
                  Hours
                </p>
                <div className="formulaire__left_all">
                  <div className="formulaire__left_1">
                    <img src={tel} alt="" />
                    <p> 07 62 06 88 30</p>
                  </div>
                  <div className="formulaire__left_1">
                    <img src={tel} alt="" />
                    <p> 06 67 63 25 87</p>
                  </div>
                  <div className="formulaire__left_2">
                    <img src={mail} alt="" />
                    <p> demarreTonProjet18@gmail.com</p>
                  </div>
                  <div className="formulaire__left_3 ">
                    <img src={localisation} alt="" />
                    <p> 30 rue du bois joly</p>
                  </div>
                </div>
                <div className="formulaire__left_4">
                  <img src={instagram} alt="instagram" />
                  <img src={twitter} alt="Twitter" />
                  <img src={facebook} alt="facebook" />
                </div>
              </div>

              <div className="contact__grid">
                <div>
                  <label htmlFor="name">Nom *</label>
                  <input
                    type="text"
                    className="Devis_Form_text Devis_form_template"
                    maxlength="256"
                    name="First_name"
                    data-name="First_name"
                    placeholder="John"
                    id="First_name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="name">Prénom *</label>
                  <input
                    type="text"
                    className="Devis_Form_text Devis_form_template"
                    maxlength="256"
                    name="Last_name"
                    data-name="Last_name"
                    placeholder="Doe"
                    id="Last_name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="Email"> Email * </label>
                  <input
                    type="email"
                    className="Devis_Form_email Devis_form_template"
                    maxlength="256"
                    name="mail"
                    data-name="mail"
                    placeholder="exemple@gmail.com"
                    id="Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone"> Téléphone</label>
                  <input
                    type="tel"
                    className="Devis_Form_tel Devis_form_template"
                    maxlength="256"
                    name="message"
                    data-name="message"
                    placeholder="Téléphone"
                    id="phone"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="Entreprise"> Nature des travaux *</label>
                  <select
                    type="select"
                    className="select Devis_Form_entreprise Devis_form_template"
                    name="Entreprise"
                  >
                    <option value="">-- Prestation souhaitez</option>
                    <option value="creation">Création d'un site web</option>
                    <option value="refonte">Refonte d'un site web</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="Entreprise"> Type de site *</label>
                  <select
                    type="select"
                    className="select Devis_Form_entreprise Devis_form_template"
                    name="Entreprise"
                  >
                    <option value="">-- Type de site </option>
                    <option value="creation">Site « carte de visite »</option>
                    <option value="e-commerce">Site e-commerce</option>
                    <option value="Application">Application web</option>
                    <option value="refonte">Sur-mesure</option>
                  </select>
                </div>

                <div className="ligne">
                  <label htmlFor="siteExistant">
                    Si vous avez déjà un site, indiquez son URL
                  </label>

                  <input
                    type="text"
                    className="Devis_Form_tel Devis_form_template"
                    maxlength="256"
                    name="message"
                    data-name="message"
                    placeholder="URL"
                    id="siteExistant"
                  />
                </div>
                <div>
                  <label htmlFor="Budget">Budget *</label>

                  <input
                    type="text"
                    className="Devis_Form_tel Devis_form_template"
                    maxlength="256"
                    name="message"
                    data-name="message"
                    placeholder=""
                    id="Budget"
                  />
                </div>
                <div></div>

                <div className="ligne">
                  <label htmlFor="projet">Expliquez nous votre projet</label>

                  <textarea
                    type="siteExistant"
                    className="Devis_Form_tel Devis_form_template"
                    name="message"
                    data-name="message"
                    id="projet"
                  />
                </div>
                <div></div>
                <div className="div_sendForm">
                  <input className="sendForm" type="submit" value="Envoyer" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Devis;
