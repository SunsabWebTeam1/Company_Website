import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./portfolio/Portfolio";
import Team from "./components/Team";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import "./App.css";
import "./styles/style.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="fas fa-bars"></div>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
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
        <a href="#" className="back-to-top">
          <i className="ion-ios-arrow-up"></i>
        </a>
      </div>
    </Router>
  );
}

export default App;
