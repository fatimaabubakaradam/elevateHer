import React, { useState } from 'react';
import './Signmentor.css';

import { FaStore, FaBoxOpen, FaEnvelope, FaMoneyBillWave } from 'react-icons/fa';
import Footer from './Footer';

const MarketplaceSellPage = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    productDetails: '',
    priceRange: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Marketplace product submission successful! (Backend integration coming soon)');
    setFormData({ businessName: '', email: '', productDetails: '', priceRange: '' });
  };

  return (
    <div className="signin-mentor-container">
      {/* Hero Banner */}
      <div className="full-width-inspiration">
        <div className="inspiration-content">
          <div className="inspiration-quote">
            <blockquote>
              "Empowered women empower economies. Share your brilliance in our marketplace."
            </blockquote>
          </div>
          <div className="mentor-benefits">
            <h3>Why Sell on ElevateHer?</h3>
            <ul>
              <li><FaStore className="benefit-icon" /><span>Reach thousands of women-focused customers</span></li>
              <li><FaStore className="benefit-icon" /><span>Grow your brand visibility and sales</span></li>
              <li><FaStore className="benefit-icon" /><span>Support from a platform built for you</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Product Submission Form */}
      <div className="signin-mentor-form-container">
        <div className="signin-mentor-left">
          <div className="signin-mentor-header">
            <h2>List Your Product</h2>
            <p>Complete the form to request a product listing in our women-powered marketplace.</p>
          </div>

          <form className="signin-mentor-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="businessName">Business Name</label>
              <div className="input-with-icon">
                <FaBoxOpen className="input-icon" />
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="e.g. SheCrafts Nigeria"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Contact Email</label>
              <div className="input-with-icon">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="productDetails">Product Description</label>
              <div className="input-with-icon">
                <FaBoxOpen className="input-icon" />
                <textarea
                  id="productDetails"
                  name="productDetails"
                  rows="4"
                  value={formData.productDetails}
                  onChange={handleChange}
                  placeholder="Tell us about the product(s) you want to sell"
                  required
                  style={{ paddingLeft: '2.8rem' }}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="priceRange">Price Range</label>
              <div className="input-with-icon">
                <FaMoneyBillWave className="input-icon" />
                <input
                  type="text"
                  id="priceRange"
                  name="priceRange"
                  value={formData.priceRange}
                  onChange={handleChange}
                  placeholder="₦2,000 - ₦10,000"
                  required
                />
              </div>
            </div>

            <button type="submit" className="signin-button">
              <FaStore className="button-icon" />
              Submit Product Listing
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MarketplaceSellPage;
