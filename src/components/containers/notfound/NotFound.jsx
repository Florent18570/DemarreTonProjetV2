import React from "react";

const NotFound = () => {
  return (
    <section className="eror">
      <a className="erordiv" href="/">
        <h3 className="error">404</h3>
        <p className="oups">Oups .. La page n'existe pas !</p>
        <p className="oups">Cliquez pour retourner en lieu sur !</p>
      </a>
    </section>
  );
};

export default NotFound;
