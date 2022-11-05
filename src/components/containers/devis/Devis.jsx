import React from "react";


const Devis = () => {

  function etape2(){
    document.getElementById("num").style.visibility = "collapse";
    document.getElementById("num2").style.visibility = "visible";

  }
  return <div className="devis">
    
      <div className="Devis_bloc" id="num">
        <h3>Etape 1</h3>
        <input type="text"></input>
        <div className="Devis_Bloc_choix">

          <button onClick={etape2}>Retour</button>
          <button>Suivant</button>
        </div>
      
      
      </div>

      <div className="Devis_bloc_2" id="num2">
        <h3>Etape 2</h3>
        <input type="text"></input>
        <div className="Devis_Bloc_choix">

          <button>Retour</button>
          <button>Suivant</button>
        </div>
      
      
      </div>
    
    </div>
};

export default Devis;
