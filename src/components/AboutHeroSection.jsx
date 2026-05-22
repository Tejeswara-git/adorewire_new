import React from 'react';

const AboutHeroSection = () => {
  return (
    <section className="about-hero-section">
      <div className="about-page-header">
        <div className="about-breadcrumbs">Home &gt; About Us</div>
        <h1 className="about-page-main-title">Empowering the Next Generation</h1>
        <p className="about-page-main-subtitle">
          ADORE is a global non-profit organization dedicated to nurturing youth leadership,<br />
          fostering environmental sustainability, and cultivating a commitment to positive social change.
        </p>
      </div>

      <div className="about-hero-container">
        <div className="about-hero-text">
          <span className="about-badge">Our Story</span>
          <h2 className="about-section-title">Who We Are</h2>
          <p className="about-description">
            Founded with a vision to create a world where every young person is empowered to realize their full potential, ADORE has grown into a vibrant community of volunteers and changemakers across the globe.
          </p>
          <p className="about-description">
            We believe that true progress comes from grassroots action and youth leadership. By providing accessible education, mentorship, and a platform for advocacy, we strive to build a more equitable and sustainable future for all.
          </p>
          <p className="about-description">
            Join us on our mission to inspire, educate, and act. Together, we can make a lasting impact, one community at a time. Be part of a global movement dedicated to positive change.
          </p>
          <button className="btn btn-primary about-btn-get-involved">Get Involved</button>
        </div>
        <div className="about-hero-image-wrapper">
          <img src="/src/assets/images/5.webp" alt="About Us" className="about-hero-img" />
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
