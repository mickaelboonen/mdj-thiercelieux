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
  fetchCards,
  loading,
}) => {
  const location = useLocation().pathname.split('/');
  const currentPage = location[2];
  useEffect(() => {
    fetchCards(currentPage);
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
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,

  currentPageButtons: PropTypes.array.isRequired,
  flipcardData: PropTypes.object.isRequired,
  rolesInputValue: PropTypes.string.isRequired,
  fetchCards: PropTypes.func.isRequired,

  // BOOLEENS
  onFocus: PropTypes.bool.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Roles;
