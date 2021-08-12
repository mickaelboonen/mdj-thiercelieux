import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import './style.scss';
import Sort from './Sort';
import Results from './Results';

const Roles = ({
  data,
  flipcardData,
  onFocus,
  rolesInputValue,
  currentPageButtons,
  isFiltered,
  fillReducer,
  loading,
}) => {
  // UseEffect qui fera l'appel à l'API pour remplir le reducer.
  const location = useLocation().pathname.split('/');
  useEffect(() => {
    fillReducer(location[2]);
  }, [location[2]]);
  console.log(loading);
  return (
    <div className="roles">
      {!loading && (
        <Sort currentInput={rolesInputValue} isFiltered={isFiltered} data={currentPageButtons} />
      )}
      {!loading && (
        <Results data={data} flipcardData={flipcardData} onFocus={onFocus} />
      )}
    </div>
  );
};

Roles.propTypes = {
  // roles: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  // })).isRequired,

  // selects: PropTypes.array.isRequired,
  // roleToDisplay: PropTypes.object.isRequired,
  // rolesInputValue: PropTypes.string.isRequired,

  // // BOOLEENS
  // onFocus: PropTypes.bool.isRequired,
  // isFiltered: PropTypes.bool.isRequired,
};

export default Roles;
