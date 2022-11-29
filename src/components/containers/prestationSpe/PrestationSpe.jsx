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
              <h4 className="Prestationspe_Explication_Detail_text_titre">
                Mettez toutes les chances de votre côtés pour convertir un
                client
              </h4>
              <p className="Prestationspe_Explication_Detail_text_p">
                DemarreTonProjet est une agence de création web idéal pour votre structure. Que votre souhait soit un site vitrine, une application ou un site e-commerce. Nous saurons répondre à toutes vos demandes pour vous proposer un prix en adéquation avec votre envie.
              </p>
              <button className="Prestationspe_Explication_Detail_text_bouton">Demander un avis d'expert</button>
            </div>
            <div className="Prestationspe_Explication_Detail_description">
                <div className="Prestation_Explication_Detail_bloc1">
                    <h4 className="Prestation_Explication_Detail_bloc1_titre">
                        Création site vitrine
                    </h4>
                    <p className="Prestationspe_Explication_Detail_text_p">
                        La création de votre site vitrine peut avoir un impact important sur le placement de votre entreprise. Gain en visibilité, en future client mais également en prestance grace à votre site internet. Tous ces avantages vous seront offert en créant votre site web.
                    </p>
                </div>
                <div className="Prestation_Explication_Detail_bloc1">
                    <h4 className="Prestation_Explication_Detail_bloc1_titre">
                        Création application web
                    </h4>
                    <p className="Prestationspe_Explication_Detail_text_p">
                        Le besoin d'un logiciel web se fait de plus en plus ressentir. Simplicité d'utilisation, de gestion ou encore de réalisation, votre logiciel sera en mesure de remplir vos besoins.
                    </p>
                </div>
                <div className="Prestation_Explication_Detail_bloc1">
                    <h4 className="Prestation_Explication_Detail_bloc1_titre">
                        Création site e-commerce
                    </h4>
                    <p className="Prestationspe_Explication_Detail_text_p">
                        Avec l'augmentation du trafic internet et des achats en ligne, disposer de sont propre site de vente en ligne devient une condition essentiel dans l'air du temps. Nos outils et technologies peuvent répondre à vos exigences pour augmenter votre chiffre d'affaire.
                    </p>
                </div>
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
