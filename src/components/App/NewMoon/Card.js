import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

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

  return (
    <div className="card">
      <img
        className="card__image"
        src={image}
        alt=""
        onClick={handleClick}
      />
      <p className="card__name">{name}</p>
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
