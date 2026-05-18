import { useState, useRef, useEffect } from 'react';
import './Navbar.css';

const dropdownMenus = {
  Programs: [
    { label: 'Upcoming Webinars', href: '#' },
    { label: 'Past Webinars', href: '#' },
    { label: 'Upcoming Workshops', href: '#' },
    { label: 'Past Workshops', href: '#' },
  ],
  Volunteers: [
    { label: 'Active Volunteers', href: '#' },
    { label: 'Alumni Network', href: '#' },
    { label: 'Partner With Us', href: '#' },
  ],
  Releases: [
    { label: 'Blogs & News', href: '#' },
    { label: 'Newsletters', href: '#' },
    { label: 'Global Presence', href: '#' },
  ],
};

function DropdownItem({ label, items }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <li className="nav-item has-dropdown" ref={ref}>
      <button
        className="nav-link dropdown-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {label}
        <svg className={`chevron ${open ? 'open' : ''}`} viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
          <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
        </svg>
      </button>
      {open && (
        <ul className="dropdown-menu">
          {items.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="dropdown-link" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar" aria-label="Main navigation">
        {/* Logo */}
        <a href="/" className="navbar-logo" aria-label="ADORE Home">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <span className="logo-text">ADORE</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <DropdownItem label="Programs" items={dropdownMenus.Programs} />
          <DropdownItem label="Volunteers" items={dropdownMenus.Volunteers} />
          <li className="nav-item">
            <a href="#centres" className="nav-link">Centres</a>
          </li>
          <DropdownItem label="Releases" items={dropdownMenus.Releases} />
          <li className="nav-item">
            <a href="#feedback" className="nav-link">Feedback</a>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="navbar-actions">
          <a href="#signin" className="btn btn-outline">Sign In</a>
          <a href="#join" className="btn btn-primary">Join Us</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`hamburger ${mobileOpen ? 'active' : ''}`}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <a href="#about" className="mobile-link" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#programmes" className="mobile-link" onClick={() => setMobileOpen(false)}>Programs</a>
          <a href="#volunteers" className="mobile-link" onClick={() => setMobileOpen(false)}>Volunteers</a>
          <a href="#centres" className="mobile-link" onClick={() => setMobileOpen(false)}>Centres</a>
          <a href="#releases" className="mobile-link" onClick={() => setMobileOpen(false)}>Releases</a>
          <a href="#feedback" className="mobile-link" onClick={() => setMobileOpen(false)}>Feedback</a>
          <div className="mobile-actions">
            <a href="#signin" className="btn btn-outline">Sign In</a>
            <a href="#join" className="btn btn-primary">Join Us</a>
          </div>
        </div>
      )}
    </header>
  );
}
