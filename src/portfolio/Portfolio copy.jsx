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
import '../styles/portfolio.css'

// Import required modules
import SpringModal from "./project1/modal";
import transition from "../transition";

// Import project content
import { project1Content, project2Content, project3Content, project4Content, project5Content, project6Content , project7Content, project8Content, project9Content} from "./project1/contentFiles";
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
        <h1 className="portfolioTitle">PROJECTS</h1>
        <div className="projects">
          <div onClick={() => handleProjectClick(project1Content)}><Project1 /></div>
          <div onClick={() => handleProjectClick(project2Content)}><Project2 /></div>
          <div onClick={() => handleProjectClick(project3Content)}><Project3/></div>
          <div onClick={() => handleProjectClick(project4Content)}><Project4/></div>
          <div onClick={() => handleProjectClick(project5Content)}><Project5/></div>
          <div onClick={() => handleProjectClick(project6Content)}><Project6/></div>
          <div onClick={() => handleProjectClick(project7Content)}><Project7/></div>
          <div onClick={() => handleProjectClick(project8Content)}><Project8/></div>
          <div onClick={() => handleProjectClick(project9Content)}><Project9/></div>
        </div>
        {isOpen && (
        <div className="spring-modal-container">
          {/* Pass content as props */}
          <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} content={selectedProject} />
        </div>
      )}
      </div>
      
    </div>
  );
}

export default transition(Portfolio);