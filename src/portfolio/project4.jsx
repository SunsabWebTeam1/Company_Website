import React from "react";
import '../styles/portfolio-project.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import { Scrollbar } from 'swiper/modules';

// Import images
import proj1 from '../images/project1/proj1.png'
import proj2 from '../images/project1/proj2.png';
import proj3 from '../images/project1/proj3.png';

function Project4() {
  return (
    <div className="project-container" style={{ background: 'white', color: 'white', padding: 20 }}>
      <h3 className="project-title">Project 4</h3>
      <div className="swiper-container">
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={proj1} alt="Screenshot 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={proj2} alt="Screenshot 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={proj3} alt="Screenshot 3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Project4;
