import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Fragment>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/apropos">Apropos</Link>
      </nav>
    </Fragment>
  );
}
