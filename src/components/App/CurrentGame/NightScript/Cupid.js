import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Cupid = ({ players, toggleValidationBox, setChanges }) => {
  const handleClick = () => {
    // Getting the DOM elements we need
    const firstLover = document.querySelector('#first-select').value;
    const secondLover = document.querySelector('#second-select').value;
    const errorElement = document.querySelector('.nightscript__action-container__error');

    // Checking if the user selected twice the same name
    if (firstLover === secondLover) {
      errorElement.textContent = 'Vous ne pouvez pas sélectionner deux fois le même joueur.';
    }
    // Checking if the user selected two players
    else if (firstLover === '' || secondLover === '') {
      errorElement.textContent = 'Vous devez sélectionner deux joueurs.';
    }
    // If there are no errors
    else {
      // We erase the error message
      errorElement.textContent = '';
      // And then, we define the changes the user made
      const changes = {
        name: 'Cupidon',
        values: [firstLover, secondLover],
      };
      // Then we store those changes in the reducer
      setChanges(changes);
      // Modifying the DOM to open the validation box
      toggleValidationBox();
    }
  };

  // Preparing the array for the selects elements
  const livingPlayers = [];
  // Filling the array with only players that are still alive
  players.forEach((player) => {
    if (player.isAlive) {
      livingPlayers.push(player);
    }
  });
  return (
    <div className="nightscript__action-container">
      <div className="nightscript__action-container__selects">
        <select name="" id="first-select">
          <option value="">Sélectionner un nom</option>
          {livingPlayers.map((player) => (
            <option
              key={player.name}
              value={player.name}
            >
              {player.name}
            </option>
          ))}
        </select>
        <select className="nightscript__action" name="" id="second-select">
          <option value="">Sélectionner un nom</option>
          {livingPlayers.map((player) => (
            <option
              key={player.name}
              value={player.name}
            >
              {player.name}
            </option>
          ))}
        </select>
      </div>
      <div className="nightscript__action-container__error" />
      <div className="nightscript__action-container__button">
        <button className="nightscript__action-buttons-item" id="selects-button" type="button" onClick={handleClick}>Valider</button>
      </div>
    </div>
  );
};

Cupid.propTypes = {
  players: PropTypes.array.isRequired,
  setChanges: PropTypes.func.isRequired,
  toggleValidationBox: PropTypes.func.isRequired,
};

export default Cupid;
