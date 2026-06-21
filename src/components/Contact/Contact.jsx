import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSent(true);
      setEmail('');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__glow" aria-hidden="true" />

      <div className="contact__inner">
        {/* CTA card */}
        <div className="contact__cta">
          <div className="contact__eyebrow">Ready to go?</div>
          <h2 className="contact__heading">Your next adventure<br />starts here.</h2>
          <p className="contact__sub">
            Drop your email and we'll send you availability, bundle deals and
            seasonal offers — no spam, ever.
          </p>

          {sent ? (
            <p style={{ color: '#2BA84A', fontWeight: 700, fontSize: 15 }}>
              ✓ You're on the list — watch your inbox!
            </p>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <input
                id="contact-email"
                type="email"
                className="contact__input"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="contact__btn">
                Get early access →
              </button>
            </form>
          )}
        </div>

        {/* Footer bar */}
        <footer className="contact__footer">
          <a href="#" className="contact__footer-logo">
            <span className="contact__footer-logo-icon">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M3 20 L10 7 L14 14 L17 9 L21 20 Z" fill="#fff" />
              </svg>
            </span>
            <span className="contact__footer-logo-text">RIDGELINE</span>
          </a>

          <nav className="contact__footer-links" aria-label="Footer navigation">
            <a href="#activities">Activities</a>
            <a href="#about">About</a>
            <a href="#why">Why Us</a>
            <a href="#contact">Contact</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </nav>

          <span className="contact__footer-copy">
            © {new Date().getFullYear()} Ridgeline. All rights reserved.
          </span>
        </footer>
      </div>
    </section>
  );
}
