import React from "react";

import {
  Footer,
  PrestationSpe,
  PresentationJu,
  Faq,
  Menu
} from "../components/containers";

const prestationspe = () => {
  
  return (
    <div>
      <Menu />
      <PrestationSpe />
      <PresentationJu />
      <Faq />
      <Footer />
    </div>
  );
};

export default prestationspe;
