import React, { useState } from "react";
import Project1 from "./project1/project1";
import Project2 from "./project2/project2";
import Project3 from "./project3/project3";
import Project4 from "./project4/project4";
import Project5 from "./project5/project5";
import Project6 from "./project6/project6";
import Project7 from "./project7/project7";
import Project8 from "./project8/project8";
import Project9 from "./project9/project9";
import Project10 from "./project10/project10";

import "../styles/portfolio.css";

import SpringModal from "./project1/modal";
import transition from "../transition";

import { project1Content, project2Content, project3Content, project4Content, project5Content, project6Content, project7Content, project8Content, project9Content, project10Content } from "./project1/contentFiles";


function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Handle project click and open modal with corresponding content
  const handleProjectClick = (projectContent) => {
    setSelectedProject(projectContent);
    setIsOpen(true);
  };
  return (
    <div className="portfolio">
      <div className="portfolioContent">
        <h1 className="heading portfolioTitle">PROJECTS</h1>
        <div className="projects">
          <div onClick={() => handleProjectClick(project1Content)}  className="item-project">
            <Project1 />
          </div>
          <div onClick={() => handleProjectClick(project2Content)} className="item-project">
            <Project2 />
          </div>
          <div onClick={() => handleProjectClick(project3Content)} className="item-project">
            <Project3 />
          </div>
          <div onClick={() => handleProjectClick(project4Content)} className="item-project">
            <Project4 />
          </div>
          <div onClick={() => handleProjectClick(project5Content)} className="item-project">
            <Project5 />
          </div>
          <div onClick={() => handleProjectClick(project6Content)} className="item-project">
            <Project6 />
          </div>
          <div onClick={() => handleProjectClick(project7Content)} className="item-project">
            <Project7 />
          </div>
          <div onClick={() => handleProjectClick(project8Content)} className="item-project">
            <Project8 />
          </div>
          <div onClick={() => handleProjectClick(project9Content)} className="item-project">
            <Project9 />
          </div>
          <div onClick={() => handleProjectClick(project10Content)} className="item-project">
            <Project10 />
          </div>
        </div>
        {isOpen && (
          <div className="spring-modal-container">
            {/* Pass content as props */}
            <SpringModal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              content={selectedProject}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default transition(Portfolio);
