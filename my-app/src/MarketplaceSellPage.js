import React, { useState } from 'react';
import './Signmentor.css';

import { FaStore, FaBoxOpen, FaEnvelope, FaMoneyBillWave } from 'react-icons/fa';
import Footer from './Footer';

const MarketplaceSellPage = () => {
 

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

<section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Women-Led Marketplace</h1>
        <p className="hero-subtitle">Discover Amazing Products & Services</p>
        <p className="hero-description">
          Support women entrepreneurs across Nigeria by shopping their incredible products and services.
        </p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products, services, or sellers..."
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
      </div>
      
    </section>     
    
<div className="category-nav">
      <button className="category active">All</button>
      <button className="category">Fashion</button>
      <button className="category">Beauty</button>
      <button className="category">Food</button>
      <button className="category">Jewelry</button>
      <button className="category">Services</button>
      <button className="category">Health</button>
      <button className="category">Tech</button>
    </div> 

    <div className="product-section">
      <h2 className="section-title">Explore Our Marketplace</h2>
      <div className="product-grid">

        {/* Fashion */}
        <div className="product-card">
          <img src="/images/ankara-bag.jpg" alt="Handwoven Ankara Bags" className="product-image" />
          <h4 className="category-label">Fashion</h4>
          <h3 className="product-name">Handwoven Ankara Bags</h3>
          <p className="seller">By Adunni's Fashion</p>
          <p className="rating">⭐ 4.8 (124 reviews)</p>
          <p className="price">₦15,000</p>
          <button className="cart-button">Add to Cart</button>
        </div>

        {/* Beauty */}
        <div className="product-card">
          <img src="/images/shea-butter.jpg" alt="Organic Shea Butter" className="product-image" />
          <h4 className="category-label">Beauty</h4>
          <h3 className="product-name">Organic Shea Butter</h3>
          <p className="seller">By Natural Beauty Co.</p>
          <p className="rating">⭐ 4.9 (89 reviews)</p>
          <p className="price">₦8,500</p>
          <button className="cart-button">Add to Cart</button>
        </div>

        {/* Food */}
        <div className="product-card">
          <img src="/images/plantain-chips.jpg" alt="Plantain Chips" className="product-image" />
          <h4 className="category-label">Food</h4>
          <h3 className="product-name">Plantain Chips</h3>
          <p className="seller">By Mama's Kitchen</p>
          <p className="rating">⭐ 4.7 (203 reviews)</p>
          <p className="price">₦2,500</p>
          <button className="cart-button">Add to Cart</button>
        </div>

        {/* Jewelry */}
        <div className="product-card">
          <img src="/images/beaded-jewelry.jpg" alt="Beaded Jewelry Set" className="product-image" />
          <h4 className="category-label">Jewelry</h4>
          <h3 className="product-name">Beaded Jewelry Set</h3>
          <p className="seller">By Kemi's Crafts</p>
          <p className="rating">⭐ 4.6 (78 reviews)</p>
          <p className="price">₦12,000</p>
          <button className="cart-button">Add to Cart</button>
        </div>

        {/* Services */}
        <div className="product-card">
          <img src="/images/app-development.jpg" alt="Mobile App Development" className="product-image" />
          <h4 className="category-label">Services</h4>
          <h3 className="product-name">Mobile App Development</h3>
          <p className="seller">By TechSis Solutions</p>
          <p className="rating">⭐ 5.0 (45 reviews)</p>
          <p className="price">₦50,000</p>
          <button className="cart-button">Add to Cart</button>
        </div>

        {/* Health */}
        <div className="product-card">
          <img src="/images/herbal-tea.jpg" alt="Herbal Tea Blend" className="product-image" />
          <h4 className="category-label">Health</h4>
          <h3 className="product-name">Herbal Tea Blend</h3>
          <p className="seller">By Wellness Garden</p>
          <p className="rating">⭐ 4.9 (102 reviews)</p>
          <p className="price">₦3,000</p>
          <button className="cart-button">Add to Cart</button>
        </div>

      </div>
    </div>
      <div className="promo-bottom">
        <h2 className="cta-title">Ready to Start Selling?</h2>
        <p className="cta-subtext">
          Join thousands of women entrepreneurs showcasing their products and services on our platform.
        </p>
        <button className="cta-button">Start Selling today</button>
      </div>
      <Footer />
    </div>
  );
};

export default MarketplaceSellPage;
