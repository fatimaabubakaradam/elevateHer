import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaChalkboardTeacher, FaHandHoldingHeart } from 'react-icons/fa';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Signmentor.css';
import Footer from './Footer';
// import mentorImage from './assets/women.png'; // Make sure this path is correct

const Signmentor = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="signin-mentor-container">
      {/* Full-width inspirational section */}
      <div className="full-width-inspiration">
        <div className="inspiration-content">
          <div className="inspiration-quote">
            <blockquote>
              "When women mentor women, we don't just build businesses - we build legacies."
            </blockquote>
          </div>
          <div className="mentor-benefits">
            <h3>Why Mentor with ElevateHer?</h3>
            <ul>
              <li>
                <FaHandHoldingHeart className="benefit-icon" />
                <span>Make a lasting impact on women entrepreneurs</span>
              </li>
              <li>
                <FaHandHoldingHeart className="benefit-icon" />
                <span>Join a network of like-minded professionals</span>
              </li>
              <li>
                <FaHandHoldingHeart className="benefit-icon" />
                <span>Grow your personal brand</span>
              </li>
              <li>
                <FaHandHoldingHeart className="benefit-icon" />
                <span>Access exclusive mentor resources</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Form section below */}
      <div className="signin-mentor-form-container">
        <div className="signin-mentor-left">
          <div className="signin-mentor-header">
            <div className="logo-container">
              <FaHandHoldingHeart className="logo-icon" />
              <h1>ElevateHer</h1>
            </div>
            <h2>Welcome Back, Mentor!</h2>
            <p>Your guidance empowers women entrepreneurs to thrive.</p>
          </div>

          <form onSubmit={handleSubmit} className="signin-mentor-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-with-icon">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="mentor@example.com"
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
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
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
              <FaChalkboardTeacher className="button-icon" />
              Sign In as Mentor
            </button>
          </form>

          <div className="signin-mentor-footer">
            <p>
              New to ElevateHer as a mentor?{' '}
              <Link to="/mentor-signup" className="signup-link">
                Join our mentor community
              </Link>
            </p>
            <p>
              Are you a mentor?{' '}
              <Link to="/signup-mentor" className="switch-role-link">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signmentor;