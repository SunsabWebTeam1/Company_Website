import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { AnimatePresence } from "framer-motion";

import { Routes, Route, useLocation } from "react-router-dom"
import Expertise from "./components/Expertise";
import LandingPage from "./components/LandingPage";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Contact from "./components/Contact"
import Footer from "./components/Footer";

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
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        </AnimatePresence>
        <Footer />
      </div>
    
  );
}

export default App;
