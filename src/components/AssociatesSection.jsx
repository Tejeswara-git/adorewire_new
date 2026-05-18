import { Link } from 'react-router-dom'

function AssociatesSection() {
  const associates = [
    { id: 'assoc-1', name: 'Delhi Centre', city: 'New Delhi' },
    { id: 'assoc-2', name: 'Mumbai Centre', city: 'Mumbai' },
    { id: 'assoc-3', name: 'Bangalore Centre', city: 'Bangalore' },
    { id: 'assoc-4', name: 'Chennai Centre', city: 'Chennai' },
    { id: 'assoc-5', name: 'Kolkata Centre', city: 'Kolkata' },
    { id: 'assoc-6', name: 'Hyderabad Centre', city: 'Hyderabad' },
  ]

  return (
    <section className="associates" id="associates-section">
      <div className="associates-container">
        <h2 className="section-title associates-title">Our Associate Centres</h2>
        <div className="associates-grid">
          {associates.map((assoc) => (
            <div className="associate-card" key={assoc.id} id={assoc.id}>
              <div className="associate-card-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="#f0f4f8"/>
                  <path d="M20 11L28 16V28H12V16L20 11Z" stroke="#4A90D9" strokeWidth="1.5" strokeLinejoin="round"/>
                  <rect x="17" y="22" width="6" height="6" stroke="#4A90D9" strokeWidth="1.5"/>
                  <rect x="16" y="16" width="3" height="3" fill="#4A90D9" opacity="0.3"/>
                  <rect x="21" y="16" width="3" height="3" fill="#4A90D9" opacity="0.3"/>
                </svg>
              </div>
              <div className="associate-card-info">
                <span className="associate-card-name">{assoc.name}</span>
                <span className="associate-card-city">{assoc.city}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="associates-action">
          <Link to="/about" className="btn btn-outline" id="associates-view-all-btn">
            View All Centres
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AssociatesSection
