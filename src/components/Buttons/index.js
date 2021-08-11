import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Buttons = ({
  input,
  isFiltered,
  clearInput,
  reinitializeVillageRolesList,
  data,
}) => {
  const handleChangeToFilter = () => {

  };
  const hancleClickToReinitialize = () => {
    clearInput();
    reinitializeVillageRolesList();
  };

  return (
    <div className="buttons">
      <div className="buttons__erase-button">
        {(input !== '' || isFiltered) && (
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
        {data.map((select) => {
          console.log(1);
          return (
            <select id={select.idName} key={select.idName} onChange={handleChangeToFilter}>
              <option value="">{select.idName === 'sorting-select' ? 'Trier par ...' : 'Filtrer par ...'}</option>
              {select.options.map((option) => <option value={option.value}>{option.name}</option>)}
            </select>
          );
        })}
      </div>
    </div>
  );
};

Buttons.propTypes = {

};

export default Buttons;
