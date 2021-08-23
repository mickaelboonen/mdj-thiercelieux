import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Game = ({ players }) => {
  console.log(players);
  return (
  <div className="current-game">Game</div>
);
};

Game.propTypes = {

};

export default Game;
