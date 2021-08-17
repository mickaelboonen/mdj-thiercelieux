import React from 'react';
import PropTypes from 'prop-types';

import '../style.scss';

const Player = ({
  name,
  hiddenRole,
  villageRole,
}) => {
  const handleClick = (event) => {
    const target = event.currentTarget;

    if (target.className.includes('stars')) {
      target.classList.toggle('player__roles-stars--open');
      target.previousElementSibling.classList.toggle('player__roles-hidden--open');
    }
    else {
      target.classList.toggle('player__roles-hidden--open');
      target.nextElementSibling.classList.toggle('player__roles-stars--open');
    }
  };
  return (
    <li className="player">
      <p className="player__name">
        {name}
      </p>
      <p className="player__roles">
        <span
          className="player__roles-hidden"
          onClick={handleClick}
        >
          {hiddenRole}
        </span>
        <span
          className="player__roles-stars player__roles-stars--open"
          onClick={handleClick}
        >
          **********
        </span>
        {villageRole !== '' && <span className="player__roles-village"> / {villageRole}</span>}
      </p>
    </li>
  );
};

Player.propTypes = {

  // STRINGS
  name: PropTypes.string.isRequired,
  hiddenRole: PropTypes.string.isRequired,
  villageRole: PropTypes.string.isRequired,

};

export default Player;
