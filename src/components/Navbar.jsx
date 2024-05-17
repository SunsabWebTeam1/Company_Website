import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const isMobile = useMediaQuery("(max-width:600px)"); // Adjust the breakpoint as needed
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#0E1011" }}>
      <Toolbar>
        <img
          src={require("../images/logo.png")}
          alt="Logo"
          style={{ height: "50px", marginRight: "auto" }}
        />
        {!isMobile ? (
          <>
            <Typography variant="h5" sx={{ marginLeft: "30px" }}>
              <Link to="/landingpage" style={{ textDecoration: "none", color: "inherit" }}>
                Home
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ marginLeft: "30px" }}>
              <Link to="/expertise" style={{ textDecoration: "none", color: "inherit" }}>
                Expertise
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ marginLeft: "30px" }}>
              <Link to="/portfolio" style={{ textDecoration: "none", color: "inherit" }}>
                Projects
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ marginLeft: "30px" }}>
              <Link to="/team" style={{ textDecoration: "none", color: "inherit" }}>
                Team
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ marginLeft: "30px" }}>
              <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
                Contact
              </Link>
            </Typography>
          </>
        ) : (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link to="/landingpage" style={{ textDecoration: "none", color: "inherit" }}>
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/expertise" style={{ textDecoration: "none", color: "inherit" }}>
                  Expertise
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/portfolio" style={{ textDecoration: "none", color: "inherit" }}>
                  Portfolio
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/team" style={{ textDecoration: "none", color: "inherit" }}>
                  Team
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
                  Contact
                </Link>
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;