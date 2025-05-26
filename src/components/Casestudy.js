import React from "react";
import "./Casestudy.css";
import { FaAward, FaUniversity, FaFilm, FaGlobe } from "react-icons/fa";

const CaseStudy = () => {
  const supporters = [
    { name: "WHO", logo: "who-logo.png" },
    { name: "Harvard", logo: "harvard-logo.png" },
    { name: "Yale", logo: "yale-logo.png" },
    { name: "Amazon", logo: "amazon-logo.png" },
    { name: "USAID", logo: "usaid-logo.png" },
    { name: "Google", logo: "google-logo.png" },
    { name: "PATH", logo: "path-logo.png" },
    { name: "Telangana Govt", logo: "telangana-logo.png" },
  ];

  return (
    <section id="casestudy" className="casestudy-section">
      <div className="container">
        {/* Recognition Section */}
        <div className="recognition-section">
          <h2 className="section-title">Harvard Case Study</h2>
          <p className="section-description">
            SaveMom is a globally recognized maternal healthcare innovation,
            featured as a Design Thinking Case Study at Harvard Business School
            and taught in major MBA programs.
          </p>

          <div className="recognition-grid">
            <div className="recognition-card">
              <FaUniversity className="recognition-icon" />
              <h3>Harvard Case Study</h3>
              <p>
                Featured in Harvard Business School curriculum as innovation
                case study
              </p>
            </div>

            <div className="recognition-card">
              <FaGlobe className="recognition-icon" />
              <h3>World Health Organization</h3>
              <p>Won Sustainable Initiative for Social Health award</p>
            </div>

            <div className="recognition-card">
              <FaUniversity className="recognition-icon" />
              <h3>Yale Public Health</h3>
              <p>Featured for AI-driven maternal healthcare solutions</p>
            </div>

            <div className="recognition-card">
              <FaFilm className="recognition-icon" />
              <h3>Amazon Prime</h3>
              <p>Showcased in "Mission StartAb" documentary series</p>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="impact-section">
          <h2 className="section-title">The Wave of Change</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>36,400</h3>
              <p>Successful Deliveries</p>
            </div>
            <div className="metric-card">
              <h3>7,320</h3>
              <p>High-risk Pregnancies Identified</p>
            </div>
            <div className="metric-card">
              <h3>2,91,200+</h3>
              <p>Home-based Antenatal Checkups</p>
            </div>
            <div className="metric-card">
              <h3>36,00,000</h3>
              <p>Women Onboarded</p>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="awards-section">
          <h2 className="section-title">Awards & Achievements</h2>
          <div className="awards-grid">
            {[
              "Tamil Nadu Startup Innovation Showcase 2022",
              "Maharashtra Startup Week Winner 2022",
              "Global Entrepreneurship Award from Telangana Government",
              "10th Anjani Mashelkar Inclusive Innovations Award",
              "Google Launchpad Class-1 Winner",
              "Winner Saksham Aavishkar MNCH Challenge 2023 by PATH and USAID",
            ].map((award, index) => (
              <div key={index} className="award-card">
                <FaAward className="award-icon" />
                <p>{award}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
