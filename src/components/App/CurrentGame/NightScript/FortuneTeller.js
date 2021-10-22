import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const FortuneTeller = ({ choices, toggleValidationBox, handleNextClick }) => {
  const handleClick = (event) => {
    const changes = {
      name: 'Voyante',
    }
    toggleValidationBox();
  };
  return (
    <div className="nightscript__action-buttons">
      {/* {choices.map((button) => (
        <button
          key={button.name}
          type="button"
          className="nightscript__action-buttons-item"
          onClick={handleClick}
          value={button.name}
        >
          {button.name}
        </button>
      ))} */}
      <button className="nightscript__action-buttons-item" type="button" onClick={handleNextClick}>Next</button>
    </div>
  );
};

FortuneTeller.propTypes = {
  choices: PropTypes.array.isRequired,
  // setFortuneTellerAttributes: PropTypes.func.isRequired,
  toggleValidationBox: PropTypes.func.isRequired,
};

export default FortuneTeller;
