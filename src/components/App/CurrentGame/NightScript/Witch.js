import React from 'react';
import PropTypes from 'prop-types';

import lifePotionImg from 'src/assets/pictures/roles/potion-vie.png';
import deathPotionImg from 'src/assets/pictures/roles/potion-mort.png';

import './style.scss';

const Witch = ({ players, setChanges, toggleValidationBox }) => {
  // Finding the witch to get their potions attributes
  const { roleAttributes: { curePotion, deathPotion } } = players.find((player) => player.hiddenRole === 'Sorcière');
  // Finding who is the current werewolves' victim
  const deadPlayer = players.find((player) => !player.isAlive && player.deadTonight);
  // Findin all other players
  const playersToKill = players.filter((player) => player.isAlive && player.hiddenRole !== 'Sorcière');
  // Setting the title according to how many possible the witch has left
  let title = '';
  if (curePotion && deathPotion) {
    title = 'Potions à utiliser';
  }
  else if (curePotion || deathPotion) {
    title = 'Potion à utliser';
  }
  else {
    title = 'Plus de potion !';
  }

  // On click on one of the potions images
  const handleTogglePotion = (event) => {
    // Getting where the click occured (on death or life potion)
    const potion = event.target.dataset.id === 'life' ? 'life' : 'death';
    // Getting the according DOM elements to modify them
    const element = document.querySelector(`.witch__message-${potion}`);
    const container = document.querySelector('.witch__message');
    // Toggling classes on DOM elements so the user can access the action according to its click
    element.classList.toggle(`witch__message-${potion}--open`);
    container.classList.toggle('witch__message--open');
  };

  // Listening to the click on the options from the life potion
  const handleSaveClick = (event) => {
    // DOM Element for the saving action recap
    const saveRecapElement = document.querySelector('#save-recap');
    // DOM element to validate actions and go to next role
    const endWitchTurnButton = document.querySelector('#end-witch-turn');
    // Recording the wolves victim in the DOM
    endWitchTurnButton.dataset.wolf = deadPlayer.name;
    // If user wants to save the victim
    if (event.target.value === 'yes') {
      // We erase the victim's name from the DOM
      endWitchTurnButton.dataset.wolf = 'Personne';
      // And recap the action
      saveRecapElement.innerHTML = `Jouer à sauver : <span>${deadPlayer.name}</span>`;
    }
    else {
      // We just recap the action
      saveRecapElement.innerHTML = 'Jouer à sauver : <span>Personne</span>';
    }
    // And then we toggle the life potion box
    handleTogglePotion(event);
  };

  // Listening to the click on the options from the death potion
  const handleKillClick = (event) => {
    // DOM element for the killing action recap
    const killRecapElement = document.querySelector('#kill-recap');
    // DOM element to validate actions and go to next role
    const endWitchTurnButton = document.querySelector('#end-witch-turn');
    const target = event.target.value;
    // Recording the witch's victim in the DOM
    endWitchTurnButton.dataset.kill = target;
    // And in the recap
    killRecapElement.innerHTML = `Jouer à éliminer : <span>${target}</span>`;
    // And then we toggle the death potion box
    handleTogglePotion(event);
  };
  console.log(deadPlayer);
  // Listening to the Next Step click
  const handleValidateClick = () => {
    // DOM element to end turn
    const endWitchTurnButton = document.querySelector('#end-witch-turn');
    // Setting the changes applied by the witch
    const changes = {
      name: 'Sorcière',
      values: {
        // With the data previously recorded in the DOM's datasets
        wolfVictim: endWitchTurnButton.dataset.wolf,
        witchVictim: endWitchTurnButton.dataset.kill,
      },
    };
    // Sending the changes to the reducer to store them
    setChanges(changes);
    // Modifying the DOM to open the validation box
    toggleValidationBox();
  };
  return (
    <div className="witch">
      <h5>{title}</h5>
      <div className="witch__container">
        {curePotion && (
          <div className="witch__container-potion">
            <img className="witch__container-potion-image" src={lifePotionImg} alt="" data-id="life" onClick={handleTogglePotion} />
            <p className="witch__container-potion-name">Potion de Vie</p>
          </div>
        )}
        {deathPotion && (
          <div className="witch__container-potion">
            <img className="witch__container-potion-image" src={deathPotionImg} alt="" data-id="death" onClick={handleTogglePotion} />
            <p className="witch__container-potion-name">Potion de Mort</p>
          </div>
        )}
      </div>
      <div className="witch__message">
        <div className="witch__message-life">
          <p>Utiliser la potion de vie pour sauver <span>{deadPlayer.name}</span> ?</p>
          <div className="witch__message-life-buttons">
            <button
              className="nightscript__action-buttons-item"
              type="button"
              value="yes"
              data-id="life"
              onClick={handleSaveClick}
            >
              Oui
            </button>
            <button
              className="nightscript__action-buttons-item"
              type="button"
              value="no"
              data-id="life"
              onClick={handleSaveClick}
            >
              Non
            </button>
          </div>
        </div>
        <div className="witch__message-death">
          <p>Qui voulez-vous empoisonner ?</p>
          <div className="witch__message-death-buttons">
            {playersToKill.map((player) => (
              <button
                key={player.id}
                type="button"
                className="nightscript__action-buttons-item"
                value={player.name}
                onClick={handleKillClick}
              >
                {player.name}
              </button>
            ))}
            <button
              key="no-one"
              type="button"
              className="nightscript__action-buttons-item nightscript__action-buttons-item--cancel"
              value="Personne"
              onClick={handleKillClick}
            >
              Personne
            </button>
          </div>
        </div>
      </div>
      <div className="witch__recap">
        <p id="save-recap" />
        <p id="kill-recap" />
        <button
          className="nightscript__action-buttons-item"
          id="end-witch-turn"
          data-wolf={deadPlayer.name}
          data-kill=""
          type="button"
          onClick={handleValidateClick}
        >
          Passer à l'étape suivante
        </button>
      </div>
    </div>
  );
};

Witch.propTypes = {
  toggleValidationBox: PropTypes.func.isRequired,
  setChanges: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired,
};

export default Witch;
