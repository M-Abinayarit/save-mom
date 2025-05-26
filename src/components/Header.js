import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaHeartbeat } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="logo-link"
            onClick={closeMenu}
          >
            <FaHeartbeat className="logo-icon" />
            <span className="logo-text">Savemom</span>
          </Link>
        </div>

        <button
          className={`mobile-menu-btn ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <div className="nav-items-container">
            <ul className="nav-list">
              <li className="nav-item">
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="features"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="products"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="casestudy"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Case Study
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="testimonials"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="footer"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="auth-buttons">
            <a href="/login" className="btn">
              Login
            </a>
            <a href="/signup" className="btn btn-secondary">
              Sign Up
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
