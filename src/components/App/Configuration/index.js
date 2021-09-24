import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Step1 from 'src/containers/App/Configuration/Step1';
import RolesStep from 'src/containers/App/Configuration/Step1/RolesStep';
import Step2 from 'src/containers/App/Configuration/Step2';
import Path from '../../Path';

import './style.scss';

const Configuration = () => {
  const location = useLocation();
  const currentStep = location.pathname.slice(22, location.pathname.length);

  return (
    <div className="configuration">
      <Path />
      <div className="configuration__title">
        <h3>Configure ta partie</h3>
        <h4>{currentStep}</h4>
      </div>
      {currentStep === 'la-partie' && <Step1 />}
      {currentStep === 'les-joueurs' && <Step2 currentStep={currentStep} />}
      {currentStep === 'les-roles' && <RolesStep />}
    </div>
  );
};

Configuration.propTypes = {

};

export default Configuration;
