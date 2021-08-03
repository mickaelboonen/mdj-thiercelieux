import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Flipcard = ({ role }) => {
  const {
    name,
    description,
    image,
    side,
  } = role;
  return (
    <div className="flip-card">
      <div className="flip-card__inner">
        <div className="flip-card__front">
          <img className="flip-card__front-image" src={image} alt="character" />
          <h3 className="flip-card__front-name">{name}</h3>
        </div>
        <div className="flip-card__back">
          <h3 className="flip-card__back-name">{name}</h3>
          <p className="flip-card__back-side">{side}</p>
          {/* <p className="flip-card__back-description">{description.match(/(?=[^]{0,387})[^]{0,388}(?:\w\b|\W)/)}..</p> */}
          <p className="flip-card__back-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

Flipcard.propTypes = {
  role: PropTypes.object.isRequired,
};

export default Flipcard;
