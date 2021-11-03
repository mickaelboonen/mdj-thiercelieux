import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Werewolf = ({ setChanges, toggleValidationBox, players }) => {
  const handleClick = (event) => {
    // Setting the action the user did
    const changes = {
      name: 'Loup-Garou',
      values: [event.target.value],
    };
    // Sending the changes to the reducer to store them
    setChanges(changes);
    // Modifying the DOM to open the validation box
    toggleValidationBox();
  };
  // Setting the array of all possible victims
  const possibleVictims = [];
  // Searching for all players that are still alive and not on the Werewolf side
  // to push them into the possibleVictims array
  players.forEach((player) => {
    if (player.side !== 'Loup-Garou' && player.isAlive) {
      possibleVictims.push(player);
    }
  });
  return (
    <div>
      <div className="nightscript__action-buttons">
        {possibleVictims.map((victim) => (
          <button
            key={victim.name}
            type="button"
            className="nightscript__action-buttons-item"
            onClick={handleClick}
            value={victim.name}
          >
            {victim.name}
          </button>
        ))}
      </div>
    </div>
  );
};

Werewolf.propTypes = {
  players: PropTypes.array.isRequired,
  setChanges: PropTypes.func.isRequired,
  toggleValidationBox: PropTypes.func.isRequired,
};

export default Werewolf;
