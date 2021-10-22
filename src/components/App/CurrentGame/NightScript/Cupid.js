import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Cupid = ({ choices, toggleValidationBox, setChanges }) => {
  const handleClick = () => {
    const firstLover = document.querySelector('#first-select').value;
    const secondLover = document.querySelector('#second-select').value;

    const errorElement = document.querySelector('.nightscript__action-container__error');

    if (firstLover === secondLover) {
      errorElement.textContent = 'Vous ne pouvez pas sélectionner deux fois le même joueur.';
    }
    else if (firstLover === '' || secondLover === '') {
      errorElement.textContent = 'Vous devez sélectionner deux joueurs.';
    }
    else {
      errorElement.textContent = '';
      const changes = {
        name: 'Cupidon',
        values: [firstLover, secondLover],
      };
      setChanges(changes);
      toggleValidationBox();
    }
  };
  return (
    <div className="nightscript__action-container">
      <div className="nightscript__action-container__selects">
        <select name="" id="first-select">
          <option value="">Sélectionner un nom</option>
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
  setChanges: PropTypes.func.isRequired,
  toggleValidationBox: PropTypes.func.isRequired,
};

export default Cupid;
