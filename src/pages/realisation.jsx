import React from "react";

import {
  Footer,
  Header,
  NotFound,
  HeaderJu,
  Menu,
} from "../components/containers";
import { RealisationPage } from "../components/realisation";
const notfound = () => {
  return (
    <div>
      {/* <Header /> */}
      <Menu />
      <RealisationPage />
      <Footer />
    </div>
  );
};

export default notfound;
