import React from "react";
import ComputerIcon from "@mui/icons-material/Computer";
import PersonIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import transition from "../transition";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="services-container">
      <div className="container">
        <div className="row">
          <div className="content section-head">
            <h1 className="heading">Vision</h1>
            <p style={{fontSize: "22px", margin: "10px 30px"}}>
              We aspire to develop innovative solutions that empower individuals
              and businesses to thrive in a rapidly evolving digital landscape.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-item">
              <Link to="/portfolio">
                <div className="item">
                  <ComputerIcon style={{ color: "#FED136", fontSize: 60 }} />
                  <h6>PROJECTS</h6>
                </div>
              </Link>
            </div>
            <div className="service-item">
              <Link to="/team">
                <div className="item">
                  <PersonIcon style={{ color: "#FED136", fontSize: 60 }} />
                  <h6>THE TEAM</h6>
                </div>
              </Link>
            </div>
            <div className="service-item">
              <Link to="/expertise">
                <div className="item">
                  <SettingsIcon style={{ color: "#FED136", fontSize: 60 }} />
                  <h6>OUR EXPERTISE</h6>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default transition(Services);