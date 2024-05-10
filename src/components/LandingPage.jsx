import React from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";

import "../App.css";
 // Assuming you placed style.css under src/styles/

function LandingPage() {

  return (
    <div className="App">
      <Home />
      <About />
      <Services />
    </div>

  );
}

export default LandingPage;