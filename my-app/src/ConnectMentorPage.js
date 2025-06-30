import React, { useState } from 'react';
import './Signmentor.css'; // Using your existing style
import { FaChalkboardTeacher, FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import Footer from './Footer';

const ConnectMentorPage = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mentor request submitted! (backend coming soon)');
    setForm({ fullName: '', email: '', message: '' });
  };

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

      {/* Form Section */}
      <div className="signin-mentor-form-container">
        <div className="signin-mentor-left">
          <div className="signin-mentor-header">
            <h2>Request a Mentor</h2>
            <p>Fill in the details below and we’ll match you with the right mentor for your journey.</p>
          </div>

          <form className="signin-mentor-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <div className="input-with-icon">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
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
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell Us About Your Goals</label>
              <div className="input-with-icon">
                <FaCommentDots className="input-icon" />
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What kind of mentor are you looking for?"
                  rows="5"
                  required
                  style={{ paddingLeft: '2.8rem' }}
                />
              </div>
            </div>

            <button type="submit" className="signin-button">
              <FaChalkboardTeacher className="button-icon" />
              Connect with Mentor
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConnectMentorPage;
