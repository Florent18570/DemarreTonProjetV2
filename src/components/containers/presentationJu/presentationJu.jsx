import React from "react";

const stockData = [
  {
    src: "src",
    titre: "TWTR",
    description: "description",
    Date: "5 sec ago",
  },
  {
    src: "src",
    titre: "TWTR",
    description: "description",
    Date: "5 sec ago",
  },
  {
    src: "src",
    titre: "TWTR",
    description: "description",
    Date: "5 sec ago",
  },
  {
    src: "src",
    titre: "TWTR",
    description: "description",
    Date: "5 sec ago",
  },
  {
    src: "src",
    titre: "TWTR",
    description: "description",
    Date: "5 sec ago",
  },
  {
    src: "src",
    titre: "TWTR",
    description: "description",
    Date: "5 qfqsdfqsdfqsec ago",
  },
];

var deplacement = [100,200,300];
var dep=0;

const PresentationJu = () => {

    function moveUp(){
        document.getElementsByClassName("Presentation_proj")[0].style.transform = "translate("+deplacement[dep]+"px,0px)";
        dep++;

        if(dep <= deplacement.length){
        }else{
            dep = 0;
            document.getElementsByClassName("Presentation_proj")[0].style.transform = "translate("+deplacement[dep]+"px,0px)";
        }
    }

    function moveDown(){
        document.getElementsByClassName("Presentation_proj")[0].style.transform = "translate(-"+deplacement[dep]+"px,0px)";
        dep--;

        if(dep > 0){
        }else{
            dep = 0;
            document.getElementsByClassName("Presentation_proj")[0].style.transform = "translate(-"+deplacement[dep]+"px,0px)";
        }
    }

    return <div className="Presentation_glob" >
      <div className="Presentation_text">

      </div >
      <div className="Presentation_proj">
      {stockData.map((data, key) => {
            return (
              
              <div key={key} className="Presentation_card">
                <div className="Image_card">
                    {data.src}
                    
                </div>
                <div>
                    <button className="Button_card"> {data.Date} </button>
                    <p className="">{data.description}</p>
                    <p className="">{data.titre}</p>  
                </div>
                <p></p>
                
              </div>
            );
          })}
          <div>
            <button onClick={moveUp}>Avant</button>
            <button onClick={moveDown}>Après</button>
          </div>
      </div>
  
  
     
          
        
      </div>
  
  
  
  };
  
  export default PresentationJu;
  