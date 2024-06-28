import React from "react";
import ComputerIcon from "@mui/icons-material/Computer";
import PersonIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import transition from "../transition";
// import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Services() {
  return (
    <div className="services-container">
      <div className="container">
        <div className="row">
          <div className="content section-head">
            <h1 className="heading">VISION</h1>
            <p className="vision-paragraph">
              We aspire to develop innovative solutions that empower individuals
              and businesses to thrive in a rapidly evolving digital landscape.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-item">
              <ScrollLink to="expertise" smooth={true} duration={500}>
                <div className="item">
                  <h6>OUR EXPERTISE</h6>
                  <SettingsIcon style={{ color: "#FED136", fontSize: 80 }} />
                </div>
              </ScrollLink>
            </div>
            <div className="service-item">
              <ScrollLink to="projects" smooth={true} duration={500}>
                <div className="item">
                  <h6>PROJECTS</h6>
                  <ComputerIcon style={{ color: "#FED136", fontSize: 80 }} />
                </div>
              </ScrollLink>
            </div>
            <div className="service-item">
              <ScrollLink to="team" smooth={true} duration={500}>
                <div className="item">
                  <h6>THE TEAM</h6>
                  <PersonIcon style={{ color: "#FED136", fontSize: 80 }} />
                </div>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default transition(Services);
