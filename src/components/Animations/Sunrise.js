import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './style.scss';

const Sunrise = ({ setGame }) => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push('/partie-en-cours');
    }, 5000);
    // TODO
    // setGame();
  }, []);
  return (
    <div className="sunset">Sunrise</div>
  );
};

Sunrise.propTypes = {
  setGame: PropTypes.func.isRequired,
};

export default Sunrise;
