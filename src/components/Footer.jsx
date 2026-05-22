import { Link } from 'react-router-dom'

function Footer() {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/programs', label: 'Programs' },
    { path: '/events', label: 'Events' },
  ]

  const resourceLinks = [
    { path: '/resources', label: 'Blog & Stories' },
    { path: '/volunteers', label: 'Volunteer' },
    { path: '/feedback', label: 'Feedback' },
    { path: '/about', label: 'Contact Us' },
  ]

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" id="footer-logo">
              <div className="footer-logo-wrapper">
                <svg width="120" height="60" viewBox="0 0 120 60" fill="none" className="footer-logo-svg">
                  {/* ADORE Text with Globe */}
                  <g>
                    <text x="20" y="28" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#1a5490" letter-spacing="2">
                      ADORE
                    </text>
                    {/* Globe Icon */}
                    <circle cx="88" cy="18" r="10" fill="none" stroke="#1a5490" strokeWidth="1.5"/>
                    <circle cx="88" cy="18" r="8" fill="#4a9fd8" opacity="0.3"/>
                    <path d="M78 18Q88 12 98 18" fill="none" stroke="#1a5490" strokeWidth="1"/>
                    <path d="M78 18Q88 24 98 18" fill="none" stroke="#1a5490" strokeWidth="1"/>
                  </g>
                  {/* Tagline */}
                  <text x="20" y="50" fontFamily="Arial, sans-serif" fontSize="11" fill="#666" font-style="italic">
                    motivating youth for
                  </text>
                  <text x="20" y="60" fontFamily="Arial, sans-serif" fontSize="11" fill="#4a9fd8" font-weight="bold">
                    positive action
                  </text>
                </svg>
              </div>
            </Link>
            <p className="footer-description">
              Empowering the next generation of changemakers through education, mentorship, and community development programs across India.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" id="footer-facebook" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15 1.66699H12.5C11.395 1.66699 10.3352 2.10598 9.55372 2.88738C8.77232 3.66878 8.33333 4.72859 8.33333 5.83366V8.33366H5.83333V11.667H8.33333V18.3337H11.6667V11.667H14.1667L15 8.33366H11.6667V5.83366C11.6667 5.61265 11.7545 5.40068 11.9107 5.24441C12.067 5.08813 12.279 5.00033 12.5 5.00033H15V1.66699Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" id="footer-twitter" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18.3333 2.50033C17.5083 3.07191 16.5937 3.49739 15.625 3.75866C15.1049 3.16796 14.4083 2.75932 13.6401 2.58916C12.8719 2.41899 12.0715 2.49588 11.3492 2.80945C10.6268 3.12303 10.0196 3.65728 9.61667 4.33653C9.21373 5.01578 9.03513 5.80534 9.10417 6.59199V7.42533C7.78134 7.4587 6.47197 7.16782 5.28617 6.57687C4.10036 5.98591 3.07279 5.11208 2.29167 4.02533C2.29167 4.02533 -0.208333 10.0253 5.79167 12.942C4.34056 13.9194 2.61608 14.4097 0.858333 14.3503C6.85833 17.6837 14.1917 14.3503 14.1917 6.56699C14.191 6.33487 14.1687 6.10335 14.125 5.87533C14.9942 4.99484 15.5622 3.86036 15.75 2.63366" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" id="footer-instagram" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="1.66667" y="1.66699" width="16.6667" height="16.6667" rx="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.3333 9.47533C13.4362 10.1688 13.3178 10.8769 12.9948 11.4995C12.6718 12.122 12.1609 12.6273 11.5347 12.9434C10.9084 13.2596 10.1987 13.3703 9.50647 13.2599C8.81424 13.1494 8.17374 12.8232 7.67527 12.3248C7.17681 11.8263 6.85063 11.1858 6.74017 10.4936C6.62972 9.80136 6.74042 9.09167 7.05655 8.46541C7.37268 7.83916 7.87801 7.32822 8.50053 7.00524C9.12305 6.68226 9.83121 6.56385 10.5247 6.66699C11.2324 6.77221 11.8882 7.10068 12.3938 7.60626C12.8994 8.11183 13.2278 8.76769 13.3333 9.47533Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="14.5833" cy="5.41699" r="0.833333" fill="currentColor" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" id="footer-linkedin" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M13.3333 6.66699C14.6594 6.66699 15.9312 7.19378 16.8689 8.13147C17.8066 9.06916 18.3333 10.341 18.3333 11.667V17.5003H15V11.667C15 11.225 14.8244 10.8013 14.5118 10.4887C14.1993 10.1762 13.7754 10.0003 13.3333 10.0003C12.8913 10.0003 12.4674 10.1762 12.1548 10.4887C11.8423 10.8013 11.6667 11.225 11.6667 11.667V17.5003H8.33333V11.667C8.33333 10.341 8.86012 9.06916 9.79781 8.13147C10.7355 7.19378 12.0073 6.66699 13.3333 6.66699Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="1.66667" y="7.50033" width="3.33333" height="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="3.33333" cy="3.33366" r="1.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-links-group">
            <h4 className="footer-links-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-links-group">
            <h4 className="footer-links-title">Resources</h4>
            <ul className="footer-links">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-newsletter">
            <h4 className="footer-links-title">Stay Connected</h4>
            <p className="footer-newsletter-text">
              Get the latest updates on our programs and events delivered to your inbox.
            </p>
            <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()} id="footer-newsletter-form">
              <input
                type="email"
                placeholder="Your email"
                className="footer-newsletter-input"
                id="footer-email-input"
              />
              <button type="submit" className="footer-newsletter-btn" id="footer-subscribe-btn">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 ADORE. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
