import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Cupid = ({ choices, setCupidAttributes, setValidationBox }) => {
  const handleClick = () => {
    const firstSelectValue = document.querySelector('#first-select').value;
    const secondSelectValue = document.querySelector('#second-select').value;

    const errorElement = document.querySelector('.nightscript__action-container__error');

    if (firstSelectValue === secondSelectValue) {
      errorElement.textContent = 'Vous ne pouvez pas sélectionner deux fois le même joueur.';
    }
    else if (firstSelectValue === '' || secondSelectValue === '') {
      errorElement.textContent = 'Vous devez sélectionner deux joueurs.';
    }
    else {
      errorElement.textContent = '';
      setCupidAttributes(firstSelectValue, secondSelectValue);
      setValidationBox();
    }
  };
  return (
    <div className="nightscript__action-container">
      <div className="nightscript__action-container__selects">
        <select name="" id="first-select">
          <option value=''>Sélectionner un nom</option>
          {choices.map((choice) => (
            <option
              key={choice.name}
              value={choice.name}
            >
              {choice.name}
            </option>
          ))}
        </select>
        <select className="nightscript__action" name="" id="second-select">
          <option value=''>Sélectionner un nom</option>
          {choices.map((choice) => (
            <option
              key={choice.name}
              value={choice.name}
            >
              {choice.name}
            </option>
          ))}
        </select>
      </div>
      <div className="nightscript__action-container__error" />
      <div className="nightscript__action-container__button">
        <button className="nightscript__action-buttons-item" id="selects-button" type="button" onClick={handleClick}>Valider</button>
      </div>
    </div>
  );
};

Cupid.propTypes = {
  choices: PropTypes.array.isRequired,
  setCupidAttributes: PropTypes.func.isRequired,
  setValidationBox: PropTypes.func.isRequired,
};

export default Cupid;
