import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import lifePotion from 'src/assets/pictures/roles/potion-vie.png';
import deathPotion from 'src/assets/pictures/roles/potion-mort.png';

import { setButtonsForAction } from 'src/selectors/setGameFunctions';

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
  console.log('dfdsfs', choices);
  return (
    <div className="nightscript">
      <h3>Première Nuit</h3>
      {/* Barre de progression de la nuit ? */}
      <h4 className="nightscript__name">{name}</h4>
      <img
        className="nightscript__image"
        src={picture}
        alt=""
      />
      <p className="nightscript__description">{text}</p>
      <div className="nightscript__action">
        {action === 'witch' && (
          <div>
            {/* change images */}
            <div>
              <img src={lifePotion} alt="" />
              <p>Potion de Vie</p>
            </div>
            <div>
              <img src={deathPotion} alt="" />
              <p>Potion de Mort</p>
            </div>
            <div>
              Voulez vous sauver {choices[0].name} ?
            </div>
            <div><button type="button" onClick={handleNextClick}>Next</button></div>
          </div>
        )}
        {action === 'buttons' && (
          <div>
            {choices.map((button) => (
              <button
                key={button.name}
                type="button"
                onClick={handleToggleValidationBox}
                value={button.name}
              >
                {button.name}
              </button>
            ))}
          </div>
        )}
        {action === 'selects' && (
          <div>
            <select name="" id="first-select">
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
            <select name="" id="second-select">
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
            <button id="selects-button" type="button" onClick={handleToggleValidationBox}>Valider</button>
          </div>
        )}

        {action === '' && <button type="button" onClick={handleNextClick}>Next</button>}

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
