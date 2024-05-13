import React from "react";
import './portfolio-project.css';

// Import images
import proj1 from './project4img/proj1.png';


function Project4() {
  return (
    <div className="project-container" style={{ background: 'white', color: 'white', padding: 20 }}>
      <h3 className="project-title">Green Flag Lawn</h3>
      <div className="image-container">
        <img src={proj1} alt="Screenshot 1" className="project-image" />
      </div>
    </div>
  );
}

export default Project4;

