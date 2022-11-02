import { React, Fragment } from 'react';

import { useLocation } from 'react-router-dom';
import './lodging.scss';
export default function Lodging() {
  const data = useLocation().state;
  return (
    <Fragment>
      <h1>Logement {data.title}</h1>
    </Fragment>
  );
}
