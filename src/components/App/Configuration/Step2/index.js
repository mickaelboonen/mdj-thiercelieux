import React from 'react';
import PropTypes from 'prop-types';

import '../style.scss';
import Player from './Player';

const Step2 = ({
  configuration,
  players,
  addNewPlayer,
  addingNewPlayer,
}) => {
  const { playersNumber } = configuration;
  const numberSavedPlayers = players.length;

  const handleClick = () => {
    addNewPlayer();
  };
  return (
    <div className="configuration__settings">
      {!addingNewPlayer && (
      <div className="configuration__settings-players">
        <div className="configuration__settings-players-header">
          <span>Liste des Joueurs</span>
          <span>{numberSavedPlayers} / {playersNumber}</span>
        </div>
        <ul className="configuration__settings-players-list">
          {players.map((player) => <Player key={player.id} {...player} />)}
        </ul>
        <div className="configuration__settings-players-add">
          <button type="button" onClick={handleClick}>+</button>
        </div>
      </div>
      )}
      {addingNewPlayer && (
        'coucou'
      )}
    </div>
  );
};

Step2.propTypes = {
  configuration: PropTypes.objectOf(PropTypes.shape({
    playersNumber: PropTypes.number.isRequired,
  })).isRequired,
  players: PropTypes.array.isRequired,
  addNewPlayer: PropTypes.func.isRequired,

};

export default Step2;
