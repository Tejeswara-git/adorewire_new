import { useState } from 'react'

function CTASection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      alert(`Thank you for subscribing with ${email}!`)
      setEmail('')
    }
  }

  return (
    <section className="cta" id="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to be a part of{' '}
            <br />
            the transformation?
          </h2>
          <p className="cta-description">
            Join our newsletter to stay updated on upcoming events, programs, and ways you can make a difference.
          </p>
          <form className="cta-form" onSubmit={handleSubmit} id="cta-form">
            <input
              type="email"
              className="cta-input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              id="cta-email-input"
            />
            <button type="submit" className="btn btn-white" id="cta-submit-btn">
              Subscribe Now
            </button>
          </form>
        </div>
        <div className="cta-decoration">
          <div className="cta-dot cta-dot--1"></div>
          <div className="cta-dot cta-dot--2"></div>
          <div className="cta-dot cta-dot--3"></div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
