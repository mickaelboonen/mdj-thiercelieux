import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import PlayerInfo from 'src/containers/App/CurrentGame/PlayerInfo';
import './style.scss';
import { Link } from 'react-router-dom';

const Game = ({ players, playerToDisplay, resetPlayerToDisplay }) => {
  const playersAlive = players.filter((player) => player.isAlive);
  console.log(playersAlive);

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

    // -------------------------------------------------

    if (cercles.length > 13) {
      for (let j = 0; j < cercles.length; j += 1) {
        cercles[j].style.width = '2.5rem';
        cercles[j].style.height = '2.5rem';
        cercles[j].style.transform = 'translate(-1.25rem, 1.25rem)';
      }
    }
  }, []);

  const handleClick = () => {
    resetPlayerToDisplay();
  };

  const handleClickVote = () => {
    // Verifi pour savoir qui est protégé du vote

    const playersWhoCanBeKilled = [];
    players.forEach((player) => {
      if (player.canBeKilled) {
        playersWhoCanBeKilled.push(player.name);
      }
    });

    const whoGetsTheChop = document.querySelectorAll('.player-info');

    whoGetsTheChop.forEach((player) => {
      if (playersWhoCanBeKilled.indexOf(player.innerText) !== -1) {
        player.classList.add('player-info--to-be-chopped');
      }
    });
  };
  console.log(playerToDisplay);
  return (
    <div className="current-game">
      <div className="current-game__buttons">
        <Link to="/partie-en-cours/nuit-sur-thiercelieux"><button type="button">La nuit tombe...</button></Link>
        <p>Nom de la carte Nouvelle Lune en cours de jeu</p>
      </div>
      <div className="current-game__players">
        {players.map((player) => <PlayerInfo key={player.id} {...player} />)}
        <input className="current-game__players-button" type="button" />
        {playerToDisplay.roleAttributes !== undefined && (
        <div
          // TODO : A la place des borders, mettre des icones pour le love et la flute > easier
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
      <div className="current-game__village">
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
      </div>
      <div className="current-game__buttons">
        <button type="button" onClick={handleClickVote}>L'heure du vote</button>
      </div>
    </div>
  );
};

Game.propTypes = {
  players: PropTypes.array.isRequired,
  playerToDisplay: PropTypes.object.isRequired,
  resetPlayerToDisplay: PropTypes.func.isRequired,
};

export default Game;
