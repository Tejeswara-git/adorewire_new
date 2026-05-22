import React from 'react';

const AboutCTASection = () => {
  return (
    <section className="about-cta-section">
      <div className="about-cta-container">
        <div className="about-cta-content">
          <h2 className="about-cta-title">Ready to make an impact?</h2>
          <p className="about-cta-desc">
            Join our global community of volunteers, partners, and supporters. Whether you want to volunteer, donate, or partner with us, there's a place for you.
          </p>
          <div className="about-cta-buttons">
            <button className="btn btn-primary">Apply to Join</button>
            <button className="btn btn-white">View open roles</button>
          </div>
        </div>
        <div className="about-cta-image-wrapper">
          <img src="/src/assets/images/12.jpg" alt="Join Us" className="about-cta-img" />
        </div>
      </div>
    </section>
  );
};

export default AboutCTASection;
