import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../images/logo2.svg";

function Navbar() {
  const isMobile = useMediaQuery("(max-width:768px)"); // Adjust the breakpoint as needed
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#0E1011" }}>
      <Toolbar style={{ minHeight: "80px" }}>
        <img
          src={Logo}
          alt="Logo"
          style={{ height: "50px", marginRight: "auto" }}
        />
        {!isMobile ? (
            <nav className="navbar">
              <ul>
                <li>
                  <ScrollLink to="home" smooth={true} duration={500}>
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="expertise" smooth={true} duration={500}>
                    Expertise
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="projects" smooth={true} duration={500}>
                    Projects
                  </ScrollLink>
                </li>
                <li> 
                  <ScrollLink to="team" smooth={true} duration={500}>
                    Team
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="contact" smooth={true} duration={500}>
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            </nav>
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
                <ScrollLink to="home" smooth={true} duration={500}>
                  Home
                </ScrollLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <ScrollLink to="expertise" smooth={true} duration={500}>
                  Expertise
                </ScrollLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <ScrollLink to="projects" smooth={true} duration={500}>
                  Projects
                </ScrollLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <ScrollLink to="team" smooth={true} duration={500}>
                  Team
                </ScrollLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <ScrollLink to="contact" smooth={true} duration={500}>
                  Contact
                </ScrollLink>
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
