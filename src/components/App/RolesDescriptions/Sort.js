import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Field from 'src/containers/Field';
import Buttons from 'src/components/Buttons';

import './style.scss';

const Sort = ({ currentInput, isFiltered, data }) => {
  const location = useLocation();
  return (
    <div className="roles__search">
      <h2 className="roles__search-title">Les Roles</h2>
      <Field
        className="roles__search-input"
        type="text"
        name="rolesInput"
        placeholder="Searching for a specific role ? "
      />
      <Buttons input={currentInput} isFiltered={isFiltered} data={data} />
    </div>
  );
};

Sort.propTypes = {

};

export default Sort;
