import { React, Fragment } from 'react';
import Carousel from '../../components/Carousel';
import { useLocation } from 'react-router-dom';
import './lodging.scss';
export default function Lodging() {
  const data = useLocation().state;
  return (
    <Fragment>
      <Carousel data={data.pictures} />
      <h1>{data.title}</h1>
      <p>{data.location}</p>
    </Fragment>
  );
}
