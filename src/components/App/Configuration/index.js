import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import './style.scss';
import Step1 from 'src/containers/App/Configuration/Step1';

const Configuration = () => {
  const location = useLocation().search;
  const currentStep = location.slice(location.length - 1, location.length);

  return (
    <div className="configuration">
      <div className="configuration__title">
        <h3>Configure ta partie - Étape {currentStep}</h3>
      </div>
      {currentStep === '1' && <Step1 />}
      {currentStep === '2' && <div>wesh</div>}
    </div>
  );
};

Configuration.propTypes = {

};

export default Configuration;
