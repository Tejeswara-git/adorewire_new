import React from 'react';

const AboutLeadershipSection = () => {
  return (
    <section className="about-leadership-section">
      <div className="about-leadership-header">
        <h2 className="about-section-title text-center">Our Leadership</h2>
        <p className="about-section-subtitle text-center">
          Meet the dedicated team working tirelessly to drive Adore's mission forward.
        </p>
      </div>
      
      <div className="about-leadership-grid">
        <div className="leadership-card">
          <div className="leadership-image-wrapper">
            <img src="/src/assets/images/team-sarah.jpg" alt="Dr. Sarah Mitchell" />
          </div>
          <h3 className="leadership-name">Dr. Sarah Mitchell</h3>
          <p className="leadership-role">Executive Director</p>
          <p className="leadership-desc">Leading Adore with a vision for global impact and sustainable youth empowerment.</p>
        </div>

        <div className="leadership-card">
          <div className="leadership-image-wrapper">
            <img src="/src/assets/images/team-david.jpg" alt="David Chen" />
          </div>
          <h3 className="leadership-name">David Chen</h3>
          <p className="leadership-role">Director of Operations</p>
          <p className="leadership-desc">Ensuring our programs run efficiently and effectively across all regions.</p>
        </div>

        <div className="leadership-card">
          <div className="leadership-image-wrapper">
            <img src="/src/assets/images/team-aisha.jpg" alt="Aisha Rahman" />
          </div>
          <h3 className="leadership-name">Aisha Rahman</h3>
          <p className="leadership-role">Head of Programs</p>
          <p className="leadership-desc">Designing and implementing initiatives that create meaningful change in communities.</p>
        </div>

        <div className="leadership-card">
          <div className="leadership-image-wrapper">
            <img src="/src/assets/images/team-marcus.jpg" alt="Marcus Thorne" />
          </div>
          <h3 className="leadership-name">Marcus Thorne</h3>
          <p className="leadership-role">Volunteer Coordinator</p>
          <p className="leadership-desc">Building and nurturing our global network of dedicated volunteers and supporters.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutLeadershipSection;
