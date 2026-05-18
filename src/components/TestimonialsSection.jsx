function TestimonialsSection() {
  const testimonials = [
    {
      id: 'testimonial-1',
      quote: 'Volunteering with ADORE changed my perspective on community service. The mentorship I received helped me grow both personally and professionally.',
      name: 'Priya Sharma',
      role: 'Youth Volunteer',
      initials: 'PS',
      color: '#4A90D9',
    },
    {
      id: 'testimonial-2',
      quote: 'The career development program gave me the confidence and skills I needed to land my dream job. Forever grateful to the ADORE team.',
      name: 'Rahul Verma',
      role: 'Program Alumnus',
      initials: 'RV',
      color: '#E8734A',
    },
    {
      id: 'testimonial-3',
      quote: 'ADORE\'s digital literacy workshops opened up a whole new world for me. I went from knowing nothing about computers to building my own website.',
      name: 'Anita Desai',
      role: 'Workshop Participant',
      initials: 'AD',
      color: '#5BAF6A',
    },
  ]

  return (
    <section className="testimonials" id="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="section-title">Voices of Our Volunteers</h2>
          <div className="section-divider"></div>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.id} id={item.id}>
              <div className="testimonial-quote-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M10.667 14.667H5.333C5.333 9.333 8 6.667 13.333 5.333L14 7.333C11.333 8.333 10 10 9.667 12.667H13.333V20H6.667V14.667H10.667ZM24 14.667H18.667C18.667 9.333 21.333 6.667 26.667 5.333L27.333 7.333C24.667 8.333 23.333 10 23 12.667H26.667V20H20V14.667H24Z" fill="#4A90D9" opacity="0.2"/>
                </svg>
              </div>
              <p className="testimonial-text">{item.quote}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ backgroundColor: item.color }}>
                  {item.initials}
                </div>
                <div className="testimonial-author-info">
                  <span className="testimonial-name">{item.name}</span>
                  <span className="testimonial-role">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
