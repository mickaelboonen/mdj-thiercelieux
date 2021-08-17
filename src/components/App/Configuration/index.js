import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Step1 from 'src/containers/App/Configuration/Step1';
import Step2 from 'src/containers/App/Configuration/Step2';

import './style.scss';

const Configuration = () => {
  const location = useLocation();
  const currentStep = location.pathname.slice(location.pathname.length - 1, location.pathname.length);


  return (
    <div className="configuration">
      <div className="configuration__title">
        <h3>Configure ta partie - Étape {currentStep}</h3>
      </div>
      {currentStep === '1' && <Step1 />}
      {currentStep === '2' && <Step2 />}
    </div>
  );
};

Configuration.propTypes = {

};

export default Configuration;
