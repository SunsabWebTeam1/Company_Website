import React from "react";
import transition from "../transition";
function FAQ() {
  return (
    <section
      className="faq"
      style={{ marginTop: "-2rem", color: "#00bfff" }}
      id="faq"
    >
      <h1 className="heading">FAQ</h1>
      <div className="row">
        <div className="accordion-container">
          {/* Example FAQ */}
          <div className="accordion">
            <div className="accordion-header">
              <span>+</span>
              <h3>How much will it cost?</h3>
            </div>
            <div className="accordion-body">
              <p>
                To get a better idea of the cost of what you want to build, give
                us a quick phone call. We’ll ask you a few questions about the
                nature of the site, what sort of interactivity the site will
                have, your graphic design needs, etc. Then we’ll be able to give
                you a ballpark figure. If you’re still interested, we’ll come to
                your place of business and come up with a firm quote.
              </p>
            </div>
          </div>
          {/* Additional FAQs can be added similarly */}
        </div>
      </div>
    </section>
  );
}

export default transition(FAQ);
