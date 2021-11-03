import React from 'react';
import PropTypes from 'prop-types';
import { Trash } from 'react-feather';

import '../style.scss';

const Player = ({
  name,
  hiddenRole,
  villageRole,
  showRoles,
  deletePlayer,
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

  const handleDeletePlayer = (event) => {
    const playerToDelete = event.target.closest('div').id;
    deletePlayer(playerToDelete);
  }
  return (
    <li className="player">
      <div className="player__name" id={name}>
        <p>
          {name}
        </p>
        <Trash size={20} onClick={handleDeletePlayer} />
      </div>
      {showRoles && (
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
        {(villageRole !== '' && villageRole !== undefined) && <span className="player__roles-village"> / {villageRole}</span>}
      </p>
      )}
    </li>
  );
};

Player.propTypes = {
  showRoles: PropTypes.bool.isRequired,
  deletePlayer: PropTypes.func.isRequired,

  // STRINGS
  name: PropTypes.string.isRequired,
  hiddenRole: PropTypes.string.isRequired,
  villageRole: PropTypes.string.isRequired,

};

export default Player;
