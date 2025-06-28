import React, { useState, useEffect } from "react";
import "./Header.css";
import { FiInstagram, FiLinkedin, FiFacebook } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""} dark-bg`}>
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">Ayush Adhikari</span>
        </div>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            Home
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("skills");
            }}
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("experience");
            }}
          >
            Experience
          </a>
          <a
            href="#achievements"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("achievements");
            }}
          >
            Achievements
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contact
          </a>

          <span className="divider" />
          <a href="/" className="icon-link" aria-label="Instagram">
            <FiInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/ayushlinked/"
            className="icon-link"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://www.facebook.com/ayush.adhikari.58367/friends"
            className="icon-link"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook />
          </a>
        </nav>
        <div
          className={`mobile-menu-btn ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
