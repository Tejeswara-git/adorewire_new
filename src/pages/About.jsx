import React from 'react';
import AboutHeroSection from '../components/AboutHeroSection';
import AboutStatsSection from '../components/AboutStatsSection';
import AboutWhatWeDoSection from '../components/AboutWhatWeDoSection';
import AboutJourneySection from '../components/AboutJourneySection';
import AboutLeadershipSection from '../components/AboutLeadershipSection';
import AboutCTASection from '../components/AboutCTASection';

const About = () => {
  return (
    <div className="about-page-wrapper">
      <AboutHeroSection />
      <AboutStatsSection />
      <AboutWhatWeDoSection />
      <AboutJourneySection />
      <AboutLeadershipSection />
      <AboutCTASection />
    </div>
  );
};

export default About;
