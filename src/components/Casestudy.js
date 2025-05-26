import React from "react";
import "./Casestudy.css";

const CaseStudy = () => {
  return (
    <section id="casestudy" className="casestudy-section">
      <div className="container">
        <div className="impact-section">
          <h2 className="section-title">The Wave of Change</h2>
          <div className="wave-container">
            <div className="wave-metric">
              <div className="wave-number">36,400</div>
              <div className="wave-label">Successful Deliveries</div>
            </div>
            <div className="wave-metric">
              <div className="wave-number">7,320</div>
              <div className="wave-label">High-risk Pregnancies Identified</div>
            </div>
            <div className="wave-metric">
              <div className="wave-number">2,91,200+</div>
              <div className="wave-label">Home-based Antenatal Checkups</div>
            </div>
            <div className="wave-metric">
              <div className="wave-number">36,00,000</div>
              <div className="wave-label">Women Onboarded</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
