import React from "react";
import { useState } from "react";

function App() {
  const [compteur, setCompteur] = useState(1);

  return <h1> {compteur}</h1>;
}

export default App;
