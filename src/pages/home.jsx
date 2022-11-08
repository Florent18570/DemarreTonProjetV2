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
  PresentationJu
} from "../components/containers";

const home = () => {
  return (
    <div>
      <Header />
      <Presentation />
      <HeaderJu />

      <Prestation />
      <Processus />
      <PresentationJu/>
      <Realisation />
      <Nous />
      <Footer />
    </div>
  );
};

export default home;
