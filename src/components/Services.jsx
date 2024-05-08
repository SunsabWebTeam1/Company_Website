import React from "react";

function Services() {
  return (
    <div className="pt-5 pb-5" style={{ backgroundColor: "#f2f2f2" }}>
      <div className="container">
        <div className="row">
          <div className="section-head col-sm-12" id="service">
            <h1>Our Services</h1>
            <p>
              We help you to build high-quality digital solutions and products
              as well as deliver a wide range of related professional services.
              We are providing world-class service to our clients.
            </p>
          </div>
          {/* Example Service */}
          <div className="col-lg-4 col-sm-6">
            <div className="item">
              {" "}
              <span className="icon feature_box_col_one">
                <i className="fa fa-laptop"></i>
              </span>
              <h6>Web App Development</h6>
              <p>
                Our Custom Web Development Services Include Both Front-End And
                Back-End Development. Whether It Is Enhancing An Existing App Or
                Architecting An Enterprise App, Our Developers Are Up For The
                Challenge.
              </p>
            </div>
          </div>
          {/* More services can be added similarly */}
        </div>
      </div>
    </div>
  );
}

export default Services;
