import React from "react";
import './portfolio-project.css';

// Import images
import proj1 from './project8img/proj1.png';


function Project8() {
  return (
    <div className="project-container" style={{ background: 'white', color: 'white', padding: 20 }}>
      <h3 className="project-title">Project 8</h3>
      <div className="image-container">
        <img src={proj1} alt="Screenshot 1" className="project-image" />
      </div>
    </div>
  );
}

export default Project8;

