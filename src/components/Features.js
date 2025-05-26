import React from "react";
import "./Features.css";
import {
  FaClinicMedical,
  FaUserMd,
  FaMobileAlt,
  FaHeart,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaClinicMedical size={40} />,
      title: "Quality Care",
      description:
        "Access to certified healthcare providers specializing in maternal health.",
    },
    {
      icon: <FaUserMd size={40} />,
      title: "Expert Doctors",
      description:
        "Consult with experienced doctors from the comfort of your home.",
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: "Easy Access",
      description:
        "Book appointments and manage your health records through our mobile app.",
    },
    {
      icon: <FaHeart size={40} />,
      title: "Personalized Plans",
      description:
        "Customized healthcare plans tailored to your specific needs.",
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
