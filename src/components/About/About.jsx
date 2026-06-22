import './About.css';

const STATS = [
  { num: '40',    suffix: '',  label: 'Acres of terrain' },
  { num: '45',    suffix: '+', label: 'Activities on site' },
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
            Nestled in the beautiful Shivalik Mountain Ranges of Shivpuri, near Rishikesh, Uttarakhand, 
            Hikers Adventure Park is the ultimate destination for thrill-seekers and nature lovers alike. 
            With over 45 high-adrenaline activities, we welcome visitors from all corners of the globe 
            to challenge their limits, conquer their fears, and experience absolute excitement.
          </p>
          <p>
            Your safety is our top priority. Every activity is fully supervised by our highly trained 
            professionals using top-tier safety gear. Surrounded by the peaceful tranquility and gushing 
            sounds of nature, this is the perfect getaway to create incredible, once-in-a-lifetime memories.
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
