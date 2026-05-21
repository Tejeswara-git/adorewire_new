import React from 'react';

const AboutWhatWeDoSection = () => {
  return (
    <section className="about-whatwedo-section">
      <div className="about-whatwedo-header">
        <h2 className="about-section-title text-center">What We Do</h2>
        <p className="about-section-subtitle text-center">
          Our programs are designed to address critical challenges and empower youth to lead the charge in building a better world.
        </p>
      </div>
      
      <div className="about-whatwedo-grid">
        <div className="whatwedo-card">
          <div className="whatwedo-icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
          </div>
          <h3 className="whatwedo-card-title">Educational Outreach</h3>
          <p className="whatwedo-card-desc">Empowering students with essential knowledge and skills through accessible programs and workshops.</p>
        </div>

        <div className="whatwedo-card">
          <div className="whatwedo-icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path></svg>
          </div>
          <h3 className="whatwedo-card-title">Health & Wellness</h3>
          <p className="whatwedo-card-desc">Promoting physical and mental well-being across communities through targeted health initiatives.</p>
        </div>

        <div className="whatwedo-card">
          <div className="whatwedo-icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
          <h3 className="whatwedo-card-title">Environmental Advocacy</h3>
          <p className="whatwedo-card-desc">Driving sustainability and environmental awareness through campaigns and community action.</p>
        </div>

        <div className="whatwedo-card">
          <div className="whatwedo-icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
          </div>
          <h3 className="whatwedo-card-title">Social Development</h3>
          <p className="whatwedo-card-desc">Fostering inclusive communities and supporting marginalized groups through focused programs.</p>
        </div>

        <div className="whatwedo-card">
          <div className="whatwedo-icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          </div>
          <h3 className="whatwedo-card-title">Ethics & Integrity</h3>
          <p className="whatwedo-card-desc">Instilling strong moral values and ethical principles in youth for responsible leadership.</p>
        </div>

        <div className="whatwedo-card">
          <div className="whatwedo-icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <h3 className="whatwedo-card-title">Mentorship</h3>
          <p className="whatwedo-card-desc">Connecting young minds with experienced professionals for guidance, growth, and career planning.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutWhatWeDoSection;
