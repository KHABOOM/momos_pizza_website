import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#startseite">Startseite</a></li>
        <li className="p__opensans"><a href="#überuns">Über uns</a></li>
        <li className="p__opensans"><a href="#menü">Menü</a></li>
        <li className="p__opensans"><a href="#news">News</a></li>
        <li className="p__opensans"><a href="#kontakt">Kontakt</a></li>
      </ul>
      <div className="app__navbar-mail">
        <a href="#mail" className="p__opensans">Newsletter / Mail</a>
        <div />
        <a href="/" className="p__opensans">Reservierung</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#startseite" onClick={() => setToggleMenu(false)}>Startseite</a></li>
              <li><a href="#überuns" onClick={() => setToggleMenu(false)}>Über uns</a></li>
              <li><a href="#menü" onClick={() => setToggleMenu(false)}>Menü</a></li>
              <li><a href="#news" onClick={() => setToggleMenu(false)}>News</a></li>
              <li><a href="#kontakt" onClick={() => setToggleMenu(false)}>Kontakt</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
