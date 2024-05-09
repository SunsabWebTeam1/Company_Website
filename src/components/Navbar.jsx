import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#0E1011" }}>
      <Toolbar>
        <img src="logo.png" alt="Logo" style={{ height: "50px", marginRight: "auto" }} />
        <Typography variant="h6" sx={{ marginLeft: "20px" }}>
          <a href="home" style={{ textDecoration: "none", color: "inherit" }}>home</a>
        </Typography>
        <Typography variant="h6" sx={{ marginLeft: "20px" }}>
          <a href="about" style={{ textDecoration: "none", color: "inherit" }}>about</a>
        </Typography>
        <Typography variant="h6" sx={{ marginLeft: "20px" }}>
          <a href="service" style={{ textDecoration: "none", color: "inherit" }}>services</a>
        </Typography>
        <Typography variant="h6" sx={{ marginLeft: "20px" }}>
          <a href="portfolio" style={{ textDecoration: "none", color: "inherit" }}>portfolio</a>
        </Typography>
        <Typography variant="h6" sx={{ marginLeft: "20px" }}>
          <a href="team" style={{ textDecoration: "none", color: "inherit" }}>team</a>
        </Typography>
        <Typography variant="h6" sx={{ marginLeft: "20px" }}>
          <a href="careers.html" style={{ textDecoration: "none", color: "inherit" }}>career</a>
        </Typography>
        <Typography variant="h6" sx={{ marginLeft: "20px" }}>
          <a href="contact" style={{ textDecoration: "none", color: "inherit" }}>contact</a>
        </Typography>
        <Typography variant="h6" sx={{ marginLeft: "20px" }}>
          <a href="faq" style={{ textDecoration: "none", color: "inherit" }}>FAQ</a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
