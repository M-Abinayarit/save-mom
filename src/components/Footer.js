import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3>Savemom</h3>
            <p>
              Empowering mothers with accessible, quality healthcare solutions
              for them and their families.
            </p>
            <div className="social-links">
              <a href="/">
                <FaFacebook />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/policies">Policies</a>
              </li>
              <li>
                <a href="/terms">Terms and Conditions</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/returns">Returns</a>
              </li>
              <li>
                <a href="/refund">Refund</a>
              </li>
              <li>
                <a href="/shipping">Shipping</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact-form">
            <h4>Contact us</h4>
            <form className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  className="form-input"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                <FaPaperPlane className="submit-icon" /> Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Savemom. All rights reserved.</p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
