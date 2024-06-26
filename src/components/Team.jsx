import React from "react";
import transition from "../transition";
import TeamList from "../constants/sunsabMembers.json";
import MemberCard from "./MemberCard";
import "../styles/team.css";

function Team() {
  return (
    <section
      className="team"
      style={{ background: "#fff", paddingBottom: "20px" }}
      id="team"
    >
      <h1 className="heading">
        OUR TEAM
      </h1>
      <br />
      <div className="row">
        <div className="team-grid">
          {TeamList.map((member) => (
            <MemberCard key={member.id} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default transition(Team);