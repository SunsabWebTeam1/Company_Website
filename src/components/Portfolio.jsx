import React from "react";
import transition from "../transition";
function Portfolio() {
  return (
    <div className="pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div
            className="section-head-1 col-sm-12"
            style={{ textAlign: "center" }}
          >
            <h4 style={{ marginTop: "-5rem" }} id="portfolio">
              <span>Our</span> Projects
            </h4>
            <p>
              The objective of IT Company is to enable a large number of youth
              to take up industry-relevant skill training that will help them in
              securing a better livelihood.
            </p>
          </div>
          {/* Example Project */}
          <div className="col-lg-4 col-sm-6">
            <div className="item">
              {" "}
              <span className="icon feature_box_col_four">
                <i className="fa fa-database"></i>
              </span>
              <h6>Project-1</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor Aenean massa.
              </p>
            </div>
          </div>
          {/* Additional projects can be added similarly */}
        </div>
      </div>
    </div>
  );
}

export default transition(Portfolio);
