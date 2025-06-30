import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaStoreAlt, FaHandHoldingHeart } from 'react-icons/fa';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './Signmentor.css'; 

const SignEntrepreneur = () => {
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
              "Empowered women empower the world—start your journey with ElevateHer."
            </blockquote>
          </div>
          <div className="mentor-benefits">
            <h3>Why Join as an Entrepreneur?</h3>
            <ul>
              <li>
                <FaHandHoldingHeart className="benefit-icon" />
                <span>Connect with inspiring mentors</span>
              </li>
              <li>
                <FaHandHoldingHeart className="benefit-icon" />
                <span>Access funding and business tools</span>
              </li>
              <li>
                <FaHandHoldingHeart className="benefit-icon" />
                <span>Grow and scale your business</span>
              </li>
              <li>
                <FaHandHoldingHeart className="benefit-icon" />
                <span>Be part of a supportive community</span>
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
            <h2>Welcome Back, Entrepreneur!</h2>
            <p>Take the next step toward building your dream business.</p>
          </div>

          <form onSubmit={handleSubmit} className="signin-mentor-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-with-icon">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="entrepreneur@example.com"
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
              <FaStoreAlt className="button-icon" />
              Sign In as Entrepreneur
            </button>
          </form>

          <div className="signin-mentor-footer">
            <p>
              New to ElevateHer as an enterprenuer?{' '}
              <Link to="/signup-enterprenuer" className="signup-link">
                Register here
              </Link>
            </p>
            {/* <p>
              Are you a mentor?{' '}
              <Link to="/signin-mentor" className="switch-role-link">
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

export default SignEntrepreneur;
