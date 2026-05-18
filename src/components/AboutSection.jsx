import { Link } from 'react-router-dom'

function AboutSection() {
  return (
    <section className="about" id="about-section">
      <div className="about-container">
        <div className="about-image-wrapper">
          <div className="about-image-placeholder">
            <svg width="100%" height="100%" viewBox="0 0 480 360" fill="none" preserveAspectRatio="xMidYMid slice">
              <rect width="480" height="360" fill="#e8e0d8"/>
              <rect x="40" y="60" width="400" height="240" rx="12" fill="#c4b8a8" opacity="0.5"/>
              <circle cx="160" cy="150" r="35" fill="#a89888" opacity="0.6"/>
              <circle cx="280" cy="140" r="40" fill="#b8a898" opacity="0.5"/>
              <circle cx="220" cy="180" r="30" fill="#c8b8a8" opacity="0.4"/>
              <rect x="80" y="220" width="320" height="50" rx="8" fill="#b8a898" opacity="0.3"/>
              <text x="240" y="170" textAnchor="middle" fill="#6a5a4a" fontSize="16" fontFamily="Inter" opacity="0.8">Group Discussion</text>
            </svg>
          </div>
          <div className="about-image-badge">
            <span className="about-image-badge-number">15+</span>
            <span className="about-image-badge-text">Years of Impact</span>
          </div>
        </div>
        <div className="about-content">
          <h2 className="section-title about-title">
            Driving Change Through Education & Awareness
          </h2>
          <p className="about-description">
            ADORE is dedicated to empowering communities through holistic education programs, youth mentorship, and sustainable development initiatives. Our approach combines hands-on learning with real-world impact.
          </p>
          <ul className="about-features">
            <li className="about-feature-item">
              <div className="about-feature-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="#4A90D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Skill Development Workshops</span>
            </li>
            <li className="about-feature-item">
              <div className="about-feature-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="#4A90D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Community Outreach Programs</span>
            </li>
            <li className="about-feature-item">
              <div className="about-feature-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="#4A90D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Youth Leadership Training</span>
            </li>
          </ul>
          <Link to="/about" className="btn btn-primary" id="about-learn-more-btn">
            Learn More About Us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="btn-icon">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
