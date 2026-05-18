import { Link } from 'react-router-dom'

function InsightsSection() {
  const recentUpdates = [
    {
      id: 'update-1',
      tag: 'Program Update',
      title: 'New Digital Skills Bootcamp Launching in June',
      date: 'May 15, 2026',
      color: '#4A90D9',
    },
    {
      id: 'update-2',
      tag: 'Event',
      title: 'Annual Youth Summit 2026 Registration Open',
      date: 'May 10, 2026',
      color: '#E8734A',
    },
    {
      id: 'update-3',
      tag: 'Achievement',
      title: 'ADORE Reaches 10,000 Volunteer Milestone',
      date: 'May 5, 2026',
      color: '#5BAF6A',
    },
  ]

  return (
    <section className="insights" id="insights-section">
      <div className="insights-container">
        <div className="insights-left">
          <h2 className="insights-title">Insights & Stories</h2>
          <div className="insights-featured">
            <div className="insights-featured-image">
              <svg width="100%" height="100%" viewBox="0 0 500 300" fill="none" preserveAspectRatio="xMidYMid slice">
                <rect width="500" height="300" fill="#2a3a4a"/>
                <rect x="30" y="30" width="440" height="240" rx="10" fill="#3a4a5a" opacity="0.5"/>
                <circle cx="250" cy="130" r="50" fill="#4a6a8a" opacity="0.4"/>
                <text x="250" y="135" textAnchor="middle" fill="white" fontSize="16" fontFamily="Inter" opacity="0.7">Featured Story</text>
                <rect x="60" y="200" width="380" height="40" rx="6" fill="#4a5a6a" opacity="0.3"/>
              </svg>
            </div>
            <div className="insights-featured-content">
              <span className="insights-featured-tag">Featured</span>
              <h3 className="insights-featured-title">
                How Youth-Led Projects are Redefining Urban Sustainability
              </h3>
              <Link to="/resources" className="insights-featured-link">
                Read Full Story
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="insights-right">
          <h3 className="insights-right-title">Recent Updates</h3>
          <div className="insights-updates">
            {recentUpdates.map((update) => (
              <div className="insights-update-card" key={update.id} id={update.id}>
                <span className="insights-update-tag" style={{ backgroundColor: `${update.color}15`, color: update.color }}>
                  {update.tag}
                </span>
                <h4 className="insights-update-title">{update.title}</h4>
                <span className="insights-update-date">{update.date}</span>
              </div>
            ))}
          </div>
          <Link to="/resources" className="btn btn-primary btn-sm insights-view-all" id="insights-view-all-btn">
            View All Updates
          </Link>
        </div>
      </div>
    </section>
  )
}

export default InsightsSection
