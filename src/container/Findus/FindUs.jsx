import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="kontakt">
    <div className="app__wrapper_info">
      <SubHeading title="Kontakt" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Besuche Uns!</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Müllerstr. 123, 13347, Berlin</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Öffnungszeiten</p>
        <p className="p__opensans">Mo - Fr: 10 - 21 Uhr </p>
        <p className="p__opensans">Sa - So: 10 - 23 Uhr</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Tisch reservieren</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
