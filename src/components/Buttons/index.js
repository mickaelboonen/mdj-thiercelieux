import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Buttons = ({
  inputValue,
  isFiltered,
  clearInput,
  reinitializeData,
  data,
  filterBy,
}) => {
  const handleChangeToFilter = (event) => {
    filterBy(event.currentTarget.value, event.currentTarget.id);
  };
  const hancleClickToReinitialize = () => {
    clearInput();
    reinitializeData();
  };
  return (
    <div className="buttons">
      <div className="buttons__erase-button">
        {(inputValue !== '' || isFiltered) && (
        <button
          type="button"
          className="buttons__erase-button-item"
          onClick={hancleClickToReinitialize}
        >
          Réinitialiser la recherche
        </button>
        )}
      </div>
      <div className="buttons__selects">
        {data.map((select) => (
          <select id={select.idName} key={select.idName} onChange={handleChangeToFilter}>
            <option value="">{select.idName === 'sorting-select' ? 'Trier par ...' : 'Filtrer par ...'}</option>
            {select.options.map((option) => (
              <option key={option.name} value={option.value}>{option.name}</option>
            ))}
          </select>
        ))}
      </div>
    </div>
  );
};

Buttons.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    idName: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
  inputValue: PropTypes.string.isRequired,
  isFiltered: PropTypes.bool.isRequired,

  // FUNCTIONS
  clearInput: PropTypes.func.isRequired,
  filterBy: PropTypes.func.isRequired,
  reinitializeData: PropTypes.func.isRequired,
};

export default Buttons;
