import React from "react";
import "./Testimonials.css";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Priya",
    role: "New Mother",
    content:
      "The care I received during my pregnancy was exceptional. The doctors were always available to answer my questions.",
    rating: 5,
  },
  {
    id: 2,
    name: "Anjali",
    role: "Working Mom",
    content:
      "As a working mother, the teleconsultation feature has been a lifesaver. I can consult with doctors without taking time off work.",
    rating: 4,
  },
  {
    id: 3,
    name: "Rekha ",
    role: "Grandmother",
    content:
      "I appreciate how the platform considers the needs of the entire family. The pediatric services helped my daughter care for my grandchild better.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sita",
    role: "Expecting Mother",
    content:
      "The prenatal care services provided by Savemom were outstanding. The personalized care plans well-prepared for my motherhood.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Patients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="quote-icon">
                <FaQuoteLeft size={24} />
              </div>
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">
                    ★
                  </span>
                ))}
              </div>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
