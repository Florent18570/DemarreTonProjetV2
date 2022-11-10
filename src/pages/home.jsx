import React from "react";

import {
  Footer,
  Nous,
  Prestation,
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
      <Nous />
      <Footer />
    </div>
  );
};

export default home;
