import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaMoneyCheckAlt, FaHandHoldingHeart } from 'react-icons/fa';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Signmentor.css'; 
import Footer from './Footer';

const SignFunding = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="signin-mentor-container">
      {/* Full-width inspirational section */}
      <div className="full-width-inspiration">
        <div className="inspiration-content">
          <div className="inspiration-quote">
            <blockquote>
              "Funding innovation means unlocking the potential of women everywhere."
            </blockquote>
          </div>
          <div className="mentor-benefits">
            <h3>Why Support through ElevateHer?</h3>
            <ul>
              <li>
                <FaHandHoldingHeart className="benefit-icon" />
                <span>Support promising women-led ventures</span>
              </li>
              <li>
                <FaHandHoldingHeart className="benefit-icon" />
                <span>Be part of a purpose-driven network</span>
              </li>
              <li>
                <FaHandHoldingHeart className="benefit-icon" />
                <span>Promote sustainable impact</span>
              </li>
              <li>
                <FaHandHoldingHeart className="benefit-icon" />
                <span>Get visibility among changemakers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Form section */}
      <div className="signin-mentor-form-container">
        <div className="signin-mentor-left">
          <div className="signin-mentor-header">
            <div className="logo-container">
              <FaHandHoldingHeart className="logo-icon" />
              <h1>ElevateHer</h1>
            </div>
            <h2>Welcome Back, Funding Partner!</h2>
            <p>Your support empowers the future of women-led businesses.</p>
          </div>

          <form onSubmit={handleSubmit} className="signin-mentor-form">
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
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Enter your password"
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

            <div className="form-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link to="/forgot-password" className="forgot-password">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="signin-button">
              <FaMoneyCheckAlt className="button-icon" />
              Sign In as Funding Accessor
            </button>
          </form>

          <div className="signin-mentor-footer">
            <p>
              New to ElevateHer as a funder?{' '}
              <Link to="/funding-signup" className="signup-link">
                Join our funding community
              </Link>
            </p>
            {/* <p>
              Are you a mentor or entrepreneur?{' '}
              <Link to="/signin" className="switch-role-link">
                Sign in here
              </Link>
            </p> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignFunding;
