import React from 'react';
import StyleHeader from '../styles/components/Header.scss';
import Logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header className="header__primary">
      <div className="logo logo__header">
        <a href="">
          <img src={Logo} alt="Logo Searching Roomie"></img>
        </a>
      </div>
      <nav className="nav__header">
        <ul>
          <li><a href="#">Iniciar sesión</a></li>
          <li><a href="#">Crear cuenta</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;