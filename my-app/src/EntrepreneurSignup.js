import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaUser, FaLightbulb } from 'react-icons/fa';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Signmentor.css';
import Footer from './Footer';

const EntrepreneurSignup = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    // Connect this to your backend later
    console.log({ fullName, email, password });
    alert("Entrepreneur registration simulated — backend coming soon!");
  };

  return (
    <div className="signin-mentor-container">
      {/* Top inspirational section */}
      <div className="full-width-inspiration">
        <div className="inspiration-content">
          <div className="inspiration-quote">
            <blockquote>
              "Behind every empowered woman is a spark that dared to rise."
            </blockquote>
          </div>
          <div className="mentor-benefits">
            <h3>Why Join ElevateHer?</h3>
            <ul>
              <li>
                <FaLightbulb className="benefit-icon" />
                <span>Get matched with inspiring mentors</span>
              </li>
              <li>
                <FaLightbulb className="benefit-icon" />
                <span>Access funding and business tools</span>
              </li>
              <li>
                <FaLightbulb className="benefit-icon" />
                <span>Grow your brand and confidence</span>
              </li>
              <li>
                <FaLightbulb className="benefit-icon" />
                <span>Join a community of women leaders</span>
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
              <FaUser className="logo-icon" />
              <h1>ElevateHer</h1>
            </div>
            <h2>Sign Up as Entrepreneur</h2>
            <p>Your journey to empowerment and business growth starts here.</p>
          </div>

          <form onSubmit={handleSignup} className="signin-mentor-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <div className="input-with-icon">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  id="fullName"
                  placeholder="Aisha Bello"
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
              Join ElevateHer
            </button>
          </form>

          <div className="signin-mentor-footer">
            <p>
              Already have an account?{' '}
              <Link to="/signin-entrepreneur" className="signup-link">
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

export default EntrepreneurSignup;
