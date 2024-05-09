import React from "react";
import Members from '../sunsabMembers.json';

function Team() {
  return (
    <section className="team" style={{ marginTop: "7rem" }}>
      <h1 className="heading" style={{ marginTop: "-1.5rem" }} id="team">
        Our Team
      </h1>
      <div className="row">
        {/* Team Member Card */}
        <div className="card">
          {/* Populate this div with MemberCard*/}
          {Members.map((member, id) => (
          //  Import MemberCard here
          <div></div>
          ))}
        </div>
        {/* card div, additional team members can be added similarly */}
      </div>
      {/* row div */}
    </section>
  );
}

export default Team;
