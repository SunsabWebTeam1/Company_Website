import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../images/logo2.svg";

function Navbar() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeSection, setActiveSection] = useState("");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "expertise", "projects", "team", "contact"];
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionElement = document.getElementById(sections[i]);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionBottom = sectionTop + sectionElement.offsetHeight;

          if (
            scrollPosition >= sectionTop - 100 &&
            scrollPosition < sectionBottom
          ) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavItemStyle = (section) => ({
    backgroundColor: activeSection === section ? "#FED136" : "transparent",
    color: activeSection === section ? "#FFFFFF" : "#000000",
    padding: "10px",
    borderRadius: "5px",
  });

  const getNavItemTextColor = (section) =>
    activeSection === section ? "#000000" : "#FFFFFF";

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
              <li style={getNavItemStyle("home")}>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  style={{ color: getNavItemTextColor("home") }}
                >
                  Home
                </ScrollLink>
              </li>
              <li style={getNavItemStyle("expertise")}>
                <ScrollLink
                  to="expertise"
                  smooth={true}
                  duration={500}
                  style={{ color: getNavItemTextColor("expertise") }}
                >
                  Expertise
                </ScrollLink>
              </li>
              <li style={getNavItemStyle("projects")}>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  style={{ color: getNavItemTextColor("projects") }}
                >
                  Projects
                </ScrollLink>
              </li>
              <li style={getNavItemStyle("team")}>
                <ScrollLink
                  to="team"
                  smooth={true}
                  duration={500}
                  style={{ color: getNavItemTextColor("team") }}
                >
                  Team
                </ScrollLink>
              </li>
              <li style={getNavItemStyle("contact")}>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  style={{ color: getNavItemTextColor("contact") }}
                >
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
