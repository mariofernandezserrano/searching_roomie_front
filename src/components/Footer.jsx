import React from 'react';
import ImageFooter from '../assets/images/image_footer.png';
import Styles from '../styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <p><span>Vive</span> donde tus</p>
        <p><span>sueños</span> sucedan</p>
      </div>
      <div className="footer__image">
        <img src={ImageFooter} alt=""></img>
      </div>
    </footer>
  );
}

export default Footer;