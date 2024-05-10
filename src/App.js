import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import "./App.css";
import "./styles/style.css";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

import { Routes, Route, useLocation } from "react-router-dom"
import Expertise from "./components/Expertise";

function App() {

  const location = useLocation();
  return (

      <div className="App">
        <header className="header">
          <div className="fas fa-bars"></div>
          <Navbar />
        </header>
        <AnimatePresence mode="wait">
        <Routes location={location} key={location.path}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        
        <div className="footer">
          <div className="container">
            <div className="row"><Footer/></div>
          </div>
        </div>
        </AnimatePresence>
        <a className="back-to-top">
          <i className="ion-ios-arrow-up"></i>
        </a>
        
      </div>
    
  );
}

export default App;
