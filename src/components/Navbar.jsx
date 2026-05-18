import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/programs', label: 'Programs' },
    { path: '/volunteers', label: 'Volunteers' },
    { path: '/events', label: 'Events' },
    { path: '/resources', label: 'Resources' },
    { path: '/feedback', label: 'Feedback' },
  ]

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" id="navbar-logo">
          <div className="navbar-logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="6" fill="#4A90D9" />
              <path d="M7 20L14 8L21 20H7Z" fill="white" opacity="0.9" />
              <circle cx="14" cy="12" r="3" fill="white" />
            </svg>
          </div>
          <span className="navbar-logo-text">ADORE</span>
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
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar-actions" id="navbar-actions">
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
