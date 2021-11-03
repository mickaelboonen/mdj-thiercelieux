import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './style.scss';

const Celebration = ({ players, isArraySet, setsStatsArrayForRequest }) => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push('/partie-en-cours/victoire');
    }, 2000);
    // if (!isArraySet) {
    setsStatsArrayForRequest(players);
    // }
  }, []);
  return (
    <div className="Celebration">Celebration</div>
  );
};

Celebration.propTypes = {
  players: PropTypes.array.isRequired,
  // isArraySet: PropTypes.bool.isRequired,
  setsStatsArrayForRequest: PropTypes.func.isRequired,
};

export default Celebration;
