import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="mail">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Kontakt</h1>
        <p className="p__opensans">Müllerstr. 123, 13347, Berlin</p>
        <p className="p__opensans">+49 12312312312</p>
        <p className="p__opensans">+49 12312312312</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;Eine Pizza die deine Sinne betäubt.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Öffnungszeiten</h1>
        <p className="p__opensans">Montag-Freitag:</p>
        <p className="p__opensans">10 - 21 Uhr</p>
        <p className="p__opensans">Samstag-Sonntag:</p>
        <p className="p__opensans">10 - 23 Uhr</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans"> &#169; Copyright 2025 MOMO&apos;s Pizza | All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
