import React, { useState, useEffect } from "react";
import "./Header.css";
import { FiInstagram, FiTwitter, FiYoutube, FiFacebook } from "react-icons/fi";

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

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""} dark-bg`}>
      <div className="header-container">
        <div className="logo">Logo</div>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contacts</a>
          <span className="divider" />
          <a href="/" className="icon-link" aria-label="Instagram">
            <FiInstagram />
          </a>
          <a
            href="https://www.youtube.com/@learnwithus2282"
            className="icon-link"
            aria-label="Youtube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiYoutube />
          </a>
          <a
            href="https://www.facebook.com/ayush.adhikari.58367/friends"
            className="icon-link"
            aria-label="Facebok"
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
