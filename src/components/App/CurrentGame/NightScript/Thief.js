import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Thief = ({ thiefRoles, setChanges, toggleValidationBox }) => {
  const handleClick = (event) => {
    const changes = {
      name: 'Voleur',
      values: [event.target.value],
    };
    setChanges(changes);
    toggleValidationBox();
  };
  return (
    <div className="nightscript__action-buttons">
      {thiefRoles.map((button) => (
        <input
          key={button.name}
          type="button"
          className="nightscript__action-buttons-item"
          onClick={handleClick}
          value={button.name}
        />
      ))}
    </div>
  );
};

Thief.propTypes = {
  thiefRoles: PropTypes.array.isRequired,
  setChanges: PropTypes.func.isRequired,
  toggleValidationBox: PropTypes.func.isRequired,
};

export default Thief;
