import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

export default function Card({ data }) {
  return (
    <Link to={{ pathname: `/logements/${data.id}` }} state={data}>
      <article className="card">
        <img src={data.cover} alt="" />
        <div className="card__gradient"></div>
        <p className="card__title">{data.title}</p>
      </article>
    </Link>
  );
}
