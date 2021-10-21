import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Thief = ({ thiefRoles, setThiefAttributes, setValidationBox }) => {
  const handleClick = (event) => {
    setValidationBox();
    setThiefAttributes(event.target.value);
  };
  return (
    <div className="nightscript__action-buttons">
      {thiefRoles.map((button) => (
        <button
          key={button.name}
          type="button"
          className="nightscript__action-buttons-item"
          onClick={handleClick}
          value={button.name}
        >
          {button.name}
        </button>
      ))}
    </div>
  );
};

Thief.propTypes = {
  thiefRoles: PropTypes.array.isRequired,
  setThiefAttributes: PropTypes.func.isRequired,
  setValidationBox: PropTypes.func.isRequired,
};

export default Thief;
