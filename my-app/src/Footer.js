import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";
import './Footer.css';

export default function Footer() {
  return (
<div>
            <canvas id="footer-particles"></canvas>
            <footer className="footer">

        <div className="footer-cta">
  <h4>Join Our Movement</h4>
  <p>Subscribe to receive updates on funding, mentorship, and business tools.</p>
  <form className="newsletter-form">
    <input type="email" placeholder="Enter your email" required />
    <button type="submit">Subscribe</button>
  </form>
  <Link to="/apply" className="apply-btn">Apply Now</Link>
</div>

      <div className="decorativeElement"></div>
      <div className="decorativeElement"></div>
      
      <div className="container-1">
        <div className="brand">
          <h3 className="logo">ElevateHer</h3>
          <p className="tagline">
            Empowering Nigerian women entrepreneurs through funding, mentorship, and growth opportunities.
          </p>
          <div className="socialLinks">
            <a href="#" className="socialIcon" aria-label="Facebook">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="socialIcon" aria-label="Twitter">
              <FaTwitter size={16} />
            </a>
            <a href="#" className="socialIcon" aria-label="Instagram">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="socialIcon" aria-label="LinkedIn">
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="sectionTitle">Quick Links</h4>
          <ul className="linkList">
            {[
              {name: "Home", path: "/"},
              {name: "Funding Opportunities", path: "/funding"},
              {name: "Find a Mentor", path: "/mentors"},
              {name: "Marketplace", path: "/marketplace"},
              {name: "Success Stories", path: "/success"}
            ].map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="linkItem">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="sectionTitle">Resources</h4>
          <ul className="linkList">
            {[
              {name: "Blog & Articles", path: "/blog"},
              {name: "Entrepreneur Toolkit", path: "/toolkit"},
              {name: "FAQs", path: "/faq"},
              {name: "Terms of Service", path: "/terms"},
              {name: "Privacy Policy", path: "/privacy"}
            ].map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="linkItem">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="sectionTitle">Contact Us</h4>
          <div className="contactInfo">
            <div className="contactItem">
              <FaMapMarkerAlt className="contactIcon" />
              <span>Kano, Nigeria</span>
            </div>
            <a href="mailto:hello@elevatehermentoring.com" className="contactItem">
              <FaEnvelope className="contactIcon" />
              <span>hello@elevatehermentoring.com</span>
            </a>
            <a href="tel:+2341234567890" className="contactItem">
              <FaPhone className="contactIcon" />
              <span>+234 123 000 0000</span>
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} ElevateHer Mentoring Platform. All rights reserved.
      </div>
    </footer>

</div>
    
  );
}