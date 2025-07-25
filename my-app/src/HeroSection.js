import React from "react";
import "./HeroSection.css";
import women from "./assets/women.png"; 
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

   const navigate = useNavigate();

  return (
    <div>
      <div
        className="hero-section-1"
        style={{ backgroundImage: `url(${women})` }}
      >
        <div className="overlay-1">
          <h1 className="hero-title-1">Empowering Women Entrepreneurs in Nigeria</h1>
          <p className="hero-subtitle-1">
            Connect with mentors, funding, and marketplace to grow your business
          </p>
          <div className="hero-buttons-1">
            <button className="hero-btn primary-1">Get Started</button>
            <button className="hero-btn secondary-1">Explore Grants</button>
          </div>
        </div>
      </div>
 <section className="platform-section">
      <h2 className="platform-title">Our Platform</h2>
      <h3 className="platform-subtitle">Everything You Need to Succeed</h3>
      <p className="platform-description">
        Our comprehensive ecosystem provides the tools, connections, and resources to transform your entrepreneurial vision into reality.
      </p>
    </section>

      <section className="features-section">
      <div className="feature-card">
        <h3 className="feature-title">Funding & Grants</h3>
        <ul className="feature-list">
          <li>Government grants database</li>
          <li>Private investor connections</li>
          <li>Application guidance</li>
        </ul>
        <button className="feature-button" onClick={() => navigate('/grant-page')}>
          Explore Funding
        </button>
      </div>

      <div className="feature-card">
        <h3 className="feature-title">Expert Mentorship</h3>
        <ul className="feature-list">
          <li>Mentor matching</li>
          <li>Industry-specific guidance</li>
          <li>Regular progress tracking</li>
        </ul>
        <button className="feature-button" onClick={() => navigate('/connect-mentor')}>
          Find Mentors
        </button>
      </div>

      <div className="feature-card">
        <h3 className="feature-title">Marketplace</h3>
        <ul className="feature-list">
          <li>Easy store setup</li>
          <li>Payment processing</li>
          <li>Marketing tools</li>
        </ul>
        <button className="feature-button" onClick={() => navigate('/Marketplacesellpage')}>
          Visit Marketplace
        </button>
      </div>
    </section>
   <section className="success-section">
      <h2 className="success-title">Inspiring Success Stories</h2>
      <p className="success-subtitle">
        Real women, real businesses, real impact. See how ElevateHer has transformed entrepreneurial dreams into thriving enterprises.
      </p>

      <div className="story-grid">

        <div className="story-card">
          <h3 className="story-name">Salma Sa'id</h3>
          <p className="story-role">Fashion Designer – Lagos</p>
          <p className="story-text">
            Through ElevateHer, I secured ₦2.5M in funding and found a mentor who helped me scale my fashion brand to 3 states across Nigeria.
          </p>
          <div className="story-stars">⭐⭐⭐⭐⭐</div>
        </div>

        <div className="story-card">
          <h3 className="story-name">Fauziyya nure</h3>
          <p className="story-role">Tech Entrepreneur – Abuja</p>
          <p className="story-text">
            The mentorship program connected me with industry leaders. My fintech startup now serves over 10,000 customers nationwide.
          </p>
          <div className="story-stars">⭐⭐⭐⭐⭐</div>
        </div>

        <div className="story-card">
          <h3 className="story-name">Fatima Ibrahim</h3>
          <p className="story-role">Agritech Founder – Kano</p>
          <p className="story-text">
            ElevateHer's marketplace helped me reach customers beyond my local market. My organic farm products now ship nationwide.
          </p>
          <div className="story-stars">⭐⭐⭐⭐⭐</div>
        </div>

      </div>
    </section>
    </div>
  );
};

export default HeroSection;
