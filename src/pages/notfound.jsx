import React from "react";

import {
  Footer,
  Header,
  NotFound,
  HeaderJu
} from "../components/containers";

const notfound = () => {
  return (
    <div>
      <Header />
      
      <NotFound />
      
      <HeaderJu />
      <Footer />
    </div>
  );
};

export default notfound;
