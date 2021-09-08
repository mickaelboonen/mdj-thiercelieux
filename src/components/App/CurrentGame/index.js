import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import PlayerInfo from 'src/containers/App/CurrentGame/PlayerInfo';
import './style.scss';

const Game = ({ players, playerToDisplay, resetPlayerToDisplay }) => {
  useEffect(() => {
    const cercles = document.querySelectorAll('.cercle');

    const positionCercle = (element, theta) => {
      console.log(element);
      element.style.bottom = `${50 + (50 * Math.cos(theta))}%`;
      element.style.left = `${50 + (50 * Math.sin(theta))}%`;
    };

    for (let i = 0; i < cercles.length; i++) {
      const angle = ((Math.PI * 2) / cercles.length) * i;
      positionCercle(cercles[i], angle);
    }

    // -------------------------------------------------

    if (cercles.length > 13) {
      for (let j = 0; j < cercles.length; j++) {
        cercles[j].style.width = '2.5rem';
        cercles[j].style.height = '2.5rem';
        cercles[j].style.transform = 'translate(-1.25rem, 1.25rem)';
      }
    }
  }, []);

  const handleClick = () => {
    resetPlayerToDisplay();
  };

  return (
    <div className="current-game">
      <div className="current-game__buttons">
        <button type="button">La nuit tombe...</button>
        <p>Nom de la carte Nouvelle Lune en cours de jeu</p>
      </div>
      <div className="current-game__players">
        {players.map((player) => <PlayerInfo key={player.id} {...player} />)}
        <input className="current-game__players-button" type="button" />
        {playerToDisplay.roleAttributes !== undefined && (
        <div
          // TODO : A la place des bordeurs, mettre des icones pour le love et la flute > easier
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
        <button type="button">L'heure du vote</button>
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
