import React from "react";
import { FaUsers, FaHandsHelping, FaClinicMedical } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Savemom</h2>
            <p className="highlight-text">
              We're revolutionizing maternal healthcare through technology and
              compassion
            </p>
            <p>
              Founded in 2020, Savemom began with a simple mission: to make
              quality healthcare accessible to every mother in India. What
              started as a small clinic in Madurai has grown into a nationwide
              network of caring professionals.
            </p>

            <div className="stats-grid">
              <div className="stat-item">
                <FaUsers className="stat-icon" />
                <h3>50,000+</h3>
                <p>Mothers Served</p>
              </div>
              <div className="stat-item">
                <FaHandsHelping className="stat-icon" />
                <h3>200+</h3>
                <p>Healthcare Partners</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Doctor consulting with mother and child"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
