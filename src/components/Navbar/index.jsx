import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './_navbar.scss';

export default function Navbar() {
  return (
    <Fragment>
      <nav className="navbar">
        <Link to="/" className="navbar__logo">
          <img src={Logo} alt="" />
        </Link>
        <ul className="navbar__list">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/apropos">A propos</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}
