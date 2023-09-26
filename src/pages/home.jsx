import React from "react";

import {
  Footer,
  Header,
  Nous,
  Presentation,
  Prestation,
  Realisation,
} from "../components/containers";

const home = () => {
  return (
    <div>
      <Header />
      <Presentation />
      <Prestation />
      <Realisation />
      <Nous />
      <Footer />
    </div>
  );
};

export default home;
