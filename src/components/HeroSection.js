import React from "react";
import "./HeroSection.css";
import heroImg from "./images/ayush.png";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-intro">HI, I'M AYUSH</div>
          <h1 className="hero-title">
            I'M A<br />
            <span className="hero-typewriter">
              <Typewriter
                words={["WEB DESIGNER", "DEVELOPER", "LEADER", "AI ENTHUSIAST"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1200}
              />
            </span>
          </h1>
          <p className="hero-desc">
            I am a passionate and driven individual from Nepal with a strong
            interest in technology, finance, and community development. I love
            learning new skills, leading initiatives, and creating opportunities
            that empower others.
          </p>
          <a href="#projects" className="hero-btn">
            VIEW MY PROJECTS
          </a>
        </div>
        <div className="hero-right">
          <img src={heroImg} alt="Ayush" className="hero-img" />
        </div>
      </div>
    </section>
  );
}
