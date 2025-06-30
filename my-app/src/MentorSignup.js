import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaUserTie, FaHandHoldingHeart } from 'react-icons/fa';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Signmentor.css';
import Footer from './Footer';

const MentorSignup = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    // You can connect to backend later
    console.log({ fullName, email, password });
    alert("Mentor registration simulated — backend coming soon!");
  };

  return (
    <div className="signin-mentor-container">
      {/* Top inspirational section */}
      <div className="full-width-inspiration">
        <div className="inspiration-content">
          <div className="inspiration-quote">
            <blockquote>
              "By mentoring women, we light the path for generations to come."
            </blockquote>
          </div>
          <div className="mentor-benefits">
            <h3>Why Become a Mentor?</h3>
            <ul>
              <li>
                <FaHandHoldingHeart className="benefit-icon" />
                <span>Empower women entrepreneurs</span>
              </li>
              <li>
                <FaHandHoldingHeart className="benefit-icon" />
                <span>Build your legacy of impact</span>
              </li>
              <li>
                <FaHandHoldingHeart className="benefit-icon" />
                <span>Network with change-makers</span>
              </li>
              <li>
                <FaHandHoldingHeart className="benefit-icon" />
                <span>Grow professionally and personally</span>
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
              <FaUserTie className="logo-icon" />
              <h1>ElevateHer</h1>
            </div>
            <h2>Create Your Mentor Account</h2>
            <p>Your experience can transform lives and legacies.</p>
          </div>

          <form onSubmit={handleSignup} className="signin-mentor-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <div className="input-with-icon">
                <FaUserTie className="input-icon" />
                <input
                  type="text"
                  id="fullName"
                  placeholder="Jane Doe"
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
              Register as Mentor
            </button>
          </form>

          <div className="signin-mentor-footer">
            <p>
              Already have an account?{' '}
              <Link to="/signin-mentor" className="signup-link">
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

export default MentorSignup;
