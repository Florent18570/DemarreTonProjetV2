import React from "react";

import {
  Footer,
  Header,
  Nous,
  Presentation,
  Prestation,
  Realisation,
  Processus,
} from "../components/containers";

const home = () => {
  return (
    <div>
      <Header />
      <Presentation />
      <Prestation />
      <Processus />
      <Realisation />
      <Nous />
      <Footer />
    </div>
  );
};

export default home;
