import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import classNames from 'classnames';

const Card = ({
  picture,
  id,
  name,
  displayCard,
  toggleFocus,
}) => {
  const handleClick = () => {
    displayCard(id);
    toggleFocus();
    const resultsHeight = document.querySelector('.roles__results').offsetHeight;
    const roleElement = document.querySelector('.roles__results-info');
    roleElement.style.height = `${resultsHeight}px`;
  };

  const firstWord = name.split(' ')[0];
  let isTooLong = false;
  if (firstWord.length >= 13) {
    isTooLong = true;
  }

  const divStyle = {
    backgroundImage: `url(${picture})`,
  }
  return (
    <div className="card" style={divStyle} onClick={handleClick}>
      {/* <img
        className="card__image"
        src={image}
        alt=""
      /> */}
      <div className="card__name">
        <p className={classNames('card__name-text', { 'card__name-text--too-long': isTooLong })}>{name}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,

  // STRINGS
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

  // FUNCTIONS
  displayCard: PropTypes.func.isRequired,
  toggleFocus: PropTypes.func.isRequired,
};

export default Card;
