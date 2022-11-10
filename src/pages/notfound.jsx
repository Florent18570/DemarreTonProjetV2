import React from "react";

import {
  Footer,
  NotFound,
  Menu
} from "../components/containers";

const notfound = () => {
  return (
    <div>
      <Menu />
      <NotFound />
      <Footer />
    </div>
  );
};

export default notfound;
