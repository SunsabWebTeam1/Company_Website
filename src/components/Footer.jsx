import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="container">
          <div
            className="row"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gridGap: 20,
            }}
          >
            <div
              className="col-lg-3 col-md-6 footer-contact"
              style={{ fontSize: "1.5rem" }}
            >
              <h4>Contact Us</h4>
              <p>
                1300 Center Avenue
                <br />
                Calgary, Alberta
                <br />
                Canada <br />
                <strong>Phone:</strong> +123-456-7890
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-md-6 copyright"
            style={{
              color: "#0e1011",
              fontSize: "1.3rem",
              paddingLeft: "25px",
            }}
          >
            Copyright &copy; 2024 Sunsab Website. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
