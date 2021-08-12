import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Results from 'src/containers/App/RolesDescriptions/Results';

import './style.scss';
import Sort from './Sort';

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
  const currentPage = location[2];
  useEffect(() => {
    fillReducer(currentPage);
  }, [currentPage]);
  return (
    <div className="roles">
      {!loading && (
        <Sort
          currentInput={rolesInputValue}
          isFiltered={isFiltered}
          data={currentPageButtons}
          pageTitle={currentPage}
        />
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
