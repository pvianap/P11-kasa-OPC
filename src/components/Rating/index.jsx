import React from 'react';
import './rating.scss';
import blankStar from '../../assets/star_blank.svg';
import solidStar from '../../assets/star_solid.svg';

export default function Rating({ data }) {
  const numberOfStars = data;
  const numberOfBlanks = 5 - numberOfStars;
  const star = <img src={solidStar} alt="blank" className="star" />;
  const blank = <img src={blankStar} alt="blank" className="star" />;
  return (
    <div className="rating">
      {[...Array(parseInt(numberOfStars))].map((value, index) => star)}
      {[...Array(parseInt(numberOfBlanks))].map((value, index) => blank)}
    </div>
  );
}
