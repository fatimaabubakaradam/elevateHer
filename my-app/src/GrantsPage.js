import React from 'react';
import './Signmentor.css'; // Reuse your existing styles
import { FaHandHoldingUsd } from 'react-icons/fa';
import Footer from './Footer';

const sampleGrants = [
  {
    id: 1,
    title: "SheLeads Business Grant 2025",
    sponsor: "Women in Business Africa",
    amount: "₦2,000,000",
    deadline: "July 30, 2025",
    description: "Supporting early-stage women entrepreneurs in retail and agribusiness."
  },
  {
    id: 2,
    title: "Digital Empowerment Grant",
    sponsor: "TechWomen NG",
    amount: "₦1,000,000",
    deadline: "August 15, 2025",
    description: "For women building tech-driven startups across Nigeria."
  },
  {
    id: 3,
    title: "ElevateHer Growth Fund",
    sponsor: "ElevateHer",
    amount: "₦500,000",
    deadline: "Rolling",
    description: "Micro-funding for registered ElevateHer entrepreneurs scaling up."
  }
];

const GrantsPage = () => {
  return (
    <div className="signin-mentor-container">
      {/* Hero Section */}
      <div className="full-width-inspiration">
        <div className="inspiration-content">
          <div className="inspiration-quote">
            <blockquote>
              "Grants don’t just fund ideas—they fund hope, growth, and independence."
            </blockquote>
          </div>
          <div className="mentor-benefits">
            <h3>Explore Funding Opportunities</h3>
            <ul>
              <li>
                <FaHandHoldingUsd className="benefit-icon" />
                <span>Apply for available grants</span>
              </li>
              <li>
                <FaHandHoldingUsd className="benefit-icon" />
                <span>Get funding to grow your business</span>
              </li>
              <li>
                <FaHandHoldingUsd className="benefit-icon" />
                <span>See eligibility, sponsors & deadlines</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Grants Listing */}
      <div className="signin-mentor-form-container">
        <div className="signin-mentor-left">
          <div className="signin-mentor-header">
            <h2>Available Grants</h2>
            <p>Browse and apply to funding that matches your business goals.</p>
          </div>

          <div className="grant-list">
            {sampleGrants.map(grant => (
              <div key={grant.id} className="grant-card">
                <h3>{grant.title}</h3>
                <p><strong>Sponsor:</strong> {grant.sponsor}</p>
                <p><strong>Amount:</strong> {grant.amount}</p>
                <p><strong>Deadline:</strong> {grant.deadline}</p>
                <p>{grant.description}</p>
                <button className="signin-button" onClick={() => alert('Redirect to apply form coming soon!')}>
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GrantsPage;
