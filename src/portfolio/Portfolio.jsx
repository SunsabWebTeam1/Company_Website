import React from "react";
import Container from '@mui/material/Container';
import { useState } from "react";
import Project1 from "./project1/project1";
import Project2 from "./project2/project2";
import Project3 from "./project3/project3";
import Project4 from "./project4/project4";
import Project5 from "./project5/project5";
import Project6 from "./project6/project6";
import Project7 from "./project7/project7";
//import Project8 from "./project8/project8";

import '../styles/portfolio.css'
// import required modules
import SpringModal from "./project1/data/modal";
import SpringModal2 from "./project2/data/modal";
import SpringModal3 from "./project3/data/modal";
import SpringModal4 from "./project4/data/modal";
import SpringModal5 from "./project5/data/modal";
import SpringModal6 from "./project6/data/modal";
import SpringModal7 from "./project7/data/modal";
//import SpringModal8 from "./project7/data/modal";
function Portfolio() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);

  return (
    <div className="portfolio">
      <div className="portfolioContent">
        <h1 className="portfolioTitle">PROJECTS</h1>
        <div className="projects">
          <div onClick={() => { setIsOpen1(true); console.log('Project 1 clicked'); }}><Project1 /></div>
          <div onClick={() => { setIsOpen2(true); console.log('Project 2 clicked'); }}><Project2 /></div>
          <div onClick={() => { setIsOpen3(true); console.log('Project 3 clicked'); }}><Project3 /></div>
        </div>
        <div className="projects">
          <div onClick={() => { setIsOpen4(true); console.log('Project 4 clicked'); }}><Project4 /></div>
          <div onClick={() => { setIsOpen5(true); console.log('Project 5 clicked'); }}><Project5 /></div>
          <div onClick={() => { setIsOpen6(true); console.log('Project 6 clicked'); }}><Project6 /></div>
        </div>
        <div className="projects">
          <div onClick={() => { setIsOpen7(true); console.log('Project 7 clicked'); }}><Project7 /></div>
        </div>
      </div>
      {isOpen1 && (
        <div className="spring-modal-container">
          <SpringModal isOpen={isOpen1} setIsOpen={setIsOpen1} />
        </div>
      )}
      {isOpen2 && (
        <div className="spring-modal-container">
          <SpringModal2 isOpen2={isOpen2} setIsOpen2={setIsOpen2} />
        </div>
      )}
      {isOpen3 && (
        <div className="spring-modal-container">
          <SpringModal3 isOpen3={isOpen3} setIsOpen3={setIsOpen3} />
        </div>
      )}
      {isOpen4 && (
        <div className="spring-modal-container">
          <SpringModal4 isOpen4={isOpen4} setIsOpen4={setIsOpen4} />
        </div>
      )}
      {isOpen5 && (
        <div className="spring-modal-container">
          <SpringModal5 isOpen5={isOpen5} setIsOpen5={setIsOpen5} />
        </div>
      )}
      {isOpen6 && (
        <div className="spring-modal-container">
          <SpringModal6 isOpen6={isOpen6} setIsOpen6={setIsOpen6} />
        </div>
      )}
       {isOpen7 && (
        <div className="spring-modal-container">
          <SpringModal7 isOpen7={isOpen7} setIsOpen7={setIsOpen7} />
        </div>
      )}
    </div>
  );
}

export default Portfolio;
