import React from "react";
import transition from "../transition";
import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about">
      <h1 className="heading aboutTitle">ABOUT US</h1>
      <div className="row">
        <div className="content">
          <h3>Sunsab is where innovation fuels passion!</h3>
          <p>
            We're a dynamic team of software developers armed with cutting-edge expertise in modern technologies.
            <br />
            Our mission? To harness technology's power for positive global change. {" "}

            <br /><br />
            At Sunsab, we believe in the transformative potential of software. 
            Whether crafting sleek mobile apps or architecting robust web solutions, 
            we are committed to shaping the future through code.
          </p>
          {/* <a href="#">
            <button className="btn">Read More</button>
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default transition(About);
