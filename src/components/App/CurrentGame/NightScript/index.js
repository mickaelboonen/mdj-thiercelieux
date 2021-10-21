import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { setButtonsForAction } from 'src/selectors/setGameFunctions';

import Witch from 'src/containers/App/CurrentGame/NightScript/Witch';

import './style.scss';

const NightScript = ({
  gameOrder,
  roleToPlay,
  players,
  setNextRoleToPlay,
  setButtons,
  changePlayersAttributes,
}) => {
  const {
    name,
    picture,
    text,
    action,
  } = roleToPlay;
  let choices = setButtonsForAction(name, players);
  const witch = players.find((player) => player.hiddenRole === 'Sorcière');
  useEffect(() => {
    setNextRoleToPlay();
  }, []);

  useEffect(() => {
    roleToPlay = gameOrder.find((role) => role.hasBeenCalled);
    choices = setButtonsForAction(name, players);
  }, [gameOrder, players]);



  const boxElement = document.querySelector('.nightscript__confirmation');

  const handleToggleValidationBox = (event) => {
    boxElement.classList.toggle('nightscript__confirmation--open');
    boxElement.dataset.name = event.target.value;
  };

  const handleValidationClick = (event) => {
    const { id } = event.target;
    boxElement.classList.toggle('nightscript__confirmation--open');

    if (id === 'selects-button') {
      const firstSelectValue= document.querySelector('#first-select').value;
      const secondSelectValue= document.querySelector('#second-select').value;
      // changePlayersAttributes(name, firstSelectValue, secondSelectValue)
      setNextRoleToPlay(name);
    }
    else {
      changePlayersAttributes(name, boxElement.dataset.name, players);
      delete boxElement.dataset.name;
      setNextRoleToPlay(name);
    }
  };

  const handleNextClick = () => {
    setNextRoleToPlay(name);
  };
  return (
    <div className="nightscript">
      <h3 className="nightscript__title">Première Nuit</h3>
      {/* Barre de progression de la nuit ? */}
      <div className="nightscript__instructions">
        <h5 className="nightscript__instructions-name">{name}</h5>
        <img
          className="nightscript__instructions-image"
          src={picture}
          alt=""
        />
        <p className="nightscript__instructions-description">{text}{text}{text}{text}{text}{text}{text}{text}{text}{text}</p>
      </div>
      <div className="nightscript__action">
        {action === 'witch' && (<Witch witch={witch} setNextRoleToPlay={setNextRoleToPlay} />)}
        {action === 'buttons' && (
          <div className="nightscript__action-buttons">
            {choices.map((button) => (
              <button
                key={button.name}
                type="button"
                className="nightscript__action-buttons-item"
                onClick={handleToggleValidationBox}
                value={button.name}
              >
                {button.name}
              </button>
            ))}
          </div>
        )}
        {action === 'selects' && (
          <div className="nightscript__action">
            <select className="nightscript__action" name="" id="first-select">
              <option>Sélectionner un nom</option>
              {choices.map((choice) => (
                <option
                  key={choice.name}
                  value={choice.name}
                >
                  {choice.name}
                </option>
              ))}
            </select>
            <select className="nightscript__action" name="" id="second-select">
              <option>Sélectionner un nom</option>
              {choices.map((choice) => (
                <option
                  key={choice.name}
                  value={choice.name}
                >
                  {choice.name}
                </option>
              ))}
            </select>
            <button className="nightscript__action" id="selects-button" type="button" onClick={handleToggleValidationBox}>Valider</button>
          </div>
        )}

        {action === '' && <button className="nightscript__action-buttons-item" type="button" onClick={handleNextClick}>Next</button>}

      </div>
      <div className="nightscript__confirmation">
        <div className="nightscript__confirmation-box">
          <p>Confirmez-vous votre choix ?</p>
          <button id="buttons-button" type="button" value="yes" onClick={handleValidationClick}>yes</button>
          <button type="button" value="no" onClick={handleToggleValidationBox}>no</button>
        </div>
      </div>
    </div>
  );
};

NightScript.propTypes = {
  roleToPlay: PropTypes.object.isRequired,

  // ARRAYS
  gameOrder: PropTypes.array.isRequired,
  players: PropTypes.array.isRequired,
  // FUNCTIONS
  setNextRoleToPlay: PropTypes.func.isRequired,
  setButtons: PropTypes.func.isRequired,
};

export default NightScript;
