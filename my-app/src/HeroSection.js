import React from "react";
import "./HeroSection.css";
import women from "./assets/women.png"; // ✅ Make sure this path is correct
import FeaturedGrantsSection from "./FeaturedGrantsSection";

const HeroSection = () => {
  return (
    <div>
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${women})` }}
      >
        <div className="overlay">
          <h1 className="hero-title">Empowering Women Entrepreneurs in Nigeria</h1>
          <p className="hero-subtitle">
            Connect with mentors, funding, and marketplace to grow your business
          </p>
          <div className="hero-buttons">
            <button className="hero-btn primary">Get Started</button>
            <button className="hero-btn secondary">Explore Grants</button>
          </div>
        </div>
      </div>

      {/* ✅ Properly included */}
      <FeaturedGrantsSection />
    </div>
  );
};

export default HeroSection;
