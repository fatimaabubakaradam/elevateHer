import React from 'react';
import './Signmentor.css'; // Reuse your existing styles
import { FaHandHoldingUsd } from 'react-icons/fa';
import Footer from './Footer';



const GrantsPage = () => {
   const fundingOpportunities = [
    {
      title: "Women in Tech Grant 2024",
      organization: "Nigerian Tech Foundation",
      description:
        "Supporting women-led technology startups with funding and mentorship opportunities.",
      amount: "₦5,000,000",
      deadline: "March 15, 2024",
      location: "Nationwide",
      category: "Technology",
      type: "Grant",
      link: "https://example.com/apply-tech-grant",
    },
    {
      title: "SME Development Fund",
      organization: "Bank of Industry",
      description:
        "Low-interest loans for small and medium enterprises owned by women entrepreneurs.",
      amount: "₦10,000,000",
      deadline: "April 10, 2024",
      location: "Nigeria",
      category: "Business",
      type: "Loan",
      link: "https://example.com/apply-sme-loan",
    },
    {
      title: "Agribusiness Support Grant",
      organization: "Nigerian Agriculture Foundation",
      description:
        "Funds for women entrepreneurs in the agricultural sector.",
      amount: "₦3,000,000",
      deadline: "May 5, 2024",
      location: "Rural Areas",
      category: "Agriculture",
      type: "Grant",
      link: "https://example.com/apply-agribusiness",
    },
    {
      title: "Creative Industry Loan",
      organization: "Creative Nigeria",
      description:
        "Loans for women in fashion, film, and creative sectors.",
      amount: "₦8,000,000",
      deadline: "June 30, 2024",
      location: "Urban Areas",
      category: "Creative",
      type: "Loan",
      link: "https://example.com/apply-creative-loan",
    },
  ];

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
 <div className="funding-header">
      <div className="funding-badge">🔥 Funding & Grants</div>

      <h1 className="funding-title">
        Access <span>Funding Opportunities</span>
      </h1>

      <p className="funding-description">
        Discover grants, loans, and investment opportunities specifically designed
        for women entrepreneurs in Nigeria.
      </p>

      <div className="funding-search">
        <input
          type="text"
          placeholder="Search funding opportunities..."
          className="funding-input"
        />
        <button className="funding-filter">Filter</button>
        <button className="funding-search-btn">Search</button>
      </div>
    </div>
     <div className="funding-list-container">
      <div className="funding-stats">
        <div>
          <h2>₦2.5B+</h2>
          <p>Total Available Funding</p>
        </div>
        <div>
          <h2>150+</h2>
          <p>Active Opportunities</p>
        </div>
        <div>
          <h2>500+</h2>
          <p>Women Funded</p>
        </div>
        <div>
          <h2>85%</h2>
          <p>Success Rate</p>
        </div>
      </div>

      {fundingOpportunities.map((fund, index) => (
        <div key={index} className="funding-card">
          <div className="funding-card-header">
            <h3>{fund.title}</h3>
            <p>{fund.organization}</p>
          </div>
          <p className="funding-description">{fund.description}</p>
          <div className="funding-details">
            <span>{fund.amount}</span>
            <span>{fund.deadline}</span>
            <span>{fund.location}</span>
            <span>{fund.category}</span>
          </div>
          <div className="funding-tags">
            <span className="tag open">Open</span>
            <span className="tag">{fund.type}</span>
          </div>
          <div className="funding-buttons">
            <a href={fund.link} target="_blank" rel="noopener noreferrer">
              <button className="apply-btn">Apply Now</button>
            </a>
            <button className="learn-btn">Learn More</button>
          </div>
        </div>
      ))}
    </div>
     <div className="application-help-section">
      <h2>Need Help with Your Application?</h2>
      <p>
        Our expert team can help you prepare winning funding applications and
        connect you with the right opportunities.
      </p>
      <div className="application-help-buttons">
        <button className="help-btn">Get Application Help</button>
        <input
          type="text"
          placeholder="Enter your email"
          className="email-input"
        />
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default GrantsPage;
