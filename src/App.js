import React from "react";
import "./App.css";
import Navbar from "./components/Navbar"; // Assuming Navbar component handles navigation
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";

import "./App.css"; // Already existing global styles
import "./styles/style.css"; // Assuming you placed style.css under src/styles/

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="fas fa-bars"></div>
        {/* <Navbar /> */} {/* Navbar broken */}
      </header>
      <Home />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
