"use client"

import React, { useState } from "react";
import "../styles/expertise.css";
import transition from "../transition";
import expertList from "../constants/expertiseList.json";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import { skills } from "../constants/skill";

function Expertise() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div id="expertise" className="expertise">
      <div className="expertiseContent">
        <h1 className="heading expertiseTitle">EXPERTISE</h1>
        <h2 className="expertiseSubTitle">Empowering Innovation Through Technological Expertise</h2>
        <h3 className="subTitleOfList">At Sunsab, we specialize in:</h3>
        <div className="expertiseContentWords">
          {expertList.map((list, index) => (
            <ul key={index}>
              <li>{list.title}</li>
            </ul>
          ))}
        </div>

        <div className="expertiseCirlceContent">
          <h1>Development Process</h1>
          {["Concept", "Design", "Code", "Launch"].map((text, index) => (
            <React.Fragment key={index}>
              <div className="expertiseCirlce">
                <h3 className="expertiseCirlceNumber">{index + 1}</h3>
                <h3 className="expertiseCirlceWords">{text}</h3>
              </div>
              {index < 3 && (
                <div className="expertiseSmallCirlce">
                  <ChevronRightSharpIcon style={{ fontSize: "4rem" }} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="expertiseSkills">
          <h1>Skills</h1>
          <div className="expertiseSkillsBoxContent">
            {skills.map((skill, index) => (
              <div
                className="expertiseSkillsBox"
                key={index}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <img src={skill.imgSrc} alt={skill.alt} />
                {hoveredSkill === index && (
                  <div className="skillInfo">
                    <p>{skill.info}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default transition(Expertise);
