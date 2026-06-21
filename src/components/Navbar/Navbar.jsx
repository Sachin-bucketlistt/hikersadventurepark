import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ onBook }) {
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
          <img src="/Hapadventurepark-logo.png" alt="Hikers Adventure Park Logo" className="navbar__logo-img" />
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
          <a href="#contact" className="navbar__book" onClick={onBook}>Book Now</a>
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
          <a href="#contact" className="navbar__book mobile" onClick={(e) => { setMenuOpen(false); onBook(e); }}>Book Now</a>
        </div>
      )}
    </header>
  );
}
