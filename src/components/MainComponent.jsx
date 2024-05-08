import React, { useState, useEffect } from "react";

function MainComponent() {
  const [navOpen, setNavOpen] = useState(false);
  const [headerStyle, setHeaderStyle] = useState({});
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [accordionActive, setAccordionActive] = useState(null);

  // Toggle navigation
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) {
        setHeaderStyle({
          background: "#002e5f",
          boxShadow: "0 .2rem .5rem rgba(0,0,0,.4)",
        });
      } else {
        setHeaderStyle({
          background: "none",
          boxShadow: "none",
        });
      }

      if (window.scrollY > 100) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Counter logic
  const updateCount = (counter, target) => {
    const inc = target / 120; // Adjust speed here
    const count = parseInt(counter.innerText) || 0;
    if (count < target) {
      counter.innerText = count + inc;
      setTimeout(() => updateCount(counter, target), 1);
    } else {
      counter.innerText = target;
    }
  };

  useEffect(() => {
    document.querySelectorAll(".counter").forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target"));
      updateCount(counter, target);
    });
  }, []);

  // Accordion toggle
  const toggleAccordion = (index) => {
    setAccordionActive(accordionActive === index ? null : index);
  };

  return (
    <div>
      <div className="header" style={headerStyle}>
        <button onClick={toggleNav}>{navOpen ? "Close" : "Open"} Menu</button>
      </div>
      {/* Other components here */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ display: showBackToTop ? "block" : "none" }}
      >
        Back to Top
      </button>
      {/* Example of an accordion */}
      <div>
        {["Item 1", "Item 2", "Item 3"].map((item, index) => (
          <div key={index}>
            <button onClick={() => toggleAccordion(index)}>
              {accordionActive === index ? "-" : "+"} {item}
            </button>
            <div
              style={{ display: accordionActive === index ? "block" : "none" }}
            >
              Content for {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainComponent;
