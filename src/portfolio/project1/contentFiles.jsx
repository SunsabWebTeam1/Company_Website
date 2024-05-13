import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const project1Content = {
  title: "Project 1",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  techStack: [<FaHtml5 size={60}/>, <FaCss3Alt size={60}/>, <IoLogoJavascript size={60}/>, <FaReact size={60}/>], // Using icons for tech stack
  slides: [
    {
      src: require("../../images/imgExample/example1.png"),
      alt: "Image 1 for carousel"
    },
    {
      src: require("../../images/imgExample/example2.png"),
      alt: "Image 2 for carousel"
    },
    {
      src: require("../../images/imgExample/example3.png"),
      alt: "Image 3 for carousel"
    }
  ]
};

const project2Content = {
  title: "Project 2",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  techStack: [<FaHtml5 size={60}/>, <FaCss3Alt size={60}/>, <IoLogoJavascript size={60}/>, <FaReact size={60}/>], // Using icons for tech stack
  slides: [
    {
      src: require("../../images/imgExample/example2.png"),
      alt: "Image 1 for carousel"
    },
    {
      src: require("../../images/imgExample/example2.png"),
      alt: "Image 2 for carousel"
    },
    {
      src: require("../../images/imgExample/example3.png"),
      alt: "Image 3 for carousel"
    }
  ]
};

export { project1Content, project2Content };