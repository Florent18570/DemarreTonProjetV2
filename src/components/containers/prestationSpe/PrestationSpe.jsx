import React from "react";
import { useParams } from "react-router-dom";

// import grid1 from "../../../Images/grid.png";
// import grid2 from "../../../Images/grid2.png";
// import grid3 from "../../../Images/grid3.png";
import grid4 from "../../../Images/application-web-industrie-batail_log.webp";
import { NotFound } from "..";

const PrestationSpe = () => {
  const params = useParams();

  if (params.prestation === "creation") {
    return (
      <div>
        <section className="Prestation">
          <h2 className="Prestationspe_titre">
            Création de votre site internet
          </h2>
        </section>
        <div className="Prestationspe_presentation">
          <div className="Prestationspe_Presentation_text">
            <h3 className="Prestationspe_Presentation_text_titre">
              Notre équipe, notre expertise
            </h3>
            <p className="Prestationspe_Presentation_text_titre">
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla blbla bla
              bla bla bla bla bla bla bla bla bla bla bla bla blbla bla bla bla
              bla bla bla bla bla bla bla bla bla bla blbla bla bla bla bla bla
              bla bla bla bla bla bla bla bla blbla bla bla bla bla bla bla bla
              bla bla bla bla bla bla blbla bla bla bla bla bla bla bla bla bla
              bla bla bla bla blbla bla bla bla bla bla bla bla bla bla bla bla
              bla bla blbla bla bla bla bla bla bla bla bla bla bla bla bla bla
              blbla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla blab{" "}
            </p>
          </div>
          <div className="Prestationspe_Presentation_Image">
            <img src={grid4} alt="grid4"></img>
          </div>
        </div>
        <div className="Prestationspe_separation">
          <h2 className="Prestationspe_Separation_titre">
            Réaliser votre site web à nos côtés
          </h2>
          <button className="Prestationspe_Separation_button">
            Je réalise un devis
          </button>
        </div>
        <div className="Prestationspe_explication">
          <h3 className="Prestationspe_Explication_accroche">
            Une méthode simple et efficace
          </h3>
          <h2 className="Prestationspe_Explication_titre">
            Commercialiser vos produits ou services en ligne
          </h2>
          <div className="Prestationspe_Explication_detail">
            <div className="Prestationspe_Explication_Detail_text">
              <h3>
                Mettez toutes les chances de votre côtés pour convertir un
                client
              </h3>
              <p>
                bla bla bla bla faudra que je réflechisse à mettre un texte
                intéressant
              </p>
              <button>Demander un avis d'expert</button>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (params.prestation === "uxdesign") {
    return (
      <section className="Prestation">
        <h2 className="Prestationspe_titre">UX Design</h2>
      </section>
    );
  } else if (params.prestation === "referencement") {
    return (
      <section className="Prestation">
        <h2 className="Prestationspe_titre">Référencement naturel</h2>
      </section>
    );
  } else if (params.prestation === "maintenance") {
    return (
      <section className="Prestation">
        <h2 className="Prestationspe_titre">Maintenance de votre site</h2>
      </section>
    );
  } else {
    return (
      <div>
        <NotFound />
      </div>
    );
  }
};

export default PrestationSpe;
