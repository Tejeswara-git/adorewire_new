import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { path: '/about', label: 'About' },
    { path: '/programs', label: 'Programs', hasDropdown: true },
    { path: '/volunteers', label: 'Volunteers', hasDropdown: true },
    { path: '/centres', label: 'Centres' },
    { path: '/releases', label: 'Releases', hasDropdown: true },
    { path: '/feedback', label: 'Feedback' },
  ]

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" id="navbar-logo">
          <div className="navbar-logo-wrapper">
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none" className="navbar-logo-svg">
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

        <ul className={`navbar-links ${menuOpen ? 'navbar-links--open' : ''}`} id="navbar-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                {link.hasDropdown && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="nav-dropdown-icon">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar-actions" id="navbar-actions">
          <Link to="/signin" className="navbar-signin" id="navbar-signin">
            Sign In
          </Link>
          <Link to="/feedback" className="btn btn-primary btn-sm" id="navbar-join-btn">
            Join Us
          </Link>
        </div>

        <button
          className={`navbar-hamburger ${menuOpen ? 'navbar-hamburger--active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          id="navbar-hamburger"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
