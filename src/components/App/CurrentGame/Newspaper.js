import React from 'react';
import PropTypes from 'prop-types';
import { X, Moon } from 'react-feather';

import './style.scss';

const Newspaper = ({ newspaper }) => {
  console.log();
  const handleClick = () => {
    const el = document.querySelector('.newspaper');
    el.classList.toggle('newspaper--closed');
  };
  return (
    <div className="newspaper">
      <div className="newspaper__close-button">
        <X onClick={handleClick} />
      </div>
      <div className="newspaper__container">
        <div className="newspaper__container-header">
          <Moon />
          <h5 className="newspaper__container-header__title">Le Lupin</h5>
          <Moon />
          <p className="newspaper__container-header__breaking-news">BREAKING NEWS</p>
        </div>
        <ul className="newspaper__container-list">
          {newspaper.map((news) => <li className="newspaper__container-list-item" key={news}>{news}</li>)}
        </ul>
      </div>
    </div>
  );
};

Newspaper.propTypes = {
  newspaper: PropTypes.array.isRequired,
};

export default Newspaper;
