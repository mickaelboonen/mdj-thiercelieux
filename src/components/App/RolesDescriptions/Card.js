import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import classNames from 'classnames';

const Card = ({
  image,
  id,
  name,
  displayCard,
  toggleFocus,
}) => {
  const handleClick = () => {
    displayCard(id);
    toggleFocus();
  };

  const firstWord = name.split(' ')[0];
  let isTooLong = false;
  if (firstWord.length >= 13) {
    isTooLong = true;
  }

  return (
    <div className="card">
      <img
        className="card__image"
        src={image}
        alt=""
        onClick={handleClick}
      />
      <div className="card__name">
        <p className={classNames('card__name-text', { 'card__name-text--too-long': isTooLong })}>{name}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,

  // STRINGS
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

  // FUNCTIONS
  displayCard: PropTypes.func.isRequired,
  toggleFocus: PropTypes.func.isRequired,
};

export default Card;
