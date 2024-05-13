import React, { useState } from "react";
import Container from '@mui/material/Container';
import Project1 from "./project1";
import Project2 from "./project2";
import Project3 from "./project3";
import Project4 from "./project4";
import Project5 from "./project5";
import Project6 from "./project6";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/portfolio.css';

// Import required modules
import SpringModal from "./project1/modal";

// Import project content
import { project1Content, project2Content } from "./project1/contentFiles";

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
              {/* Pass project content and handle modal open */}
              <div onClick={() => handleProjectClick(project1Content)}><Project1 /></div>
              <div onClick={() => handleProjectClick(project2Content)}><Project2 /></div>
              <Project3/>
            </div>
            <div className="projects">
              <Project4/>
              <Project5/>
              <Project6/>
            </div>
        </div>
        {isOpen && (
        <div className="spring-modal-container">
          {/* Pass content as props */}
          <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} content={selectedProject} />
        </div>
      )}
      </div>
  );
}

export default Portfolio;