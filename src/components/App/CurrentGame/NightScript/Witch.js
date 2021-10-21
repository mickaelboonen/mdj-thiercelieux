import React from 'react';
import PropTypes from 'prop-types';

import lifePotionImg from 'src/assets/pictures/roles/potion-vie.png';
import deathPotionImg from 'src/assets/pictures/roles/potion-mort.png';

import './style.scss';

const Witch = ({ setNextRoleToPlay, players, witch, setWitchAttributes }) => {
  const { roleAttributes: { curePotion, deathPotion } } = witch;
  // const endWitchTurnButton = document.querySelector('#end-witch-turn');
  // // const saveRecapElement = document.querySelector('#save-recap');
  // const killRecapElement = document.querySelector('#kill-recap');

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

  const handleTogglePotion = (event) => {
    const potion = event.target.dataset.id === 'life' ? 'life' : 'death';
    const element = document.querySelector(`.witch__message-${potion}`);
    const container = document.querySelector('.witch__message');
    element.classList.toggle(`witch__message-${potion}--open`);
    container.classList.toggle('witch__message--open');
  };
  const deadPlayer = players.find((player) => !player.isAlive && player.attackedTonight);
  const playersToKill = players.filter((player) => player.isAlive && player.hiddenRole !== 'Sorcière');

  const handleSaveClick = (event) => {
    const saveRecapElement = document.querySelector('#save-recap');
    const endWitchTurnButton = document.querySelector('#end-witch-turn');
    if (event.target.value === 'yes') {
      endWitchTurnButton.dataset.save = deadPlayer.name;
      saveRecapElement.innerHTML = `Jouer à sauver : <span>${deadPlayer.name}</span>`;
    }
    else {
      saveRecapElement.innerHTML = 'Jouer à sauver : <span>Personne</span>';
    }
    handleTogglePotion(event);
  };

  const handleKillClick = (event) => {
    const killRecapElement = document.querySelector('#kill-recap');
    const endWitchTurnButton = document.querySelector('#end-witch-turn');
    let target = event.target.value;
    if (target === 'no-one') {
      target = 'Personne';
    }
    endWitchTurnButton.dataset.kill = target;
    killRecapElement.innerHTML = `Jouer à éliminer : <span>${target}</span>`;
    handleTogglePotion(event);
  };

  const handleNextClick = () => {
    const endWitchTurnButton = document.querySelector('#end-witch-turn');
    setWitchAttributes(endWitchTurnButton.dataset.save, endWitchTurnButton.dataset.kill);
    setNextRoleToPlay('Sorcière');
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
              value="no-one"
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
          data-save=""
          data-kill=""
          type="button"
          onClick={handleNextClick}
        >
          Passer à l'étape suivante
        </button>
      </div>
    </div>
  );
};

Witch.propTypes = {
  setNextRoleToPlay: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired,
  witch: PropTypes.object.isRequired,
};

export default Witch;
