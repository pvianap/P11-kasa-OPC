import React from 'react';
import './banner.scss';

export default function Banner({ img, text }) {
  return (
    <div className="banner">
      <img src={img} alt="banner" />
      <div className="banner__filter"></div>
      <p className="banner__text"> {text}</p>
    </div>
  );
}
