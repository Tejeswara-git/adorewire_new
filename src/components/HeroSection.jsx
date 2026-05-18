import { Link } from 'react-router-dom'

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
              <svg width="100%" height="100%" viewBox="0 0 500 400" fill="none" preserveAspectRatio="xMidYMid slice">
                <rect width="500" height="400" fill="#3a4a5c"/>
                <circle cx="180" cy="160" r="45" fill="#5a7a9a" opacity="0.6"/>
                <circle cx="300" cy="140" r="55" fill="#4a6a8a" opacity="0.5"/>
                <circle cx="240" cy="200" r="50" fill="#6a8aaa" opacity="0.4"/>
                <rect x="100" y="220" width="300" height="120" rx="10" fill="#4a6a8a" opacity="0.3"/>
                <text x="250" y="170" textAnchor="middle" fill="white" fontSize="18" fontFamily="Inter" opacity="0.7">Youth Together</text>
                <text x="250" y="290" textAnchor="middle" fill="white" fontSize="14" fontFamily="Inter" opacity="0.5">Community Impact</text>
              </svg>
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
