import React from "react";
import './portfolio-project.css';

// Import images
import proj1 from './project1img/proj1.png';

function Project1() {
  return (
    <div className="project-container" style={{ background: 'white', color: 'white', padding: 20 }}>
      <h3 className="project-title">Diamond Valley Cattery</h3>
      <div className="image-container">
        <div className="project-image1"></div>
      </div>
    </div>
  );
}

export default Project1;

