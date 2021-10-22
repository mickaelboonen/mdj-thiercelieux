import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './style.scss';

const Sunrise = ({ setDay }) => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push('/partie-en-cours');
    }, 5000);
    setDay();
  }, []);
  return (
    <div className="sunrise">Sunrise</div>
  );
};

Sunrise.propTypes = {
  setDay: PropTypes.func.isRequired,
};

export default Sunrise;
