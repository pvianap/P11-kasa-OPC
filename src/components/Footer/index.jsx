import React, { Fragment } from 'react';
import Logo from '../../assets/logo.svg';
import './_footer.scss';

export default function Navbar() {
  return (
    <Fragment>
      <div className="footer">
        <img src={Logo} alt="logo" className="footer__logo" />
        <p className="footer__msg">© 2020 Kasa. All rights reserved</p>
      </div>
    </Fragment>
  );
}
