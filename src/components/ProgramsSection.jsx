import { Link } from 'react-router-dom'

function ProgramsSection() {
  const programs = [
    {
      id: 'program-career',
      title: 'Career Help Centre',
      description: 'Guiding youth with career counseling, resume building, and interview preparation to help them succeed professionally.',
      color: '#4A90D9',
    },
    {
      id: 'program-community',
      title: 'Community Development',
      description: 'Engaging communities in sustainable development through collaborative projects and grassroots initiatives.',
      color: '#E8734A',
    },
    {
      id: 'program-digital',
      title: 'Digital Literacy Workshops',
      description: 'Empowering individuals with essential digital skills, from basic computer usage to advanced online tools.',
      color: '#5BAF6A',
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
                <svg width="100%" height="100%" viewBox="0 0 360 200" fill="none" preserveAspectRatio="xMidYMid slice">
                  <rect width="360" height="200" fill={program.color} opacity="0.15"/>
                  <rect x="30" y="30" width="300" height="140" rx="8" fill={program.color} opacity="0.12"/>
                  <circle cx="180" cy="90" r="40" fill={program.color} opacity="0.2"/>
                  <text x="180" y="95" textAnchor="middle" fill={program.color} fontSize="14" fontFamily="Inter" opacity="0.8">{program.title.split(' ')[0]}</text>
                </svg>
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
