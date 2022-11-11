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
      <div className="background_image">
        <Menu />
        <HeaderJu />
      </div>
      <Prestation />
      <Processus />
      <PresentationJu />
      <Nous />
      <Footer />
    </div>
  );
};

export default home;
