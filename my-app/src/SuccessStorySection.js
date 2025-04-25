import React from "react";
import "./SuccessStorySection.css";
import MentorMarketplace from './MentorMarketplace';

const SuccessStorySection = () => {
  return (
    <section className="success-section">
      <h2 className="success-title">Success Stories</h2>

      <div className="stories-wrapper">
        <div className="story-card">
          <div className="icon">👜</div>
          <h1>Aisha Musa</h1>
          <p className="role">Founder, Aisha's Fashion Hub</p>
          <p className="quote">“ElevateHer helped me turn my passion into a thriving business.”</p>
        </div>

        <div className="story-card">
          <div className="icon">🍲</div>
          <h1>Fatima Bello</h1>
          <p className="role">CEO, Fatima Foods</p>
          <p className="quote">“Thanks to the startup grant, I now serve over 5,000 customers monthly.”</p>
        </div>

        <div className="story-card">
          <div className="icon">🧵</div>
          <h1>Zainab Sulaiman</h1>
          <p className="role">Owner, Zainab Crafts</p>
          <p className="quote">“The mentorship and funding support changed everything for me.”</p>
        </div>
      </div>

      <MentorMarketplace />
    </section>
  );
};

export default SuccessStorySection;
