import React, { useState } from 'react';
import './dropdown.scss';
import ArrowUp from '../../assets/arrow_up.svg';

export default function Dropdown({ data }) {
  const [current, setClosed] = useState('');
  const textArray = typeof data.text == 'string' ? [data.text] : data.text;
  const title = data.type;
  const styleClass = 'dropdown dropdown__' + data.type.toLowerCase();

  const close = () => {
    setClosed(current === 'isClosed' ? 'isOpen' : 'isClosed');
  };
  const isClosed = (type) => {
    const types = {
      arrow: 'dropdown__bar__img--closed',
      container: 'dropdown__container--closed',
    };

    return 'isClosed' === current ? types[type] : '';
  };

  const size = (isBig) => {
    return isBig ? ' bigger' : '';
  };
  console.log(size(data.isBig));

  return (
    <div className={`${styleClass} ${size(data.isBig)}`}>
      <div className="dropdown__bar" onClick={close}>
        <h2 className="dropdown__bar__title">{title}</h2>
        <img
          src={ArrowUp}
          alt=""
          className={'dropdown__bar__img ' + isClosed('arrow')}
        />
      </div>
      <div className={`dropdown__container ${isClosed('container')} `}>
        {textArray.map((e) => (
          <p>{e}</p>
        ))}
      </div>
    </div>
  );
}
