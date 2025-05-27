import React from "react";
import {
  FaGlobeAmericas,
  FaUniversity,
  FaAmazon,
  FaAward,
  FaTrophy,
  FaMedal,
  FaGoogle,
  FaStar,
} from "react-icons/fa";
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

        <div className="awards-section">
          <h2 className="section-title">Recognitions & Awards</h2>
          <div className="awards-container">
            <div className="award-card">
              <div className="award-icon who">
                <FaGlobeAmericas />
              </div>
              <div className="award-content">
                <h3>World Health Organization</h3>
                <p>
                  SaveMom won the Sustainable Initiative for Social Health award
                  and was featured by WHO for its groundbreaking innovations.
                </p>
              </div>
            </div>
            <div className="award-card">
              <div className="award-icon yale">
                <FaUniversity />
              </div>
              <div className="award-content">
                <h3>Yale Public Health</h3>
                <p>
                  Featured by Yale Public Health for its innovative use of
                  AI-driven technology in maternal healthcare during COVID-19.
                </p>
              </div>
            </div>
            <div className="award-card">
              <div className="award-icon amazon">
                <FaAmazon />
              </div>
              <div className="award-content">
                <h3>Amazon Prime</h3>
                <p>
                  Showcased in the Amazon Prime movie series "Mission StartAb",
                  bringing its grassroots innovation to a global audience.
                </p>
              </div>
            </div>
            <div className="award-card">
              <div className="award-icon tn">
                <FaAward />
              </div>
              <div className="award-content">
                <h3>Tamil Nadu Startup Innovation Showcase 2022</h3>
              </div>
            </div>
            <div className="award-card">
              <div className="award-icon maharashtra">
                <FaTrophy />
              </div>
              <div className="award-content">
                <h3>Maharashtra Startup Week Winner 2022</h3>
              </div>
            </div>
            <div className="award-card">
              <div className="award-icon telangana">
                <FaMedal />
              </div>
              <div className="award-content">
                <h3>Global Entrepreneurship Award from Telangana Government</h3>
              </div>
            </div>
            <div className="award-card">
              <div className="award-icon mashelkar">
                <FaStar />
              </div>
              <div className="award-content">
                <h3>10th Anjani Mashelkar Inclusive Innovations Award</h3>
              </div>
            </div>
            <div className="award-card">
              <div className="award-icon google">
                <FaGoogle />
              </div>
              <div className="award-content">
                <h3>Google Launchpad Class-1 Winner</h3>
              </div>
            </div>
            <div className="award-card">
              <div className="award-icon path">
                <FaStar />
              </div>
              <div className="award-content">
                <h3>
                  Winner Saksham Aavishkar MNCH Challenge 2023 by PATH and USAID
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
