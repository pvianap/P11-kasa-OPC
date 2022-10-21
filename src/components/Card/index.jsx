import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ data }) {
  return (
    <Link to={{ pathname: `/logements/${data.id}` }} state={data}>
      <article>
        <p>{data.title}</p>
        <img src={data.cover} alt="" />
      </article>
    </Link>
  );
}
