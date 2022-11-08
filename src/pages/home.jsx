import React from "react";

import {
  Footer,
  Header,
  Nous,
  Presentation,
  Prestation,
  Realisation,
  HeaderJu,
  Processus,
} from "../components/containers";

const home = () => {
  return (
    <div>
      <Header />
      <Presentation />
      <HeaderJu />

      <Prestation />
      <Processus />
      <Realisation />
      <Nous />
      <Footer />
    </div>
  );
};

export default home;
