import React from "react";
import './portfolio-project.css';

// Import images
import proj1 from './project1img/proj1.png';
import proj2 from './project1img/proj2.png';
import proj3 from './project1img/proj3.png';

function Project1() {
  return (
    <div className="project-container" style={{ background: 'white', color: 'white', padding: 20 }}>
      <h3 className="project-title">Project 1</h3>
      <div className="image-container">
        <img src={proj1} alt="Screenshot 1" className="project-image" />
      </div>
    </div>
  );
}

export default Project1;

