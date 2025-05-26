import React, { useState, useEffect } from "react";
import "./Hero.css";
import mom1 from "../images/mom1.jpg";
import mom2 from "../images/mom2.jpg";
import mom3 from "../images/mom3.jpg";

const slides = [
  {
    id: 1,
    title: "Empowering Mothers with Quality Healthcare",
    description:
      "Access affordable, personalized healthcare solutions designed specifically for mothers and their families.",
    image: mom1,
  },
  {
    id: 2,
    title: "Support at Every Step",
    description:
      "From pregnancy to parenthood, we are here to support mothers with expert care.",
    image: mom2,
  },
  {
    id: 3,
    title: "Healthy Moms, Happy Families",
    description:
      "Ensuring the well-being of mothers leads to healthier, happier families.",
    image: mom3,
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-slider">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`hero-slide${idx === current ? " active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={idx !== current}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <div className="hero-text">
                <h1>{slide.title}</h1>
                <p className="subtitle">{slide.description}</p>
                <div className="hero-buttons">
                  <a href="/services" className="btn">
                    Explore Services
                  </a>
                  <a href="/contact" className="btn btn-secondary">
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="slide-indicators">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`indicator ${idx === current ? "active" : ""}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === current}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
