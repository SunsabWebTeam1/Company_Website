import React from "react";
import transition from "../transition";
import TeamList from "../constants/sunsabMembers.json";
import MemberCard from "./MemberCard";

function Team() {
  return (
    <section
      className="team"
      style={{ background: "#fff", paddingBottom: "20px" }}
    >
      <h1 className="heading" style={{ marginTop: "7rem" }} id="team">
        OUR TEAM
      </h1>
      <br />
      <div className="row">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridRowGap: "90px",
            gridColumnGap: "200px",
          }}
        >
          {TeamList.map((member) => (
            <MemberCard key={member.id} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default transition(Team);
