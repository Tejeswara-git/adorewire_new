import React from 'react';

const AboutJourneySection = () => {
  return (
    <section className="about-journey-section">
      <div className="about-journey-container">
        <div className="about-journey-left">
          <h2 className="about-section-title">Our Journey</h2>
          <p className="about-journey-desc">
            From our humble beginnings to a global movement, our journey is defined by the passion of our volunteers and the impact we've created.
          </p>
          <div className="about-journey-alert">
            <div className="alert-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </div>
            <div className="alert-content">
              <h4>Read More About Adore History</h4>
              <p>Explore our detailed historical timeline and milestones.</p>
            </div>
          </div>
        </div>
        <div className="about-journey-right">
          <div className="timeline-item">
            <div className="timeline-dot">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div className="timeline-content">
              <span className="timeline-year">2010</span>
              <p className="timeline-text">Foundation of Adore, starting with local community initiatives.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div className="timeline-content">
              <span className="timeline-year">2014</span>
              <p className="timeline-text">Expanding our reach to 50+ schools and launching our first mentorship program.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div className="timeline-content">
              <span className="timeline-year">2018</span>
              <p className="timeline-text">Global Outreach, establishing partnerships across 10 countries.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot timeline-dot-active">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <div className="timeline-content">
              <span className="timeline-year">2024</span>
              <p className="timeline-text">Impacted 1M+ Students and launched the "Adore Leaders" initiative.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJourneySection;
