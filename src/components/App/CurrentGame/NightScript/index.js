import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { setButtonsForAction } from 'src/selectors/setGameFunctions';

import Witch from 'src/containers/App/CurrentGame/NightScript/Witch';

import './style.scss';
import Thief from 'src/containers/App/CurrentGame/NightScript/Thief';
import Cupid from 'src/containers/App/CurrentGame/NightScript/Cupid';

const NightScript = ({
  gameOrder,
  roleToPlay,
  players,
  setNextRoleToPlay,
  changePlayersAttributes,
  setCupidAttributes,
  thiefRoles,
}) => {
  const {
    name,
    picture,
    text,
    action,
  } = roleToPlay;
  let choices = setButtonsForAction(name, players, thiefRoles);
  const witch = players.find((player) => player.hiddenRole === 'Sorcière');
  useEffect(() => {
    setNextRoleToPlay();
  }, []);

  useEffect(() => {
    roleToPlay = gameOrder.find((role) => role.hasBeenCalled);
    choices = setButtonsForAction(name, players, thiefRoles);
  }, [gameOrder, players]);



  const boxElement = document.querySelector('.nightscript__confirmation');

  const handleSelectToggleValidationBox = (event) => {
    const firstSelectValue = document.querySelector('#first-select').value;
    const secondSelectValue = document.querySelector('#second-select').value;

    if (name === 'Cupidon') {
      const errorElement = document.querySelector('.nightscript__action-container__error');

      if (firstSelectValue === secondSelectValue) {
        errorElement.textContent = 'Vous ne pouvez pas sélectionner deux fois le même joueur.';
      }
      else if (firstSelectValue === '' || secondSelectValue === '') {
        errorElement.textContent = 'Vous devez sélectionner deux joueurs.';
      }
      else {
        errorElement.textContent = '';
        setCupidAttributes(firstSelectValue, secondSelectValue);
        boxElement.classList.toggle('nightscript__confirmation--open');
      }
    }
    boxElement.dataset.name = event.target.value;
  };
  const handleButtonToggleValidationBox = (event) => {

    boxElement.classList.toggle('nightscript__confirmation--open');

    // boxElement.dataset.name = event.target.value;
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
  console.log(name);
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
        {name === 'Voleur' && <Thief choices={choices} setValidationBox={handleButtonToggleValidationBox} />}
        {name === 'Cupidon' && <Cupid choices={choices} setValidationBox={handleButtonToggleValidationBox} />}
        {name === 'Amoureux' && <button className="nightscript__action-buttons-item" type="button" onClick={handleNextClick}>Next</button>}

        {action === 'witch' && (<Witch witch={witch} setNextRoleToPlay={setNextRoleToPlay} />)}
        {action === 'buttons' && (
          <div className="nightscript__action-buttons">
            {choices.map((button) => (
              <button
                key={button.name}
                type="button"
                className="nightscript__action-buttons-item"
                onClick={handleButtonToggleValidationBox}
                value={button.name}
              >
                {button.name}
              </button>
            ))}
          </div>
        )}
        {action === 'selects' && (
          <div className="nightscript__action-container">
            <div className="nightscript__action-container__selects">
              <select name="" id="first-select">
                <option value=''>Sélectionner un nom</option>
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
                <option value=''>Sélectionner un nom</option>
                {choices.map((choice) => (
                  <option
                    key={choice.name}
                    value={choice.name}
                  >
                    {choice.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="nightscript__action-container__error" />
            <div className="nightscript__action-container__button">
              <button className="nightscript__action-buttons-item" id="selects-button" type="button" onClick={handleSelectToggleValidationBox}>Valider</button>
            </div>
          </div>
        )}
      </div>
      <div className="nightscript__confirmation">
        <div className="nightscript__confirmation-box">
          <p>Confirmez-vous votre choix ?</p>
          <button id="buttons-button" type="button" value="yes" onClick={handleValidationClick}>yes</button>
          <button type="button" value="no" onClick={handleButtonToggleValidationBox}>no</button>
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
  // setButtons: PropTypes.func.isRequired,
};

export default NightScript;
