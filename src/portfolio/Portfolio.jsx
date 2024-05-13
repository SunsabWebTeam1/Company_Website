import React, { useState } from "react";
import Container from '@mui/material/Container';
import { useState } from "react";
import Project1 from "./project1/project1";
import Project2 from "./project2/project2";
import Project3 from "./project3/project3";
import Project4 from "./project4/project4";
import Project5 from "./project5/project5";
import Project6 from "./project6/project6";
import Project7 from "./project7/project7";
import Project8 from "./project8/project8";
import Project9 from "./project9/project9";
import '../styles/portfolio.css'
// import required modules
import SpringModal from "./project1/data/modal";
import SpringModal2 from "./project2/data/modal";
import SpringModal3 from "./project3/data/modal";
import SpringModal4 from "./project4/data/modal";
import SpringModal5 from "./project5/data/modal";
import SpringModal6 from "./project6/data/modal";
import SpringModal7 from "./project7/data/modal";
import SpringModal8 from "./project8/data/modal";
import SpringModal9 from "./project9/data/modal";
function Portfolio() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);

// Import project content
import { project1Content, project2Content } from "./project1/contentFiles";

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
          <div onClick={() => { setIsOpen8(true); console.log('Project 8 clicked'); }}><Project8 /></div>
          <div onClick={() => { setIsOpen9(true); console.log('Project 9 clicked'); }}><Project9 /></div>

        </div>
        {isOpen && (
        <div className="spring-modal-container">
          {/* Pass content as props */}
          <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} content={selectedProject} />
        </div>
      )}
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
       {isOpen8 && (
        <div className="spring-modal-container">
          <SpringModal8 isOpen8={isOpen8} setIsOpen8={setIsOpen8} />
        </div>
      )}
        {isOpen9 && (
        <div className="spring-modal-container">
          <SpringModal9 isOpen9={isOpen9} setIsOpen9={setIsOpen9} />
        </div>
      )}
    </div>
  );
}

export default Portfolio;