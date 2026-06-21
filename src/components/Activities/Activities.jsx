import { useState } from 'react';
import './Activities.css';
import { ACTIVITIES, CATEGORIES } from './activitiesData.jsx';

export default function Activities({ onBook }) {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? ACTIVITIES
    : ACTIVITIES.filter(a => a.category === active);

  return (
    <section id="activities" className="activities">
      <div className="activities__bg" aria-hidden="true" />

      <div className="activities__inner">
        {/* Header */}
        <div className="activities__header">
          <div>
            <span className="activities__eyebrow">The line-up</span>
            <h2 className="activities__heading">Pick your thrill.</h2>
          </div>
          <p className="activities__sub">
            Mix and match across the day — bundle passes save the most.
          </p>
        </div>

        {/* Category filters */}
        <div className="activities__filters" role="group" aria-label="Filter activities">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`activities__filter${active === cat ? ' activities__filter--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="activities__grid">
          {filtered.length === 0 && (
            <p className="activities__empty">No activities in this category.</p>
          )}
          {filtered.map(({ category, name, price, image }) => (
            <div key={name} className="act-card">
              <div className="act-card__bg-fade" style={{ backgroundImage: `url(${image})` }} />
              {/* Icon with corner brackets */}
              <div className="act-card__icon-wrap">
                <span className="act-card__corner-bl" />
                <span className="act-card__corner-br" />
                <img src={image} alt={name} className="act-card__img" />
              </div>
              <div className="act-card__cat">{category}</div>
              <div className="act-card__name">{name}</div>
              <div className="act-card__price">{price}</div>
              <a href="#contact" className="act-card__book-btn" onClick={onBook}>Book Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
