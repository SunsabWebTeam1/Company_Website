import React from "react";
import transition from "../transition";
function Team() {
  return (
    <section className="team" style={{ marginTop: "7rem" }}>
      <h1 className="heading" style={{ marginTop: "-1.5rem" }} id="team">
        our team
      </h1>
      <div className="row">
        {/* Team Member Card */}
        <div className="card">
          <div className="image">
            <img
              src="./images/pexels-andrea-piacquadio-845434.jpg"
              alt="Team member 1"
            />
          </div>
          <div className="info">
            <h3>Schott Watkins</h3>
            <span>Web Developer</span>
            <div className="icons">
              <a
                href="https://www.facebook.com/"
                className="fab fa-facebook-f"
              ></a>
              <a
                href="https://twitter.com/login"
                className="fab fa-twitter"
              ></a>
              <a
                href="https://www.instagram.com/"
                className="fab fa-instagram"
              ></a>
              <a
                href="https://www.linkedin.com/"
                className="fab fa-linkedin"
              ></a>
            </div>
          </div>
        </div>
        {/* Additional team members can be added similarly */}
      </div>
    </section>
  );
}

export default transition(Team);
