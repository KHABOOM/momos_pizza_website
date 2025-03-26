import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Abonniere jetzt unseren Newsletter</h1>
      <p className="p__opensans">Erhalte Benachrichtigungen über neue Inhalte direkt per E-Mail!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Gib hier deine Mail-Adresse ein" />
      <button type="button" className="custom__button">Abonnieren</button>
    </div>
  </div>
);

export default Newsletter;
