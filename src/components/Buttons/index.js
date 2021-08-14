import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Buttons = ({
  data,
  filterBy,
}) => {
  const handleChangeToFilter = (event) => {
    filterBy(event.currentTarget.value, event.currentTarget.id);
  };
  return (
    <div className="buttons">
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

  // FUNCTIONS
  filterBy: PropTypes.func.isRequired,
};

export default Buttons;
