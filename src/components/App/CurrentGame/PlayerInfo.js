import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const PlayerInfo = ({ id }) => (
  <div className="cercle">{id}</div>
);

PlayerInfo.propTypes = {

};

export default PlayerInfo;
