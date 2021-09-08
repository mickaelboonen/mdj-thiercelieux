import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import PlayerInfo from './PlayerInfo';
import './style.scss';

const Game = ({ players }) => {
  console.log(players);

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

  return (
    <div className="current-game">
      <div className="current-game__buttons">
        <button type="button">La nuit tombe...</button>
        <p>Nom de la carte Nouvelle Lune en cours de jeu</p>
      </div>
        <div className="current-game__players">
          {/* {players.map((player) => <PlayerInfo key={player.id} {...player} />)} */}
          <PlayerInfo id={1} />
          <PlayerInfo id={2} />
          <PlayerInfo id={3} />
          <PlayerInfo id={4} />
          <PlayerInfo id={5} />
          <PlayerInfo id={6} />
          <PlayerInfo id={7} />
          <PlayerInfo id={8} />
          <PlayerInfo id={9} />
          <PlayerInfo id={10} />
          <PlayerInfo id={11} />
          <PlayerInfo id={12} />
          <PlayerInfo id={12} />
          <PlayerInfo id={12} />
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
};

export default Game;
