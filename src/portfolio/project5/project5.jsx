import React from "react";
import './portfolio-project.css';

// Import images
import projthum from './project5img/projthum.png';


function Project5() {
  return (
    <div className="project-container" style={{ background: 'white', color: 'white', padding: 20 }}>
      <h3 className="project-title">AI for the Ocean</h3>
      <div className="image-container">
        <img src={projthum} alt="Screenshot 1" className="project-image" />
      </div>
    </div>
  );
}

export default Project5;

