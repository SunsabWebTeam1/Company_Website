import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import "./App.css"; 
import "./styles/style.css"; 

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="fas fa-bars"></div>
        <Navbar />
      </header>
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
