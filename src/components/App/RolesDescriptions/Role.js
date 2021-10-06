import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Role = ({
  picture,
  id,
  displayRole,
  toggleFocus,
}) => {
  const handleClick = () => {
    displayRole(id);
    toggleFocus();
    const resultsHeight = document.querySelector('.roles__results').offsetHeight;
    const roleElement = document.querySelector('.roles__results-info');
    roleElement.style.height = `${resultsHeight}px`;
  };

  return (
    <div className="role">
      <img
        className="role__picture"
        src={picture}
        alt=""
        onClick={handleClick}
      />
    </div>
  );
};

Role.propTypes = {
  picture: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,

  // FUNCTIONS
  displayRole: PropTypes.func.isRequired,
  toggleFocus: PropTypes.func.isRequired,
};

export default Role;
