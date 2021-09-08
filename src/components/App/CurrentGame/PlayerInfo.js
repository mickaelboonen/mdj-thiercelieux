import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const PlayerInfo = ({ id, name, displayPlayer }) => {
  const handleClick = () => {
    displayPlayer(id);
  };
  return (
    <div className="cercle" onClick={handleClick}>{name}</div>
  );
};

PlayerInfo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  displayPlayer: PropTypes.func.isRequired,

};

export default PlayerInfo;
