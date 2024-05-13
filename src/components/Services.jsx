import React from "react";
import ComputerIcon from "@mui/icons-material/Computer";
import PersonIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import transition from "../transition";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="pt-5 pb-5" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <div className="row">
          <div className="section-head col-sm-12" id="service">
            <h1>Vision</h1>
            <p>
              We help you to build high-quality digital solutions and products
              as well as deliver a wide range of related professional services.
              We are providing world-class service to our clients.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridGap: 20,
              marginLeft: "150px",
              marginRight: "150px",
            }}
          >
            <div className="column" style={{ paddingLeft: "10px" }}>
              <Link to="/portfolio">
                <div className="item">
                  <h6>PROJECTS</h6>
                  <ComputerIcon style={{ color: "#FED136", fontSize: 100 }} />
                </div>
              </Link>
            </div>
            <div className="column">
              <Link to="/team">
                <div className="item">
                  <h6>THE TEAM</h6>
                  <PersonIcon style={{ color: "#FED136", fontSize: 100 }} />
                </div>
              </Link>
            </div>
            <div className="column" style={{ paddingRight: "10px" }}>
              <Link to="/expertise">
                <div className="item">
                  <h6>OUR EXPERTISE</h6>
                  <SettingsIcon style={{ color: "#FED136", fontSize: 100 }} />
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
