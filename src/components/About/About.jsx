import './About.css';

const STATS = [
  { num: '40',    suffix: '',  label: 'Acres of terrain' },
  { num: '20',    suffix: '+', label: 'Activities on site' },
  { num: '250k',  suffix: '+', label: 'Adventurers a year' },
  { num: '15',    suffix: '',  label: 'Years running' },
];

export default function About() {
  return (
    <section id="about" className="about">
      {/* Two-column intro */}
      <div className="about__intro">
        <div>
          <span className="about__eyebrow">About the park</span>
          <h2 className="about__heading">
            Forty acres of climbs,<br />drops and full-throttle fun.
          </h2>
        </div>
        <div className="about__body">
          <p>
            Ridgeline sits in the hills with everything an outdoor day needs under one
            ticket. From first-time climbers to weekend racers, our courses are safe,
            social and genuinely exciting.
          </p>
          <p>
            Every activity is run by certified guides with gear, safety briefings and
            a junior track so the youngest adventurers get their own thrills too.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="about__stats">
        {STATS.map(({ num, suffix, label }) => (
          <div key={label} className="about__stat">
            <div className="about__stat-num">
              {num}{suffix && <span className="accent">{suffix}</span>}
            </div>
            <div className="about__stat-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
