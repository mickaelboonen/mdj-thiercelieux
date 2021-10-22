import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { setButtonsForAction } from 'src/selectors/setGameFunctions';

import Witch from 'src/containers/App/CurrentGame/NightScript/Witch';

import './style.scss';
import Thief from 'src/containers/App/CurrentGame/NightScript/Thief';
import Cupid from 'src/containers/App/CurrentGame/NightScript/Cupid';
import FortuneTeller from 'src/containers/App/CurrentGame/NightScript/FortuneTeller';
import Werewolf from 'src/containers/App/CurrentGame/NightScript/Werewolf';


const NightScript = ({
  gameOrder,
  roleToPlay,
  players,
  setNextRoleToPlay,
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

  const toggleValidationBox = () => {
    boxElement.classList.toggle('nightscript__confirmation--open');
  };

  const handleNextClick = () => {
    setNextRoleToPlay(name);
  };

  const handleYesClick = () => {
    changePlayersAttributes();
    toggleValidationBox();
    setNextRoleToPlay(name);
  }
  console.log(name, choices);
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
        {name === 'Voleur' && <Thief choices={choices} toggleValidationBox={toggleValidationBox} />}
        {name === 'Cupidon' && <Cupid choices={choices} toggleValidationBox={toggleValidationBox} />}
        {name === 'Amoureux' && <button className="nightscript__action-buttons-item" type="button" onClick={handleNextClick}>Next</button>}
        {/* {name === 'Voyante' && <FortuneTeller choices={choices} toggleValidationBox={toggleValidationBox} handleNextClick={handleNextClick} />} */}
        {name === 'Voyante' && <button className="nightscript__action-buttons-item" type="button" onClick={handleNextClick}>Next</button>}
        {name === 'Loup-Garou' && <Werewolf choices={choices} toggleValidationBox={toggleValidationBox} />}

        {name === 'Sorcière' && (<Witch toggleValidationBox={toggleValidationBox} />)}
      </div>
      <div className="nightscript__confirmation">
        <div className="nightscript__confirmation-box">
          <p>Confirmez-vous votre choix ?</p>
          <button id="yes-button" type="button" value="yes" onClick={handleYesClick}>yes</button>
          <button type="button" value="no" onClick={toggleValidationBox}>no</button>
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
