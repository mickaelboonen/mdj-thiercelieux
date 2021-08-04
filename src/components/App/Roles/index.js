import React from 'react';
import PropTypes from 'prop-types';
import { X } from 'react-feather';
import classNames from 'classnames';

import Flipcard from 'src/components/Flipcard';
import Role from 'src/containers/App/Roles/Role';

import './style.scss';

const Roles = ({
  roles,
  roleToDisplay,
  onFocus,
  toggleFocus,
}) => {
  const handleClickOnX = () => {
    toggleFocus();
  };
  const handleBlur = () => {
    toggleFocus();
  };
  return (
    <div className="roles">
      <h2 className="roles__title">Les Roles</h2>
      <input className="roles__input" type="text" />
      <div className="roles__results">
        {roles.map((role) => <Role key={role.id} {...role} />)}
        <div className={classNames('roles__results-info', { 'roles__results-info--open': onFocus })} onBlur={handleBlur}>
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
  toggleFocus: PropTypes.func.isRequired,
};

export default Roles;
