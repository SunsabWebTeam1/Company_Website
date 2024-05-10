import React from "react";
import logo from "./logo.svg"; // This is imported but not used. Remove if not needed elsewhere.
import "./App.css";
import Navbar from "./components/Navbar"; // Assuming Navbar component handles navigation
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

import "./App.css"; // Already existing global styles
import "./styles/style.css"; // Assuming you placed style.css under src/styles/

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="fas fa-bars"></div>
        <Navbar />
      </header>
      <Home />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
