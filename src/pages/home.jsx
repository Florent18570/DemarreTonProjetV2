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
  PresentationJu,
  Menu,
} from "../components/containers";

const home = () => {
  return (
    <div>
      <Menu/>
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
