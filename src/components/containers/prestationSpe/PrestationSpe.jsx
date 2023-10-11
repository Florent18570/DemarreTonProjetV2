import React from "react";
import { useParams } from "react-router-dom";

import creation1 from "../../../Images/creationsite1.png";
import creation2 from "../../../Images/creationsite2.png";

import ux1 from "../../../Images/ux1.png";
import ux2 from "../../../Images/ux2.png";

import referencement1 from "../../../Images/referencement1.png";
import referencement2 from "../../../Images/referencement2.png";

import maintenance1 from "../../../Images/maintenance1.png";
import maintenance2 from "../../../Images/maintenance2.png";




// import grid3 from "../../../Images/grid3.png";
import grid4 from "../../../Images/application-web-industrie-batail_log.webp";
import { NotFound } from "..";

const PrestationSpe = () => {
  const params = useParams();

  if (params.prestation === "creation") {
    return (
      <div>
        <div className="Header_global">
          <p className="Header_titre">DemarreTonProjet</p>
          <h1 className="Header_creation">Création de sites internet</h1>
          <p className="Header_description">
          Un site performant en toute simplicité : rapide, adapté et optimisé pour répondre à toutes vos exigences.
          Faites le choix d'un site qui vous ressemble, pour une expérience en ligne optimale.
      </p>
      <p className="Header_description">
       Votre devis en quelques secondes !
      </p>
      <div className="Header_blocbutton">
      <a href="../devis"><button className="Header_button"> Me contacter </button></a>
      <a href="../devis"><button className="Header_button"> Me contacter </button></a>
      </div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
    </div>


        <section className="Prestation">
          <h2 className="Prestationspe_titre">
            Faites vous accompagner dans la création de votre site internet
          </h2>
        </section>
        <div className="Prestationspe_presentation">
          <div className="Prestationspe_Presentation_text Presentationspe_Presentation_text_gauche">
            <h3 className="Prestationspe_Presentation_text_titre">
              Pourquoi avoir un site internet ?
            </h3>
            <p className="Prestationspe_Presentation_text_titre">
            Dans le monde d'aujourd'hui, où tout se passe en ligne, avoir un site internet est indispensable pour toute entreprise qui veut réussir. En effet, un site internet vous permet de :
<ul>
            <li>Développer votre visibilité: votre site internet est votre vitrine en ligne. Il vous permet de présenter vos produits ou services à un public plus large, 24h/24 et 7j/7.</li>
            <li>Augmenter vos ventes: un site internet vous permet de générer des leads et de conclure des ventes en ligne.</li>
            <li>Renforcer votre crédibilité: un site internet professionnel vous donne une image de marque positive et sérieuse.</li>
            <li>Offrir une meilleure expérience client: un site internet bien conçu permet aux clients de trouver facilement les informations qu'ils recherchent et de passer commande rapidement et facilement.</li>
</ul>

            </p>
          </div>
          <div className="Prestationspe_Presentation_Image">
            <img src={creation1} className="Prestationspe_Presentation_Image_img"/>
              </div>
        </div>
        <div className="Prestationspe_presentation">

        <div className="Prestationspe_Presentation_Image">
            <img src={creation2} className="Prestationspe_Presentation_Image_img"/>
              </div>
          <div className="Prestationspe_Presentation_text Presentationspe_Presentation_text_droite">
            <h3 className="Prestationspe_Presentation_text_titre">
            Comment augmenter vos ventes et votre chiffre d'affaires ?

            </h3>
            <p className="Prestationspe_Presentation_text_titre">
            

Un site internet optimisé pour le SEO est essentiel pour augmenter vos ventes et votre chiffre d'affaires. En effet, il vous permet d'être trouvé par les internautes qui recherchent des produits ou des services comme les vôtres.

Pour augmenter vos ventes et votre chiffre d'affaires grâce au SEO, faites-vous accompagner par un professionnel. Il analysera votre site internet actuel, développera une stratégie de référencement naturel adaptée à votre activité et mettra en place les actions nécessaires pour améliorer votre classement dans les moteurs de recherche.
            </p>
          </div>
          
        </div>
        <div className="Prestationspe_separation">
          <h2 className="Prestationspe_Separation_titre">
            Réaliser votre site web à nos côtés
          </h2>
          <a href="/devis">
            <button className="Prestationspe_Separation_button">
            Je réalise un devis
            </button>
          </a>
        </div>
        <div className="Prestationspe_explication">
          <h3 className="Prestationspe_Explication_accroche">
            DemarreTonProjet
          </h3>
          <h2 className="Prestationspe_Explication_titre">
            Création de sites internet sur mesure
          </h2>
          <div className="Prestationspe_Explication_detail">
            <div className="Prestationspe_Explication_Detail_text">
              <h3 className="Prestationspe_Explication_Detail_text_titre">
                Mettez toutes les chances de votre côtés pour convertir un
                client
              </h3>
              <p className="Prestationspe_Presentation_text_titre">
                DemarreTonProjet est une agence de création web idéal pour votre structure. Que votre souhait soit un site vitrine, une application ou un site e-commerce. Nous saurons répondre à toutes vos demandes pour vous proposer un prix en adéquation avec votre envie.
              </p>
              <a href="../devis"><button className="Prestationspe_Separation_button">Demander un avis d'expert</button></a>
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
                    <h4 className="Prestation_Explication_Detail_bloc2_titre">
                        Création application web
                    </h4>
                    <p className="Prestationspe_Explication_Detail_text_p">
                        Le besoin d'un logiciel web se fait de plus en plus ressentir. Simplicité d'utilisation, de gestion ou encore de réalisation, votre logiciel sera en mesure de remplir vos besoins.
                    </p>
                </div>
                <div className="Prestation_Explication_Detail_bloc1">
                    <h4 className="Prestation_Explication_Detail_bloc3_titre">
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
        <div>
        <div className="Header_global">
          <p className="Header_titre">DemarreTonProjet</p>
          <h1 className="Header_creation">UX Design</h1>
          <p className="Header_description">
      Explorer le pouvoir du UX Design pour concevoir des expériences en ligne intuitives et captivantes, mettant vos utilisateurs au centre de chaque interaction.
      </p>
      <p className="Header_description">
       Votre devis en quelques secondes !
      </p>
      <a href="../devis"><button className="Header_button"> Me contacter </button></a>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
    </div>


        <section className="Prestation">
          <h2 className="Prestationspe_titre">
            Création de votre design personnalisé
          </h2>
          
        </section>
        <div className="Prestationspe_presentation">
          <div className="Prestationspe_Presentation_text Presentationspe_Presentation_text_gauche">
            <h3 className="Prestationspe_Presentation_text_titre">
              Qu'est-ce que l'UX design ?
            </h3>
            <p className="Prestationspe_Presentation_text_titre">
            L'UX design est une discipline qui vise à créer des produits et des services qui soient agréables, efficaces et utiles pour les utilisateurs.
            </p><p className="Prestationspe_Presentation_text_titre">
Les UX designers utilisent des techniques et des méthodes pour comprendre les besoins et les motivations des utilisateurs, afin de créer des expériences qui répondent à leurs attentes.
</p><p className="Prestationspe_Presentation_text_titre">
L'UX design est un processus itératif qui commence par la recherche et l'analyse des utilisateurs.
            </p>
          </div>
          <div className="Prestationspe_Presentation_Image">
            <img src={ux1} className="Prestationspe_Presentation_Image_img"/>
              </div>
        </div>
        <div className="Prestationspe_presentation">

        <div className="Prestationspe_Presentation_Image">
            <img src={ux2} className="Prestationspe_Presentation_Image_img"/>
              </div>
          <div className="Prestationspe_Presentation_text Presentationspe_Presentation_text_droite">
            <h3 className="Prestationspe_Presentation_text_titre">
            Les avantages pour les utilisateurs

            </h3>
              <p className="Prestationspe_Presentation_text_titre">

Les avantages de l'UX design pour les utilisateurs sont nombreux, notamment :
</p><p className="Prestationspe_Presentation_text_titre">
<ul>
  <li>
  <strong>Une expérience plus agréable et intuitive</strong>: L'UX design permet de créer des produits et des services qui sont faciles à utiliser et à comprendre.
  </li>
  <li>
  <strong>Une plus grande efficacité</strong>: L'UX design peut aider les utilisateurs à atteindre leurs objectifs plus rapidement et plus facilement. 
  </li>
  <li>
  <strong>Une meilleure satisfaction</strong>: Les utilisateurs sont plus satisfaits des produits et des services qui sont bien conçus.

  </li>

</ul>

            </p>
          </div>
          
        </div>
        <div className="Prestationspe_separation">
          <h2 className="Prestationspe_Separation_titre">
            Réaliser votre design à nos côtés
          </h2>
          <a href="/devis">
            <button className="Prestationspe_Separation_button">
            Je réalise un devis
            </button>
          </a>
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
              <h3 className="Prestationspe_Explication_Detail_text_titre">
                Mettez toutes les chances de votre côtés pour convertir un
                client
              </h3>
              <p className="Prestationspe_Explication_Detail_text_p">
                DemarreTonProjet est une agence de création web idéal pour votre structure. Que votre souhait soit un site vitrine, une application ou un site e-commerce. Nous saurons répondre à toutes vos demandes pour vous proposer un prix en adéquation avec votre envie.
              </p>
              <button className="Prestationspe_Separation_button">Demander un avis d'expert</button>
            </div>
            <div className="Prestationspe_Explication_Detail_description">
                <div className="Prestation_Explication_Detail_bloc1">
                    <h4 className="Prestation_Explication_Detail_bloc1_titre">
                        UI Design
                    </h4>
                    <p className="Prestationspe_Explication_Detail_text_p">
                        La création de votre site vitrine peut avoir un impact important sur le placement de votre entreprise. Gain en visibilité, en future client mais également en prestance grace à votre site internet. Tous ces avantages vous seront offert en créant votre site web.
                    </p>
                </div>
                <div className="Prestation_Explication_Detail_bloc1">
                    <h4 className="Prestation_Explication_Detail_bloc2_titre">
                        UX Design
                    </h4>
                    <p className="Prestationspe_Explication_Detail_text_p">
                        Le besoin d'un logiciel web se fait de plus en plus ressentir. Simplicité d'utilisation, de gestion ou encore de réalisation, votre logiciel sera en mesure de remplir vos besoins.
                    </p>
                </div>
                <div className="Prestation_Explication_Detail_bloc1">
                    <h4 className="Prestation_Explication_Detail_bloc3_titre">
                        Palette de couleur
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
  } else if (params.prestation === "referencement") {
    return (
      <div>
      <div className="Header_global">
        <p className="Header_titre">DemarreTonProjet</p>
        <h1 className="Header_creation">UX Design</h1>
        <p className="Header_description">
    Explorer le pouvoir du UX Design pour concevoir des expériences en ligne intuitives et captivantes, mettant vos utilisateurs au centre de chaque interaction.
    </p>
    <p className="Header_description">
     Votre devis en quelques secondes !
    </p>
    <a href="../devis"><button className="Header_button"> Me contacter </button></a>
    <div className="cube"></div>
    <div className="cube"></div>
    <div className="cube"></div>
    <div className="cube"></div>
    <div className="cube"></div>
    <div className="cube"></div>
  </div>


      <section className="Prestation">
        <h2 className="Prestationspe_titre">
          Création de votre design personnalisé
        </h2>
        
      </section>
      <div className="Prestationspe_presentation">
        <div className="Prestationspe_Presentation_text Presentationspe_Presentation_text_gauche">
          <h3 className="Prestationspe_Presentation_text_titre">
            Qu'est-ce que l'UX design ?
          </h3>
          <p className="Prestationspe_Presentation_text_titre">
          L'UX design est une discipline qui vise à créer des produits et des services qui soient agréables, efficaces et utiles pour les utilisateurs.
          </p><p className="Prestationspe_Presentation_text_titre">
Les UX designers utilisent des techniques et des méthodes pour comprendre les besoins et les motivations des utilisateurs, afin de créer des expériences qui répondent à leurs attentes.
</p><p className="Prestationspe_Presentation_text_titre">
L'UX design est un processus itératif qui commence par la recherche et l'analyse des utilisateurs.
          </p>
        </div>
        <div className="Prestationspe_Presentation_Image">
          <img src={referencement1} className="Prestationspe_Presentation_Image_img"/>
            </div>
      </div>
      <div className="Prestationspe_presentation">

      <div className="Prestationspe_Presentation_Image">
          <img src={referencement2} className="Prestationspe_Presentation_Image_img"/>
            </div>
        <div className="Prestationspe_Presentation_text Presentationspe_Presentation_text_droite">
          <h3 className="Prestationspe_Presentation_text_titre">
          Les avantages pour les utilisateurs

          </h3>
            <p className="Prestationspe_Presentation_text_titre">

Les avantages de l'UX design pour les utilisateurs sont nombreux, notamment :
</p><p className="Prestationspe_Presentation_text_titre">
<ul>
<li>
<strong>Une expérience plus agréable et intuitive</strong>: L'UX design permet de créer des produits et des services qui sont faciles à utiliser et à comprendre.
</li>
<li>
<strong>Une plus grande efficacité</strong>: L'UX design peut aider les utilisateurs à atteindre leurs objectifs plus rapidement et plus facilement. 
</li>
<li>
<strong>Une meilleure satisfaction</strong>: Les utilisateurs sont plus satisfaits des produits et des services qui sont bien conçus.

</li>

</ul>

          </p>
        </div>
        
      </div>
      <div className="Prestationspe_separation">
        <h2 className="Prestationspe_Separation_titre">
          Réaliser votre design à nos côtés
        </h2>
        <a href="/devis">
          <button className="Prestationspe_Separation_button">
          Je réalise un devis
          </button>
        </a>
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
            <h3 className="Prestationspe_Explication_Detail_text_titre">
              Mettez toutes les chances de votre côtés pour convertir un
              client
            </h3>
            <p className="Prestationspe_Explication_Detail_text_p">
              DemarreTonProjet est une agence de création web idéal pour votre structure. Que votre souhait soit un site vitrine, une application ou un site e-commerce. Nous saurons répondre à toutes vos demandes pour vous proposer un prix en adéquation avec votre envie.
            </p>
            <button className="Prestationspe_Separation_button">Demander un avis d'expert</button>
          </div>
          <div className="Prestationspe_Explication_Detail_description">
              <div className="Prestation_Explication_Detail_bloc1">
                  <h4 className="Prestation_Explication_Detail_bloc1_titre">
                      UI Design
                  </h4>
                  <p className="Prestationspe_Explication_Detail_text_p">
                      La création de votre site vitrine peut avoir un impact important sur le placement de votre entreprise. Gain en visibilité, en future client mais également en prestance grace à votre site internet. Tous ces avantages vous seront offert en créant votre site web.
                  </p>
              </div>
              <div className="Prestation_Explication_Detail_bloc1">
                  <h4 className="Prestation_Explication_Detail_bloc2_titre">
                      UX Design
                  </h4>
                  <p className="Prestationspe_Explication_Detail_text_p">
                      Le besoin d'un logiciel web se fait de plus en plus ressentir. Simplicité d'utilisation, de gestion ou encore de réalisation, votre logiciel sera en mesure de remplir vos besoins.
                  </p>
              </div>
              <div className="Prestation_Explication_Detail_bloc1">
                  <h4 className="Prestation_Explication_Detail_bloc3_titre">
                      Palette de couleur
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
  } else if (params.prestation === "maintenance") {
    return (
      <div>
      <div className="Header_global">
        <p className="Header_titre">DemarreTonProjet</p>
        <h1 className="Header_creation">UX Design</h1>
        <p className="Header_description">
    Explorer le pouvoir du UX Design pour concevoir des expériences en ligne intuitives et captivantes, mettant vos utilisateurs au centre de chaque interaction.
    </p>
    <p className="Header_description">
     Votre devis en quelques secondes !
    </p>
    <a href="../devis"><button className="Header_button"> Me contacter </button></a>
    <div className="cube"></div>
    <div className="cube"></div>
    <div className="cube"></div>
    <div className="cube"></div>
    <div className="cube"></div>
    <div className="cube"></div>
  </div>


      <section className="Prestation">
        <h2 className="Prestationspe_titre">
          Création de votre design personnalisé
        </h2>
        
      </section>
      <div className="Prestationspe_presentation">
        <div className="Prestationspe_Presentation_text Presentationspe_Presentation_text_gauche">
          <h3 className="Prestationspe_Presentation_text_titre">
            Qu'est-ce que l'UX design ?
          </h3>
          <p className="Prestationspe_Presentation_text_titre">
          L'UX design est une discipline qui vise à créer des produits et des services qui soient agréables, efficaces et utiles pour les utilisateurs.
          </p><p className="Prestationspe_Presentation_text_titre">
Les UX designers utilisent des techniques et des méthodes pour comprendre les besoins et les motivations des utilisateurs, afin de créer des expériences qui répondent à leurs attentes.
</p><p className="Prestationspe_Presentation_text_titre">
L'UX design est un processus itératif qui commence par la recherche et l'analyse des utilisateurs.
          </p>
        </div>
        <div className="Prestationspe_Presentation_Image">
          <img src={maintenance1} className="Prestationspe_Presentation_Image_img"/>
            </div>
      </div>
      <div className="Prestationspe_presentation">

      <div className="Prestationspe_Presentation_Image">
          <img src={maintenance2} className="Prestationspe_Presentation_Image_img"/>
            </div>
        <div className="Prestationspe_Presentation_text Presentationspe_Presentation_text_droite">
          <h3 className="Prestationspe_Presentation_text_titre">
          Les avantages pour les utilisateurs

          </h3>
            <p className="Prestationspe_Presentation_text_titre">

Les avantages de l'UX design pour les utilisateurs sont nombreux, notamment :
</p><p className="Prestationspe_Presentation_text_titre">
<ul>
<li>
<strong>Une expérience plus agréable et intuitive</strong>: L'UX design permet de créer des produits et des services qui sont faciles à utiliser et à comprendre.
</li>
<li>
<strong>Une plus grande efficacité</strong>: L'UX design peut aider les utilisateurs à atteindre leurs objectifs plus rapidement et plus facilement. 
</li>
<li>
<strong>Une meilleure satisfaction</strong>: Les utilisateurs sont plus satisfaits des produits et des services qui sont bien conçus.

</li>

</ul>

          </p>
        </div>
        
      </div>
      <div className="Prestationspe_separation">
        <h2 className="Prestationspe_Separation_titre">
          Réaliser votre design à nos côtés
        </h2>
        <a href="/devis">
          <button className="Prestationspe_Separation_button">
          Je réalise un devis
          </button>
        </a>
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
            <h3 className="Prestationspe_Explication_Detail_text_titre">
              Mettez toutes les chances de votre côtés pour convertir un
              client
            </h3>
            <p className="Prestationspe_Explication_Detail_text_p">
              DemarreTonProjet est une agence de création web idéal pour votre structure. Que votre souhait soit un site vitrine, une application ou un site e-commerce. Nous saurons répondre à toutes vos demandes pour vous proposer un prix en adéquation avec votre envie.
            </p>
            <button className="Prestationspe_Separation_button">Demander un avis d'expert</button>
          </div>
          <div className="Prestationspe_Explication_Detail_description">
              <div className="Prestation_Explication_Detail_bloc1">
                  <h4 className="Prestation_Explication_Detail_bloc1_titre">
                      UI Design
                  </h4>
                  <p className="Prestationspe_Explication_Detail_text_p">
                      La création de votre site vitrine peut avoir un impact important sur le placement de votre entreprise. Gain en visibilité, en future client mais également en prestance grace à votre site internet. Tous ces avantages vous seront offert en créant votre site web.
                  </p>
              </div>
              <div className="Prestation_Explication_Detail_bloc1">
                  <h4 className="Prestation_Explication_Detail_bloc2_titre">
                      UX Design
                  </h4>
                  <p className="Prestationspe_Explication_Detail_text_p">
                      Le besoin d'un logiciel web se fait de plus en plus ressentir. Simplicité d'utilisation, de gestion ou encore de réalisation, votre logiciel sera en mesure de remplir vos besoins.
                  </p>
              </div>
              <div className="Prestation_Explication_Detail_bloc1">
                  <h4 className="Prestation_Explication_Detail_bloc3_titre">
                      Palette de couleur
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
  };
};

  export default PrestationSpe;
