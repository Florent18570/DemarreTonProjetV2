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
      {stockData.map((data, key) => {
        return (
          <div key={key} className="Presentation__card">
            <div className="Presentation__card__img">{data.src}</div>
            <div>
              <button className="Presentation__card__button">
                {data.Date}
              </button>
              <p className="">{data.description}</p>
              <p className="">{data.titre}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PresentationJu;
