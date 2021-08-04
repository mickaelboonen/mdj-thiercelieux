import React from 'react';
import PropTypes from 'prop-types';
import { X } from 'react-feather';
import classNames from 'classnames';

import Flipcard from 'src/components/Flipcard';
import Role from 'src/containers/App/Roles/Role';

import './style.scss';
import Field from 'src/containers/Field';

const Roles = ({
  roles,
  roleToDisplay,
  onFocus,
  rolesInputValue,
  toggleFocus,
  clearInput,
  reinitializeRolesList,
}) => {
  const handleClickOnX = () => {
    toggleFocus();
  };
  const hancleClickToReinitialize = () => {
    clearInput();
    reinitializeRolesList();
  };
  return (
    <div className="roles">
      <div className="roles__search">
        <h2 className="roles__search-title">Les Roles</h2>
        <Field
          className="roles__search-input"
          type="text"
          name="rolesInput"
          placeholder="Searching for a specific role ? "
        />
        {rolesInputValue !== '' && (
        <button
          className="roles__search-input-btn"
          type="button"
          onClick={hancleClickToReinitialize}
        >
          Réinitialiser la recherche
        </button>
        )}
      </div>
      <div className="roles__results">
        {roles.map((role) => <Role key={role.id} {...role} />)}
        <div className={classNames('roles__results-info', { 'roles__results-info--open': onFocus })}>
          <X size={40} onClick={handleClickOnX} />
          <div className="roles__results-info-flipcard">
            <Flipcard role={roleToDisplay} />
          </div>
        </div>
      </div>
    </div>
  );
};

Roles.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  roleToDisplay: PropTypes.object.isRequired,
  onFocus: PropTypes.bool.isRequired,
  rolesInputValue: PropTypes.string.isRequired,

  // FUNCTIONS
  toggleFocus: PropTypes.func.isRequired,
  clearInput: PropTypes.func.isRequired,
  reinitializeRolesList: PropTypes.func.isRequired,
};

export default Roles;
