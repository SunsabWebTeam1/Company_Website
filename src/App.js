import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

import { Routes, Route, useLocation } from "react-router-dom"
import Expertise from "./components/Expertise";
import LandingPage from "./components/LandingPage";

import "./App.css"; // Already existing global styles
import "./styles/style.css"; // Assuming you placed style.css under src/styles/

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
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        
        </AnimatePresence>
        <Footer />
      </div>
    
  );
}

export default App;
