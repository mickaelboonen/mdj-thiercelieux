import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { useHistory } from 'react-router-dom';

const Sunset = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push('/partie-en-cours');
    }, 5000);
  }, []);
  return (
    <div className="sunset">Sunset</div>
  );
};

Sunset.propTypes = {

};

export default Sunset;
