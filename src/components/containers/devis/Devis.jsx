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
import whatsapp from "../../../Images/WhatsApp.webp";
import interrogation from "../../../Images/interrogation.png";

const Devis = () => {
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

  return (
    <section className="Prestationdevis">
      <h2> Faites vous accompagner pour votre visibilité sur internet </h2>

      <div className="Prestation__grid__form">
        <form
          className="Devis_form formulaire"
          name="form"
          onSubmit={sendEmail}
        >
          <div className="formulaire__left">
            <h3> Contact Information</h3>
            <p>
              Fill up the form and our team will get back to you within 24 Hours
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
              <a href="https://wa.me/+33667632587?text=bonjour">
                <img src={whatsapp} alt="Whatsapp" />{" "}
              </a>
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
                name="tel"
                data-name="tel"
                placeholder="Téléphone"
                id="phone"
                required
              />
            </div>
            <div>
              <label htmlFor="travaux"> Nature des travaux *</label>
              <select
                type="select"
                className="select Devis_Form_entreprise Devis_form_template"
                name="travaux"
              >
                <option value="">-- Prestation souhaitez</option>
                <option value="creation">Création d'un site web</option>
                <option value="refonte">Refonte d'un site web</option>
              </select>
            </div>
            <div>
              <label htmlFor="type"> Type de site *</label>
              <select
                type="select"
                className="select Devis_Form_entreprise Devis_form_template"
                name="type"
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
                name="lien"
                data-name="lien"
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
                name="budget"
                data-name="budget"
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
    </section>
  );
};

export default Devis;
