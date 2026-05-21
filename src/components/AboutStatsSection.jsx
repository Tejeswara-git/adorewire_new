import React from 'react';

const AboutStatsSection = () => {
  return (
    <section className="about-stats-section">
      <div className="about-stats-container">
        <div className="about-stat-item">
          <div className="about-stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <div className="about-stat-value">1M+</div>
          <div className="about-stat-label">STUDENTS IMPACTED</div>
        </div>
        
        <div className="about-stat-item">
          <div className="about-stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
          </div>
          <div className="about-stat-value">500+</div>
          <div className="about-stat-label">SCHOOLS REACHED</div>
        </div>
        
        <div className="about-stat-item">
          <div className="about-stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path></svg>
          </div>
          <div className="about-stat-value">5,000+</div>
          <div className="about-stat-label">ACTIVE VOLUNTEERS</div>
        </div>
        
        <div className="about-stat-item">
          <div className="about-stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          </div>
          <div className="about-stat-value">12+</div>
          <div className="about-stat-label">YEARS OF IMPACT</div>
        </div>
      </div>
    </section>
  );
};

export default AboutStatsSection;
