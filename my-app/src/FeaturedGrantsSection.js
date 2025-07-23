import React from "react";
import "./FeaturedGrantsSection.css";
import SuccessStorySection from "./SuccessStorySection";


const FeaturedGrantsSection = () => {
  return (
    <section className="grants-section">
      <h2 className="grants-title">Featured Grants</h2>
      <div className="grants-cards">
        <div className="grant-card">
          <h3>Women Business Development Grant</h3>
          <p>Support for women-led businesses to scale and grow.</p>
          <button className="apply-btn">Apply Now</button>
        </div>
        <div className="grant-card">
          <h3>Startup Fund for Women Entrepreneurs</h3>
          <p>Kickstart your business idea with early-stage funding.</p>
          <button className="apply-btn">Apply Now</button>
        </div>
        <div className="grant-card">
          <h3>Female Founder Growth Grant</h3>
          <p>Accelerate your existing startup with targeted support.</p>
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
      <SuccessStorySection />

    </section>
  );
};

export default FeaturedGrantsSection;
