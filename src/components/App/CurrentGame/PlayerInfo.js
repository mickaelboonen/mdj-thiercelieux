/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import classNames from 'classnames';

const PlayerInfo = ({
  id,
  name,
  displayPlayer,
  killByVote,
  isAlive,
}) => {
  const handleClick = (event) => {
    if (event.target.className.includes('--to-be-chopped')) {
      if (window.confirm(`Confirmez-vous l'élimination de ${name} ?`)) {
        killByVote(name);
      }
    }
    else {
      displayPlayer(id);
    }
  };
  return (
    <div
      className={classNames('player-info', { 'player-info--dead': !isAlive })}
      onClick={handleClick}
    >
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
