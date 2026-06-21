import './Hero.css';

// Placeholder images — swap with real photos later
const IMG_LEFT   = "https://d1kxjw4xo8k4dx.cloudfront.net/uploads/images/Paint-Ball-rishikesh-2.webp";
const IMG_CENTER = "https://d1kxjw4xo8k4dx.cloudfront.net/uploads/images/1778349918384-1g6pya6k-_J0A1568__1_.JPG";
const IMG_RIGHT  = "https://d1kxjw4xo8k4dx.cloudfront.net/uploads/images/1778349290607-kdmkxauv-2J0A0599.JPG";

export default function Hero() {
  return (
    <section className="hero">
      {/* Background decoration */}
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      {/* Main content */}
      <div className="hero__content">
        {/* Status pill */}
        <div className="hero__pill">
          <span className="hero__pill-dot" />
          Now booking — Summer 2026
        </div>

        {/* Heading */}
        <h1 className="hero__heading">
          Find your next<br />
          <span className="accent">adventure</span> up high.
        </h1>

        {/* Activity badge */}
        <div className="hero__badge">
          <span>Go-Karting</span>
          <span className="hero__badge-sep">▪</span>
          <span>Rock Climbing</span>
          <span className="hero__badge-sep">▪</span>
          <span>Sky Cycle</span>
          <span className="hero__badge-sep">▪</span>
          <span>20+ activities</span>
        </div>

        {/* Subtext */}
        <p className="hero__sub">
          One park, a whole day of thrills. Built for families, friends and teams
          who'd rather be out climbing, racing and flying than sitting still.
        </p>

        {/* CTA buttons */}
        <div className="hero__ctas">
          <a href="#contact" className="hero__btn-primary">Book your day →</a>
          <a href="#activities" className="hero__btn-secondary">View activities</a>
        </div>
      </div>

      {/* Hero image strip */}
      <div className="hero__images">
        <div className="hero__img hero__img--side">
          {IMG_LEFT
            ? <img src={IMG_LEFT} alt="Adventure activity" />
            : <div className="hero__img-placeholder">Drop a photo</div>}
        </div>
        <div className="hero__img hero__img--center">
          {IMG_CENTER
            ? <img src={IMG_CENTER} alt="Hero adventure park shot" />
            : <div className="hero__img-placeholder">Drop hero photo</div>}
        </div>
        <div className="hero__img hero__img--side">
          {IMG_RIGHT
            ? <img src={IMG_RIGHT} alt="Adventure activity" />
            : <div className="hero__img-placeholder">Drop a photo</div>}
        </div>
      </div>
    </section>
  );
}
