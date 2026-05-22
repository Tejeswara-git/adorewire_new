import { Link } from 'react-router-dom'
import programImage9 from '../assets/Images/9.jpg'
import programImage10 from '../assets/Images/3.jpg'
import programImage11 from '../assets/Images/11.jpg'

function ProgramsSection() {
  const programs = [
    {
      id: 'program-career',
      title: 'Career Help Centre',
      description: 'Guiding youth with career counseling, resume building, and interview preparation to help them succeed professionally.',
      image: programImage9,
    },
    {
      id: 'program-community',
      title: 'Community Development',
      description: 'Engaging communities in sustainable development through collaborative projects and grassroots initiatives.',
      image: programImage10,
    },
    {
      id: 'program-digital',
      title: 'Digital Literacy Workshops',
      description: 'Empowering individuals with essential digital skills, from basic computer usage to advanced online tools.',
      image: programImage11,
    },
  ]

  return (
    <section className="programs" id="programs-section">
      <div className="programs-container">
        <div className="programs-header">
          <h2 className="section-title">Skill Up for Success</h2>
          <p className="section-subtitle">
            Our programs are designed to equip youth with the skills, knowledge, and confidence to lead change.
          </p>
        </div>
        <div className="programs-grid">
          {programs.map((program) => (
            <div className="program-card" key={program.id} id={program.id}>
              <div className="program-card-image">
                <img src={program.image} alt={program.title} />
              </div>
              <div className="program-card-content">
                <h3 className="program-card-title">{program.title}</h3>
                <p className="program-card-description">{program.description}</p>
                <Link to="/programs" className="program-card-link">
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection
