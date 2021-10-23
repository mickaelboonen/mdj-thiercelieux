import React from 'react';
import PropTypes from 'prop-types';
// https://www.npmjs.com/package/react-countdown
import Countdown from 'react-countdown';
import { useHistory } from 'react-router-dom';
import './style.scss';

const Hunter = ({ players, killPlayer }) => {
  const playersToKill = [];
  let hunter = {};
  players.forEach((player) => {
    if (player.isAlive) {
      playersToKill.push(player);
    }
    if (player.hiddenRole === 'Chasseur') {
      hunter = player;
    }
  });

  const title = hunter.deadTonight ? 'Au petit matin' : 'Suite au vote';

  /**
   * 
   * @param number hours, minutes, seconds
   * @param bool completed
   * @returns 
   */
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>Bouge toi, t'es en train de crever ! !</span>;
    }
    return seconds;
  };
  const history = useHistory();
  const toggleValidationBox = (event) => {
    const confirmationBoxElement = document.querySelector('.dayscript__confirmation');
    confirmationBoxElement.classList.toggle('dayscript__confirmation--open');
    const yesButton = document.querySelector('#yes-button');
    yesButton.dataset.name = event.target.value;
  };
  const handleYesClick = () => {
    const yesButton = document.querySelector('#yes-button');
    killPlayer(yesButton.dataset.name);
    delete yesButton.dataset.name;
    const confirmationBoxElement = document.querySelector('.dayscript__confirmation');
    confirmationBoxElement.classList.toggle('dayscript__confirmation--open');
    history.push('/partie-en-cours');
  };
  return (
    <div className="dayscript">
      <h3 className="dayscript__title">{title}</h3>
      <div className="dayscript__instructions">
        <h5 className="dayscript__instructions-name">Chasseur</h5>
        <img
          className="dayscript__instructions-image"
          src={hunter.picture}
          alt=""
        />
        <p className="dayscript__instructions-description">"S'il se fait dévorer par les Loups-Garous ou éliminé malencontreusement par les villageois, le Chasseur doit répliquer dans les 30 secondes avant de rendre l'âme, en éliminant immédiatement n'importe quel autre joueur de son choix."</p>
      </div>
      <div className="dayscript__action">
        <div className="dayscript__action-timer">
          <Countdown
            date={Date.now() + 30000}
            renderer={renderer}
          />
        </div>
        <div className="dayscript__action-buttons">
          {playersToKill.map((player) => (
            <button
              key={player.name}
              type="button"
              className="dayscript__action-buttons-item"
              onClick={toggleValidationBox}
              value={player.name}
            >
              {player.name}
            </button>
          ))}
        </div>
      </div>
      <div className="dayscript__confirmation">
        <div className="dayscript__confirmation-box">
          <p>Confirmez-vous votre choix ?</p>
          <button id="yes-button" type="button" value="yes" onClick={handleYesClick}>yes</button>
          <button type="button" value="no" onClick={toggleValidationBox}>no</button>
        </div>
      </div>
    </div>
  );
};

Hunter.propTypes = {
  players: PropTypes.array.isRequired,
  killPlayer: PropTypes.func.isRequired,
};

export default Hunter;
