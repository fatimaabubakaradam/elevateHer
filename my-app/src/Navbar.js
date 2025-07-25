import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setShowDropdown(false);
    setMenuOpen(false); // Close overlay menu
    navigate(path);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-top">
          <h1 className="navbar-title">ElevateHer Mentoring Platform</h1>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="navbar-links desktop-only">
          <div className="navbar-dropdown">

        <Link to="/" className="navbar-link">Home</Link>

            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="signup-button"
            >
              Sign In
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <button onClick={() => handleNavigation("/signin-mentor")} className="dropdown-item">
                  Sign in as Mentor
                </button>
                <button onClick={() => handleNavigation("/signin-entrepreneur")} className="dropdown-item">
                  Sign in as Entrepreneur
                </button>
                <button onClick={() => handleNavigation("/sigin-funding")} className="dropdown-item">
                  Sign in as Funding Accessor
                </button>
              </div>
            )}
          </div>
          <Link to="/grant-page" className="navbar-link">Apply for Grant</Link>
          <Link to="/connect-mentor" className="navbar-link">Connect with Mentor</Link>
          <Link to="/Marketplacesellpage" className="navbar-link">Sell in Our Marketplace</Link>
          <Link to="/forum" className="navbar-link">Community Forum</Link>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-header">
            <span className="mobile-menu-title">ElevateHer</span>
            <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>
          </div>
          <div className="mobile-menu-content">
                        <button onClick={() => handleNavigation("/")} className="mobile-menu-item">
              Home
            </button>
            <button onClick={() => handleNavigation("/signin-mentor")} className="mobile-menu-item">
              Sign in as Mentor
            </button>
            <button onClick={() => handleNavigation("/signin-entrepreneur")} className="mobile-menu-item">
              Sign in as Entrepreneur
            </button>
            <button onClick={() => handleNavigation("/sigin-funding")} className="mobile-menu-item">
              Sign in as Funding Accessor
            </button>
            <Link to="/grant-page" onClick={() => setMenuOpen(false)} className="mobile-menu-item">
              Apply for Grant
            </Link>
            <Link to="/connect-mentor" onClick={() => setMenuOpen(false)} className="mobile-menu-item">
              Connect with Mentor
            </Link>
            <Link to="/Marketplacesellpage" onClick={() => setMenuOpen(false)} className="mobile-menu-item">
              Sell in Marketplace
            </Link>
            <Link to="/forum" onClick={() => setMenuOpen(false)} className="mobile-menu-item">
              Community Forum
            </Link>
          </div>
        </div>
      )}

      {/* <HeroSection /> */}
    </div>
  );
};

export default Navbar;