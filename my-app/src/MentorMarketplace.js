import React from 'react';
import './MentorMarketplace.css';

function MentorMarketplace() {
  return (
    <div className="container">
      <div className="section">
        <h2>Meet the Mentors</h2>
        <div className="box-row">
          <div className="circle">A</div>
          <div className="circle">B</div>
          <div className="circle">N</div>
        </div>
        <button>Find a Mentor</button>
      </div>

      {/* Marketplace Spotlight Section */}
      <div className="section">
        <h2>Marketplace Spotlight</h2>
        <div className="box-row">
          <div className="square">💍</div>
          <div className="square">🧴</div>
          <div className="square">👜</div>
        </div>
        <button>Browse All</button>
      </div>
    </div>
  );
}

export default MentorMarketplace;
