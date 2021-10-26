import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Witch from 'src/containers/App/CurrentGame/NightScript/Witch';
import Thief from 'src/containers/App/CurrentGame/NightScript/Thief';
import Cupid from 'src/containers/App/CurrentGame/NightScript/Cupid';
import Werewolf from 'src/containers/App/CurrentGame/NightScript/Werewolf';

import { setChoicesForAction } from 'src/selectors/setGameFunctions';
import './style.scss';

const NightScript = ({
  roleToPlay,
  // players,
  setNextRoleToPlay,
  changePlayersAttributes,
  nightCount,
  percentage,
}) => {
  const { name, picture, text } = roleToPlay;

  // Setting the title according to the current night number
  let suffix = '';
  if (nightCount === 1) {
    suffix = 'ère';
  }
  else {
    suffix = 'ème';
  }

  // On first rendering on the page, setting the first role to play
  useEffect(() => {
    setNextRoleToPlay();
  }, []);

  const history = useHistory();
  useEffect(() => {
    // If the phase of the role to play is day, we have finished the night cycle
    if (roleToPlay.phase === 'day') {
      // We go to the sunrise page to execute the end of night function
      history.push('/lever-de-soleil');
    }
  }, [roleToPlay]);

  // Opens or closes the validation box
  const toggleValidationBox = () => {
    const boxElement = document.querySelector('.nightscript__confirmation');
    boxElement.classList.toggle('nightscript__confirmation--open');
  };

  // Sets the next role to play on next button click
  const handleNextClick = () => {
    setNextRoleToPlay(name);
  };

  // Handles the choice validation
  const handleYesClick = () => {
    // Modify the players array according to the different actions already saved in the reducer
    changePlayersAttributes();
    // Closes the validation box
    toggleValidationBox();
    // Sets the next role
    setNextRoleToPlay(name);
  };
  return (
    <div className="nightscript">
      <h3 className="nightscript__title">{nightCount}<span>{suffix}</span> Nuit</h3>
      <div className="progress-bar">
        <div className="progress-bar__background">
          <div className="progress-bar__background-progress" style={{ width: `${percentage}%` }} />
        </div>
        <p className="progress-bar__legend">Nuit en cours : {percentage}%</p>
      </div>
      <div className="nightscript__instructions">
        <h5 className="nightscript__instructions-name">{name}</h5>
        <img
          className="nightscript__instructions-image"
          src={picture}
          alt={`Carte ${name}`}
        />
        <p className="nightscript__instructions-description">{text}</p>
      </div>
      <div className="nightscript__action">
        {/* TODO : factoriser au possible */}
        {name === 'Voleur' && <Thief toggleValidationBox={toggleValidationBox} />}
        {name === 'Cupidon' && <Cupid toggleValidationBox={toggleValidationBox} />}
        {name === 'Amoureux' && <button className="nightscript__action-buttons-item" type="button" onClick={handleNextClick}>Next</button>}
        {name === 'Voyante' && <button className="nightscript__action-buttons-item" type="button" onClick={handleNextClick}>Next</button>}
        {name === 'Loup-Garou' && <Werewolf toggleValidationBox={toggleValidationBox} />}
        {name === 'Sorcière' && <Witch toggleValidationBox={toggleValidationBox} />}
      </div>
      <div className="nightscript__confirmation">
        <div className="nightscript__confirmation-box">
          <p>Confirmez-vous votre choix ?</p>
          <div className="nightscript__confirmation-box-buttons">
            <button id="yes-button" type="button" value="yes" onClick={handleYesClick}>yes</button>
            <button type="button" value="no" onClick={toggleValidationBox}>no</button>
          </div>
        </div>
      </div>
    </div>
  );
};

NightScript.propTypes = {
  roleToPlay: PropTypes.object.isRequired,

  // NUMBERS
  nightCount: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,

  // FUNCTIONS
  setNextRoleToPlay: PropTypes.func.isRequired,
  changePlayersAttributes: PropTypes.func.isRequired,
};

export default NightScript;
