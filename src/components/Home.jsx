import React from "react";
import transition from "../transition";
import About from "./About";
import "../index.css"
function Home() {
  return (
    <section id="home" className="home">
      <h1>Bring your Business Online</h1>
      <h2>with IT Company Services</h2>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
    </section>
  );
}

export default transition(Home);
