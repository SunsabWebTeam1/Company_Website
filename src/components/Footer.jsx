import React from "react";

function Footer() {
  return (
    <div className="footer" style={{ backgroundColor: "black"}}>
      {/* <div className="footer-top">
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
                <strong>Phone:</strong> +1 403-992-9021
                <br />
                <strong>Email:</strong> sales@sunsab.com
                <br />
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container" >
        <div className="row align-items-center">
          <div
            className=" copyright"
            style={{
              color: "white",
              fontSize: "1.3rem",
              paddingLeft: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
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
