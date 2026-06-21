import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container">
        {/* Logo */}
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M3 20 L10 7 L14 14 L17 9 L21 20 Z" fill="#fff" />
            </svg>
          </span>
          <span className="navbar__logo-text">RIDGELINE</span>
        </a>

        {/* Desktop links */}
        <div className="navbar__links">
          <a href="#activities">Activities</a>
          <a href="#about">About</a>
          <a href="#why">Why Us</a>
          <a href="#contact">Contact</a>
        </div>

        {/* CTA buttons */}
        <div className="navbar__cta">
          {/* <a href="#" className="navbar__signin">Sign in</a> */}
          <a href="#contact" className="navbar__book">Book Now</a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          <a href="#activities" onClick={() => setMenuOpen(false)}>Activities</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#why" onClick={() => setMenuOpen(false)}>Why Us</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#contact" className="navbar__book mobile" onClick={() => setMenuOpen(false)}>Book Now</a>
        </div>
      )}
    </header>
  );
}
