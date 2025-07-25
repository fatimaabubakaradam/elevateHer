import React, { useState } from 'react';
import './Signmentor.css'; // Using your existing style
import { FaChalkboardTeacher, FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import Footer from './Footer';

const steps = [
  {
    title: 'Get Matched',
    description:
      'Complete your profile and get matched with mentors who align with your goals and industry.',
    icon: '🧠',
  },
  {
    title: 'Connect & Learn',
    description:
      'Schedule regular sessions with your mentor through video calls, messages, or in-person meetings.',
    icon: '💬',
  },
  {
    title: 'Achieve Success',
    description:
      'Track your progress, achieve your goals, and build lasting professional relationships.',
    icon: '🚀',
  },
];

const ConnectMentorPage = () => {
  

  return (
    <div className="signin-mentor-container">
      {/* Inspiration Banner */}
      <div className="full-width-inspiration">
        <div className="inspiration-content">
          <div className="inspiration-quote">
            <blockquote>
              "Behind every successful woman is a tribe of mentors who believed in her."
            </blockquote>
          </div>
          <div className="mentor-benefits">
            <h3>Why Connect with a Mentor?</h3>
            <ul>
              <li><FaChalkboardTeacher className="benefit-icon" /><span>Gain expert insights and business guidance</span></li>
              <li><FaChalkboardTeacher className="benefit-icon" /><span>Accelerate your growth with support</span></li>
              <li><FaChalkboardTeacher className="benefit-icon" /><span>Build powerful relationships</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="banner">
      <h2 className="title">Expert Mentorship</h2>
      <p className="subtitle">Learn from Industry Leaders</p>
      <p className="description">
        Connect with experienced mentors who understand your journey and can guide you to success.
      </p>
      <div className="buttons">
        <button className="btn red-btn">Find Your Mentor</button>
        <button className="btn white-btn">Become a Mentor</button>
      </div>
    </div>

      <div className="steps-container">
      {steps.map((step, index) => (
        <div className="step-box" key={index}>
          <div className="step-icon">{step.icon}</div>
          <h3 className="step-title">{step.title}</h3>
          <p className="step-description">{step.description}</p>
        </div>
      ))}
    </div>
   <div className="mentors-container">
      <h2 className="section-title">Meet Our Expert Mentors</h2>
      <div className="mentor-grid">
        
        {/* Mentor 1 */}
        <div className="mentor-card">
          <h3 className="mentor-name">Dr. Amina Hassan</h3>
          <p className="mentor-role">Tech Entrepreneur & CEO</p>
          <p className="mentor-company">InnovateTech Nigeria</p>
          <span className="mentor-status available">Available</span>
          <p className="mentor-desc">
            Serial entrepreneur with 3 successful exits. Passionate about empowering women in tech.
          </p>
          <p><strong>Experience:</strong> 15+ years</p>
          <p><strong>Location:</strong> Lagos</p>
          <p><strong>Rating:</strong> 4.9 (150 sessions)</p>
          <p><strong>Expertise:</strong> Technology, Startup Strategy, Product Development</p>
          <button className="connect-btn">Connect</button>
        </div>
<div className="mentor-card">
          
             <h3 className="mentor-name">Dr. Abdallah muhammad</h3>
          <p className="mentor-role">Agribusiness Consultant</p>
          <p className="mentor-company">InnovateTech Nigeria</p>
          <span className="mentor-status available">Available</span>
<p className="mentor-desc">
            Serial entrepreneur with 3 successful exits. Passionate about empowering women in tech.
          </p>
          <p><strong>Location:</strong> Sokoto</p>
          <p><strong>Experience:</strong> 18 years</p>
          <p><strong>Rating:</strong> 4.9</p>
          <p><strong>Expertise:</strong> Agriculture, Rural Innovation</p>
          <p><strong>Status:</strong> <span className="status-busy">Busy</span></p>
                    <button className="connect-btn">Connect</button>

        </div>
        {/* Mentor 2 */}
        <div className="mentor-card">
          <h3 className="mentor-name">Mrs. Folake Adebayo</h3>
          <p className="mentor-role">Fashion Industry Expert</p>
          <p className="mentor-company">Adire Couture House</p>
          <span className="mentor-status available">Available</span>
          <p className="mentor-desc">
            Award-winning fashion designer who built a global brand from traditional Nigerian textiles.
          </p>
          <p><strong>Experience:</strong> 20+ years</p>
          <p><strong>Location:</strong> Ibadan</p>
          <p><strong>Rating:</strong> 4.8 (200 sessions)</p>
          <p><strong>Expertise:</strong> Fashion Design, Brand Building, Export Business</p>
          <button className="connect-btn">Connect</button>
        </div>
         <div className="mentor-card">
                    <h3 className="mentor-name">Maryam Suleiman</h3>
          <p className="mentor-role">Marketing Coach</p>
           <p className="mentor-company">Adire Couture House</p>
          <span className="mentor-status available">Available</span>
          <p className="mentor-desc">
            Award-winning fashion designer who built a global brand from traditional Nigerian textiles.
          </p>

          <p><strong>Location:</strong> Ilorin</p>
          <p><strong>Experience:</strong> 11 years</p>
          <p><strong>Rating:</strong> 4.8</p>
          <p><strong>Expertise:</strong> Digital Marketing, Brand Strategy</p>
          <p><strong>Status:</strong> <span className="status-available">Available</span></p>
                              <button className="connect-btn">Connect</button>

        </div>

        {/* Mentor 3 */}
        <div className="mentor-card">
          <h3 className="mentor-name">Dr. Kemi Ogundimu</h3>
          <p className="mentor-role">Agricultural Innovation Specialist</p>
          <p className="mentor-company">GreenHarvest Solutions</p>
          <span className="mentor-status busy">Busy</span>
          <p className="mentor-desc">
            Leading expert in sustainable agriculture and food security solutions across West Africa.
          </p>
          <p><strong>Experience:</strong> 12+ years</p>
          <p><strong>Location:</strong> Abuja</p>
          <p><strong>Rating:</strong> 4.9 (95 sessions)</p>
          <p><strong>Expertise:</strong> Agribusiness, Supply Chain, Sustainable Farming</p>
          <button className="connect-btn">Connect</button>
        </div>

         <div className="mentor-card">
          <p className="mentor-title">Tech Innovator</p>

          <h3 className="mentor-name">          Amina Al-Faruq
</h3>
          <p className="mentor-role">Tech Innovator</p>
          <p className="mentor-company">GreenHarvest Solutions</p>
          <span className="mentor-status busy">Busy</span>
          <p><strong>Location:</strong> Lagos</p>
          <p><strong>Experience:</strong> 12 years</p>
          <p><strong>Rating:</strong> 4.9</p>
          <p><strong>Expertise:</strong> Web Development, UX/UI Design</p>
          <p><strong>Status:</strong> <span className="status-available">Available</span></p>
                    <button className="connect-btn">Connect</button>
        </div>

      </div>
    </div>

    <div className="promo-container">
      <div className="promo-top">
        <div className="stats">
          <div className="stat-block">
            <h3>150+</h3>
            <p>Expert Mentors</p>
          </div>
          <div className="stat-block">
            <h3>2,500+</h3>
            <p>Mentorship Sessions</p>
          </div>
          <div className="stat-block">
            <h3>95%</h3>
            <p>Success Rate</p>
          </div>
          <div className="stat-block">
            <h3>4.8</h3>
            <p>Average Rating</p>
          </div>
        </div>
      </div>

      <div className="promo-bottom">
        <h2 className="cta-title">Ready to Find Your Mentor?</h2>
        <p className="cta-subtext">
          Join thousands of women entrepreneurs achieving success through expert mentorship.
        </p>
        <button className="cta-button">Get Started Today</button>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default ConnectMentorPage;
