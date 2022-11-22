import React from "react";
import { useParams, Link } from "react-router-dom";

import grid1 from "../../../Images/grid.png";
import grid2 from "../../../Images/grid2.png";
import grid3 from "../../../Images/grid3.png";
import grid4 from "../../../Images/grid4.png";
import { NotFound} from "..";


const PrestationSpe = () => {

    const params = useParams();

    if(params.prestation == "creation"){
        return (
            <section className="Prestation">
              <h2 className="Prestationspe_titre">Création de votre site internet</h2>
            </section>
          );
    }else if( params.prestation == "uxdesign"){
        return (
            <section className="Prestation">
              <h2 className="Prestationspe_titre">UX Design</h2>
            </section>
          ); 
    }else if( params.prestation == "referencement"){
        return (
            <section className="Prestation">
              <h2 className="Prestationspe_titre">Référencement naturel</h2>
            </section>
          ); 
    }else if( params.prestation == "maintenance"){
        return (
            <section className="Prestation">
              <h2 className="Prestationspe_titre">Maintenance de votre site</h2>
            </section>
          ); 
    }else{
        return (
        <div>
            <NotFound/>
        </div>
        );
    }
  
};

export default PrestationSpe;
