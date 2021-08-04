import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Role = ({
  image,
  id,
  displayRole,
  toggleFocus,
}) => {
  const handleClick = () => {
    displayRole(id);
    toggleFocus();
  };

  return (
    <div className="role">
      <img
        className="role__image"
        src={image}
        alt=""
        onClick={handleClick}
      />
    </div>
  );
};

Role.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  displayRole: PropTypes.func.isRequired,
  toggleFocus: PropTypes.func.isRequired,
};

export default Role;
