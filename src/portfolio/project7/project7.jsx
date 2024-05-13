import React from "react";
import './portfolio-project.css';

// Import images
import proj1 from './project7img/proj1.png';


function Project7() {
  return (
    <div className="project-container" style={{ background: 'white', color: 'white', padding: 20 }}>
      <h3 className="project-title">Project 7</h3>
      <div className="image-container">
        <img src={proj1} alt="Screenshot 1" className="project-image" />
      </div>
    </div>
  );
}

export default Project7;

