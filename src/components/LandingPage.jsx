import React from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Home from "./Home";
import Expertise from "./Expertise";
import Portfolio from "../portfolio/Portfolio";
import Team from "./Team";
import Contact from "./Contact";
import About from "./About";
import Service from "./Services";
import Blog from "./Blog";

import "../App.css";

function LandingPage() {
  return (
    <div className="App">
      <nav>
        <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
        <ScrollLink to="expertise" smooth={true} duration={500}>Expertise</ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink>
        <ScrollLink to="team" smooth={true} duration={500}>Team</ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
      </nav>

      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="service">
        <Service />
      </Element>
      <Element name="expertise">
        <Expertise />
      </Element>
      <Element name="projects">
        <Portfolio />
      </Element>
      <Element name="team">
        <Team />
      </Element>
      <Element name="blog">
        <Blog/>
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default LandingPage;
