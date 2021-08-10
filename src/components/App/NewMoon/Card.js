import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Card = ({
  image,
  phase,
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
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,

  // FUNCTIONS
  // displayRole: PropTypes.func.isRequired,
  // toggleFocus: PropTypes.func.isRequired,
};

export default Card;
