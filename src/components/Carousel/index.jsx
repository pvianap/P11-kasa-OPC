import React, { useState } from 'react';
import arrowLeft from '../../assets/arrow_left.svg';
import arrowRight from '../../assets/arrow_right.svg';
import './carousel.scss';

export default function Carousel({ data }) {
  const [current, setCurrent] = useState(0);
  const slides = data;
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="carousel">
      <div className="carousel__counter">{`${current + 1}/${length}`}</div>
      <img
        src={arrowLeft}
        className="carousel__arrowLeft"
        alt="flèche gauche"
        onClick={prevSlide}
      />
      <img
        src={arrowRight}
        className="carousel__arrowRight"
        alt="flèche droite"
        onClick={nextSlide}
      />
      {slides.map((slide, index) => {
        return (
          <div
            className={
              index === current ? 'carousel__slide--active' : 'carousel__slide'
            }
            key={index}
          >
            {index === current && (
              <img
                src={slide}
                className="carousel__image"
                alt="slide"
                key={slide.index}
              />
            )}
          </div>
        );
      })}
    </section>
  );
}
