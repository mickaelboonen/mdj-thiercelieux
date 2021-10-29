import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import PlayerInfo from 'src/containers/App/CurrentGame/PlayerInfo';
import './style.scss';
import { Link, useHistory } from 'react-router-dom';
import Newspaper from './Newspaper';

const Game = ({
  players,
  playerToDisplay,
  resetPlayerToDisplay,
  newspaper,
  isHunterDead,
  winner,
}) => {
  // On first render, displays the players in circle
  useEffect(() => {
    const cercles = document.querySelectorAll('.player-info');

    const positionCercle = (element, theta) => {
      element.style.bottom = `${50 + (50 * Math.cos(theta))}%`;
      element.style.left = `${50 + (50 * Math.sin(theta))}%`;
    };

    for (let i = 0; i < cercles.length; i += 1) {
      const angle = ((Math.PI * 2) / cercles.length) * i;
      positionCercle(cercles[i], angle);
    }

    if (cercles.length > 13) {
      for (let j = 0; j < cercles.length; j += 1) {
        cercles[j].style.width = '2.5rem';
        cercles[j].style.height = '2.5rem';
        cercles[j].style.transform = 'translate(-1.25rem, 1.25rem)';
      }
    }
  }, []);

  // If the Hunter died during the day, sends to the Hunter action page
  const history = useHistory();
  if (isHunterDead) {
    history.push('/partie-en-cours/jour/chasseur');
  }
  // If there is a winner, sends to the victory page
  if (winner !== '') {
    history.push('/partie-en-cours/victoire');
  }

  // On click, erase the current player that is displayed in the center
  const handleClick = () => {
    resetPlayerToDisplay();
  };

  // Modify DOM to show or hide dead players
  const handleCheckboxChange = (event) => {
    const allDeadPlayers = document.querySelectorAll('.player-info--dead');
    allDeadPlayers.forEach((deadPlayer) => {
      deadPlayer.classList.toggle('player-info--hidden');
    });
    // Changes the label of the input according to it being xchecked or not
    const labelElement = document.querySelector('.current-game__footer-input-label');
    if (event.target.checked) {
      labelElement.textContent = 'Afficher les morts';
    }
    else {
      labelElement.textContent = 'Cacher les morts';
    }
  };

  // Listening to click on Vote button
  const handleClickVote = () => {
    // Verifi pour savoir qui est protégé du vote

    // Taking names from all players that can be killed this turn
    const playersWhoCanBeKilled = [];
    players.forEach((player) => {
      if (player.canBeKilled) {
        playersWhoCanBeKilled.push(player.name);
      }
    });

    const allPlayers = document.querySelectorAll('.player-info');
    allPlayers.forEach((player) => {
      // If the current player's name is in the players that can be killed array
      if (playersWhoCanBeKilled.indexOf(player.innerText) !== -1) {
        // Adds the class that allows them to be killed
        player.classList.add('player-info--to-be-chopped');
      }
    });
  };
  return (
    <div className="current-game">
      <div className="current-game__buttons">
        <Link to="/coucher-de-soleil">La nuit tombe...</Link>
        {/* Current New Moon card name */}
        <p>Nom de la carte Nouvelle Lune en cours de jeu</p>
      </div>
      <div className="current-game__players">
        {players.map((player) => <PlayerInfo key={player.id} {...player} />)}
        {/* Button for the New Moon cards
        <input className="current-game__players-button" type="button" /> */}
        {playerToDisplay.roleAttributes !== undefined && (
        <div
          className={classNames('current-game__players-player', {
            'current-game__players-player--inlove': playerToDisplay.roleAttributes.inLove,
            'current-game__players-player--charmed': playerToDisplay.roleAttributes.isCharmed,
          })}
          onClick={handleClick}
        >
          <img src={playerToDisplay.picture} alt="" />
        </div>
        )}
      </div>
      <div className="current-game__footer">
        <div className="current-game__footer-input">
          <input id="toggle-the-dead" type="checkbox" onChange={handleCheckboxChange} />
          <label className="current-game__footer-input-label" htmlFor="toggle-the-dead">
            Cacher les morts
          </label>
        </div>
        {/* To be displayed if we play with the Village expansion */}
        {/* <div className="current-game__village">
          <h3 className="current-game__village-title">Les VILLAGEOIS</h3>
          <div className="current-game__village-powers">
            <img className="current-game__village-powers-item" src="" alt="" />
            <img className="current-game__village-powers-item" src="" alt="" />
            <img className="current-game__village-powers-item" src="" alt="" />
            <img className="current-game__village-powers-item" src="" alt="" />
            <img className="current-game__village-powers-item" src="" alt="" />
            <img className="current-game__village-powers-item" src="" alt="" />
            <img className="current-game__village-powers-item" src="" alt="" />
           </div>
         </div> */}
        <div className="current-game__buttons">
          <button type="button" onClick={handleClickVote}>L'heure du vote</button>
        </div>
      </div>

      <Newspaper newspaper={newspaper} />
    </div>
  );
};

Game.propTypes = {
  playerToDisplay: PropTypes.object.isRequired,
  resetPlayerToDisplay: PropTypes.func.isRequired,
  isHunterDead: PropTypes.bool.isRequired,
  winner: PropTypes.string.isRequired,

  // ARRAYS
  players: PropTypes.array.isRequired,
  newspaper: PropTypes.array.isRequired,

};

export default Game;
