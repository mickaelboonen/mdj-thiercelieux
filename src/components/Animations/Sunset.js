import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './style.scss';

const Sunset = ({ setGame }) => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push('/partie-en-cours');
    }, 5000);
    setGame();
  }, []);
  return (
    <div className="sunset">Sunset</div>
  );
};

Sunset.propTypes = {
  setGame: PropTypes.func.isRequired,
};

export default Sunset;