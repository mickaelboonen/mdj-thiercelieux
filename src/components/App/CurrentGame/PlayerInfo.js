/* eslint-disable max-len */
/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const PlayerInfo = ({
  id,
  name,
  displayPlayer,
  killByVote,
  isAlive,
}) => {
  // On click, modify DOM of the current player
  const handleClick = (event) => {
    // If it has the '--to-be-chopped' in its classnames, the click launches the elimination process
    if (event.target.className.includes('--to-be-chopped')) {
      // TODO : replace confirm
      if (window.confirm(`Confirmez-vous l'élimination de ${name} ?`)) {
        // If confirmed, kills the player
        killByVote(name);
      }
    }
    else {
      // If there is no '--to-be-chopped', simply displays the hidden role at the center of the circle
      displayPlayer(id);
    }
  };
  return (
    <div className={classNames('player-info', { 'player-info--dead': !isAlive })} onClick={handleClick}>
      {name}
    </div>
  );
};

PlayerInfo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isAlive: PropTypes.bool.isRequired,

  // FUNCTIONS
  displayPlayer: PropTypes.func.isRequired,
  killByVote: PropTypes.func.isRequired,

};

export default PlayerInfo;
