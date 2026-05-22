import { Link } from 'react-router-dom'
import aboutImage from '../assets/Images/2.jpg'

function AboutSection() {
  return (
    <section className="about" id="about-section">
      <div className="about-container">
        <div className="about-image-wrapper">
          <div className="about-image-placeholder">
            <img src={aboutImage} alt="Group discussion" className="about-image" />
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
