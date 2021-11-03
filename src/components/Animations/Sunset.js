import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './style.scss';

const Sunset = ({ setGame, setNight, isGameSet }) => {
  const history = useHistory();
  useEffect(() => {
    let countdown = 5000;
    let url = '/partie-en-cours';
    if (isGameSet) {
      countdown = 3000;
      url += '/nuit-sur-thiercelieux';
    }
    setTimeout(() => {
      history.push(url);
    }, countdown);

    if (isGameSet) {
      countdown = 3000;
      setNight();
    }
    else {
      setGame();
    }
  }, []);
  return (
    <div className="sunset">Sunset</div>
  );
};

Sunset.propTypes = {
  setGame: PropTypes.func.isRequired,
  setNight: PropTypes.func.isRequired,
  isGameSet: PropTypes.bool.isRequired,
};

export default Sunset;
