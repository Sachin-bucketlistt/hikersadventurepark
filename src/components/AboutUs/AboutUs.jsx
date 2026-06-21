import React from 'react';
import './AboutUs.css';
import Button from '../common/Button/Button';

const AboutUs = () => {
  return (
    <section id="AboutUs" className="AboutSection">
      <div className="AboutContainer">

        {/* Left Column: Content */}
        <div className="AboutContent">
          <p className="Eyebrow">About Us</p>
          <h2 className="SectionHeading">
            About – <span className="accent">Hikers</span> Adventure Park
          </h2>

          <div className="AboutDesc">
            <p>
              Hikers Adventure Park is located in Shivpuri near Rishikesh,
              Uttarakhand — set in the beautiful Shivalik Mountain Ranges.
            </p>
            <p>
              HAP is a perfect getaway for your adventure needs, with
              <strong> 45+ (Forty Five Plus)</strong> activities attracting
              visitors from across the Globe.
            </p>
          </div>

          <Button variant="primary">
            Read More
          </Button>
        </div>

        {/* Right Column: Collage */}
        <div className="AboutCollage">
          <img src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=600&auto=format&fit=crop&q=80" alt="Sky Cycle" className="collage-img img-1" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?w=600&auto=format&fit=crop&q=80" alt="Zipline" className="collage-img img-2" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1522163182402-834f871fd851?w=600&auto=format&fit=crop&q=80" alt="Rock Climbing" className="collage-img img-3" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&auto=format&fit=crop&q=80" alt="Giant Swing" className="collage-img img-4" loading="lazy" />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
