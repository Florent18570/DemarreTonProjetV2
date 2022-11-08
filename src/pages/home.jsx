import React from "react";

import {
  Footer,
  Header,
  Nous,
  Presentation,
  Prestation,
  Realisation,
  HeaderJu,
} from "../components/containers";

const home = () => {
  return (
    <div>
      <Header />
      <Presentation />
      <HeaderJu />

      <Prestation />
      <Realisation />
      <Nous />
      <Footer />
    </div>
  );
};

export default home;
