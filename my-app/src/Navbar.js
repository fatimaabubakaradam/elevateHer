import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import HeroSection from "./HeroSection"; // ✅ import Hero here

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setShowDropdown(false);
    navigate(path);
  };

  return (
    <div>
      <nav className="navbar">
        <h1 className="navbar-title">ElevateHer Mentoring Platform</h1>

        <div className="navbar-links centered-nav">
          {/* Sign Up Dropdown */}
          <div className="navbar-dropdown">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="signup-button"
            >
              Sign Up
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <button
                  onClick={() => handleNavigation("/mentor-dashboard")}
                  className="dropdown-item"
                >
                  Sign in as Mentor
                </button>
                <button
                  onClick={() => handleNavigation("/entrepreneur-dashboard")}
                  className="dropdown-item"
                >
                  Sign in as Entrepreneur
                </button>
                <button
                  onClick={() => handleNavigation("/funding-dashboard")}
                  className="dropdown-item"
                >
                  Sign in as Funding Accessor
                </button>
              </div>
            )}
          </div>

          {/* Other nav links */}
          <Link to="/apply-grant" className="navbar-link">
            Apply for Grant
          </Link>
          <Link to="/connect-mentor" className="navbar-link">
            Connect with Mentor
          </Link>
          <Link to="/marketplace" className="navbar-link">
            Sell in Our Marketplace
          </Link>
          <Link to="/forum" className="navbar-link">
            Community Forum
          </Link>
        </div>
      </nav>

      {/* ✅ HeroSection rendered inside Navbar */}
      <HeroSection />
    </div>
  );
};

export default Navbar;
