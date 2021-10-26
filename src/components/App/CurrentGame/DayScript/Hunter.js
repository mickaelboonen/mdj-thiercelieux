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

  // TODO : check if this works !
  const title = hunter.deadTonight ? 'Au petit matin' : 'Suite au vote';

  /**
   * Renders the state countdown : if completed, a DOM element; if not: the time left
   * @param number hours, minutes, seconds
   * @param bool completed
   * @returns mixed (number ou dom element)
   */
  const renderer = ({
    hours,
    minutes,
    seconds,
    completed,
  }) => {
    if (completed) {
      return <span>T'as pas l'éternité devant toi ! Plus vite !</span>;
    }
    return seconds;
  };

  const history = useHistory();
  const toggleValidationBox = (event) => {
    // Toggles the validation box
    const confirmationBoxElement = document.querySelector('.dayscript__confirmation');
    confirmationBoxElement.classList.toggle('dayscript__confirmation--open');
    // Records the event target value in the yes button dataset to save the user choice
    const yesButton = document.querySelector('#yes-button');
    yesButton.dataset.name = event.target.value;
  };
  const handleYesClick = () => {
    // Gets the hunter victim previously recorded in the dataset
    const yesButton = document.querySelector('#yes-button');
    // Then kill off player
    killPlayer(yesButton.dataset.name);
    // We erase the dataset;
    delete yesButton.dataset.name;
    // Then toggle the confirmation box
    const confirmationBoxElement = document.querySelector('.dayscript__confirmation');
    confirmationBoxElement.classList.toggle('dayscript__confirmation--open');
    // And then we go back to the game
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
          <div className="dayscript__confirmation-box-buttons">
            <button id="yes-button" type="button" value="yes" onClick={handleYesClick}>yes</button>
            <button type="button" value="no" onClick={toggleValidationBox}>no</button>
          </div>
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
