import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Werewolf = ({ choices, setChanges, toggleValidationBox }) => {
  const handleClick = (event) => {
    const changes = {
      name: 'Loup-Garou',
      values: [event.target.value],
    };
    setChanges(changes);
    toggleValidationBox();
  };
  return (
    <div>
      <div className="nightscript__action-buttons">
        {choices.map((button) => (
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
    </div>
  );
};

Werewolf.propTypes = {
  choices: PropTypes.array.isRequired,
  setChanges: PropTypes.func.isRequired,
  toggleValidationBox: PropTypes.func.isRequired,
};

export default Werewolf;
