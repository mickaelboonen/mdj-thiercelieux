import React from 'react';
import PropTypes from 'prop-types';
import { X } from 'react-feather';
import classNames from 'classnames';

import Flipcard from 'src/components/Flipcard';
import Role from 'src/containers/App/Roles/Role';

import './style.scss';
import Field from 'src/containers/Field';
import Buttons from 'src/containers/Buttons';

const VillagePeople = ({
  roles,
  roleToDisplay,
  onFocus,
  villageInputValue,
  toggleFocus,
  isFiltered,
}) => {
  const handleClickOnX = () => {
    toggleFocus();
  };
  const selects = [
    {
      idName: 'power-select',
      options: [
        {
          value: 'permanent',
          name: 'Pouvoir permanent',
        },
        {
          value: 'unique',
          name: 'Pouvoir unique',
        },
      ],
    },
    {
      idName: 'sorting-select',
      options: [
        {
          value: 'alphabetic',
          name: 'Ordre alphabétique',
        },
        {
          value: 'power',
          name: 'Pouvoirs',
        },
      ],
    },
  ];
  console.log(roles);
  return (
    <div className="roles">
      <div className="roles__search">
        <h2 className="roles__search-title">Les Villageois</h2>
        <Field
          className="roles__search-input"
          type="text"
          name="villageInput"
          placeholder="Searching for a specific role ? "
        />
        <Buttons input={villageInputValue} isFiltered={isFiltered} data={selects} />
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

VillagePeople.propTypes = {
  // roles: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  // })).isRequired,

  // roleToDisplay: PropTypes.object.isRequired,
  // onFocus: PropTypes.bool.isRequired,
  // rolesInputValue: PropTypes.string.isRequired,

  // // FUNCTIONS
  // toggleFocus: PropTypes.func.isRequired,
  // clearInput: PropTypes.func.isRequired,
  // reinitializeRolesList: PropTypes.func.isRequired,
};

export default VillagePeople;
