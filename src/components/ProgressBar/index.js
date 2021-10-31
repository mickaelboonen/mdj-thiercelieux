import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const ProgressBar = ({ percent, legend }) => (
  <div className="progress-bar">
    <div className="progress-bar__background">
      <div className="progress-bar__background-progress" style={{ width: `${percent}%` }} />
    </div>
    <p className="progress-bar__legend">{legend} : {percent}%</p>
  </div>
);

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
  legend: PropTypes.string.isRequired,
};

export default ProgressBar;
