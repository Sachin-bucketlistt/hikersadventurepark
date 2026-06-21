import './WhyUs.css';

const FEATURES = [
  {
    title: 'Certified Guides',
    desc: 'Every activity is run by fully trained, DBS-checked instructors who know how to keep thrills safe.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#BFC943" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'All Ages Welcome',
    desc: 'We run junior tracks and family-rated activities so even the littlest adventurers get in on the fun.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#BFC943" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Bundle & Save',
    desc: 'Mix activities across the day with our bundle passes — the more you do, the more you save.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#BFC943" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    title: 'Top Gear Supplied',
    desc: 'Helmets, harnesses, karts — all maintained to the highest standard. Just turn up and go.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#BFC943" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    title: 'Event & Group Packages',
    desc: 'Planning a birthday, corporate day or school trip? We have tailored packages for groups of any size.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#BFC943" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    title: 'Open Year Round',
    desc: 'Rain or shine, we operate 365 days a year. Some activities are even better in the drizzle.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#BFC943" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="why">
      <div className="why__top">
        <span className="why__eyebrow">Why Ridgeline</span>
        <h2 className="why__heading">Built for people who don't do boring.</h2>
      </div>

      <div className="why__grid">
        {FEATURES.map(({ title, desc, icon }) => (
          <div key={title} className="why__item">
            <div className="why__item-icon">{icon}</div>
            <div className="why__item-title">{title}</div>
            <p className="why__item-desc">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
