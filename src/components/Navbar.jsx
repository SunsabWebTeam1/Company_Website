import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#0E1011" }}>
      <Toolbar>
        <img
          src={require("../images/logo.png")}
          alt="Logo"
          style={{ height: "50px", marginRight: "auto" }}
        />
        <Typography variant="h6" sx={{ marginLeft: "20px" }}>
          <Link to="/landingpage" style={{ textDecoration: "none", color: "inherit" }}>Home</Link>
        </Typography>
        <Typography variant="h6" sx={{ marginLeft: "20px" }}>
          <Link to="/expertise" style={{ textDecoration: "none", color: "inherit" }}>Expertise</Link>
        </Typography>
        <Typography variant="h6" sx={{ marginLeft: "20px" }}>
          <Link to="/portfolio" style={{ textDecoration: "none", color: "inherit" }}>Portfolio</Link>
        </Typography>
        <Typography variant="h6" sx={{ marginLeft: "20px" }}>
          <Link to="/team" style={{ textDecoration: "none", color: "inherit" }}>Team</Link>
        </Typography>
        <Typography variant="h6" sx={{ marginLeft: "20px" }}>
          <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>Contact</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
