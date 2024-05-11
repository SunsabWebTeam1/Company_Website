import React, {useState} from "react";
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

// import required modules
import SpringModal from "./data/modal";

function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <div className="portfolio">
        <div className="portfolioContent">
          <h1 className="portfolioTitle">PROJECTS</h1>
            <div className="projects">
              <div onClick={() => setIsOpen(true)}><Project1 /></div>
              

              <Project2/>
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
          <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}
      </div>
  );
}

export default Portfolio;
