import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaUserShield, FaHandHoldingUsd } from 'react-icons/fa';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Signmentor.css';
import Footer from './Footer';

const FundingSignup = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    // Connect this to your backend later
    console.log({ fullName, email, password });
    alert("Funding accessor registration simulated — backend coming soon!");
  };

  return (
    <div className="signin-mentor-container">
      {/* Top inspirational section */}
      <div className="full-width-inspiration">
        <div className="inspiration-content">
          <div className="inspiration-quote">
            <blockquote>
              "When you invest in women, you invest in a better future."
            </blockquote>
          </div>
          <div className="mentor-benefits">
            <h3>Why Join ElevateHer as a Funder?</h3>
            <ul>
              <li>
                <FaHandHoldingUsd className="benefit-icon" />
                <span>Support high-potential women-led businesses</span>
              </li>
              <li>
                <FaHandHoldingUsd className="benefit-icon" />
                <span>Discover vetted entrepreneurs to invest in</span>
              </li>
              <li>
                <FaHandHoldingUsd className="benefit-icon" />
                <span>Track impact and ROI transparently</span>
              </li>
              <li>
                <FaHandHoldingUsd className="benefit-icon" />
                <span>Be part of a change-driven ecosystem</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Signup form */}
      <div className="signin-mentor-form-container">
        <div className="signin-mentor-left">
          <div className="signin-mentor-header">
            <div className="logo-container">
              <FaUserShield className="logo-icon" />
              <h1>ElevateHer</h1>
            </div>
            <h2>Register as Funding Partner</h2>
            <p>Partner with purpose. Elevate dreams. Invest in transformation.</p>
          </div>

          <form onSubmit={handleSignup} className="signin-mentor-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <div className="input-with-icon">
                <FaUserShield className="input-icon" />
                <input
                  type="text"
                  id="fullName"
                  placeholder="Mr. Grant Provider"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-with-icon">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="funder@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-with-icon">
                <FaLock className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Create a secure password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                </button>
              </div>
            </div>

            <button type="submit" className="signin-button">
              Register as Funder
            </button>
          </form>

          <div className="signin-mentor-footer">
            <p>
              Already registered?{' '}
              <Link to="/sigin-funding" className="signup-link">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FundingSignup;
