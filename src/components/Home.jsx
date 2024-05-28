import React from "react";
import transition from "../transition";
import "../index.css";

function Home() {
  return (
    <section id="home" className="home">
      <h1>Software Design and Creation</h1>
      <h2>Digitalization Solutions</h2>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
    </section>
  );
}

export default transition(Home);
