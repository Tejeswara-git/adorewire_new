import { Link } from 'react-router-dom'
import heroImage from '../assets/Images/6.png'

function HeroSection() {
  return (
    <section className="hero" id="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-tagline">Be the Change. Lead the Future.</p>
          <h1 className="hero-title">
            Empowering the{' '}
            <br />
            Next Generation{' '}
            <br />
            of <em className="hero-title-accent">Changemakers</em>
          </h1>
          <p className="hero-description">
            We are building a movement of young leaders who are passionate about creating lasting change in their communities through education, mentorship, and action.
          </p>
          <div className="hero-buttons">
            <Link to="/feedback" className="btn btn-primary" id="hero-join-btn">
              Join Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="btn-icon">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/about" className="btn btn-outline" id="hero-learn-btn">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <div className="hero-image-placeholder">
              <img src={heroImage} alt="Youth community" className="hero-image" />
            </div>
          </div>
          <div className="hero-image-dot hero-image-dot--1"></div>
          <div className="hero-image-dot hero-image-dot--2"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
