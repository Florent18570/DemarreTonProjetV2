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

const PresentationJu = () => {
  return (
    <div className="Presentation_glob">
      <div></div>
      <div>
        {stockData.map((data, key) => {
          return (
            <div key={key} className="Presentation_card">
              <div className="Image_card">{data.src}</div>
              <div>
                <button className="Button_card"> {data.Date} </button>
                <p className="">{data.description}</p>
                <p className="">{data.titre}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PresentationJu;
