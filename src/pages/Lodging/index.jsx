import { React, Fragment } from 'react';
import Navbar from '../../components/Navbar';
import { useLocation } from 'react-router-dom';

export default function Lodging() {
  const data = useLocation().state;
  return (
    <Fragment>
      <Navbar />
      <h1>Logement {data.title}</h1>
    </Fragment>
  );
}
