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
import MainComponent from "./components/MainComponent"; // Importing MainComponent
import "./App.css"; // Already existing global styles
import "./styles/style.css"; // Assuming you placed style.css under src/styles/
import "./styles/careers.css"; // Assuming you placed careers.css under src/styles/

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
      <Portfolio />
      <Team />
      <Contact />
      <FAQ />
      <div className="footer">
        <div className="container">
          <div className="row">{/* Footer content here */}</div>
        </div>
      </div>
      <a href="#" className="back-to-top">
        <i className="ion-ios-arrow-up"></i>
      </a>
    </div>
  );
}

export default App;
