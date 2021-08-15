import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';
import Buttons from 'src/containers/Buttons';

import './style.scss';

const Sort = ({
  currentInput,
  isFiltered,
  data,
  pageTitle,
}) => {
  let title = '';
  let inputClassName = '';
  let placeholderText = '';
  if (pageTitle === 'les-roles') {
    title = 'Les Rôles Secrets';
    inputClassName = 'rolesInput';
    placeholderText = 'Un rôle en particulier ?';
  }
  else if (pageTitle === 'les-cartes-nouvelle-lune') {
    title = 'Les Cartes Nouvelle Lune';
    inputClassName = 'cardsInput';
    placeholderText = 'Une carte en particulier ?';
  }
  else {
    title = 'Les Villageois';
    inputClassName = 'villageInput';
    placeholderText = 'Un Villageois en particulier ?';
  }

  return (
    <div className="roles__search">
      <h2 className="roles__search-title">{title}</h2>
      <Field
        className="roles__search-input"
        type="text"
        name={inputClassName}
        placeholder={placeholderText}
      />
      <Buttons input={currentInput} isFiltered={isFiltered} data={data} />
    </div>
  );
};

Sort.propTypes = {
  isFiltered: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,

  // STRINGS
  pageTitle: PropTypes.string.isRequired,
  currentInput: PropTypes.string.isRequired,
};

export default Sort;
