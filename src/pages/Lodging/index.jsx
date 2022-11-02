import { React, Fragment } from 'react';

import { useLocation } from 'react-router-dom';

export default function Lodging() {
  const data = useLocation().state;
  return (
    <Fragment>
      <h1>Logement {data.title}</h1>
    </Fragment>
  );
}
