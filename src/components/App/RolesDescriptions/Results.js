import React from 'react';
import PropTypes from 'prop-types';
import { X } from 'react-feather';
import classNames from 'classnames';
import Role from 'src/containers/App/RolesDescriptions/Role';
import Card from 'src/containers/App/RolesDescriptions/Card';
import Flipcard from 'src/components/Flipcard';
import NewMoonFlipcard from 'src/components/Flipcard/newMoonFlipcard';

import {
  sortBy,
  filterByPhase,
  filterBySide,
  filterByPower,
} from 'src/selectors/sortingFunctions';

import './style.scss';

const Results = ({
  data,
  flipcardData,
  onFocus,
  toggleFocus,
  newMoonCardsPage,
  villageRolesPage,
  hiddenRolesPage,
  sort,
  filter,
  rolesInput,
}) => {
  const handleClickOnX = () => {
    toggleFocus();
  };

  let newArray = data;
  // VILLAGE PEOPLE
  if (filter !== '' && villageRolesPage) {
    newArray = filterByPower(filter, newArray);
  }
  // HIDDEN ROLES
  else if (filter !== '' && hiddenRolesPage) {
    newArray = filterBySide(filter, newArray);
  }
  // NEW MOON CARDS
  else if (filter !== '' && newMoonCardsPage) {
    newArray = filterByPhase(filter, newArray);
  }
  if (sort !== '') {
    newArray = sortBy(sort, newArray);
  }
  if (rolesInput !== '') {
    newArray = newArray.filter((role) => {
      if (role.name.toLowerCase().includes(rolesInput.toLowerCase())) {
        return role;
      }
    });
  }
  return (
    <div className="roles__results">
      {newMoonCardsPage && (
        <div className="roles__results-list">
          {newArray.map((card) => <Card key={card.id} {...card} />)}
        </div>
      )}
      {!newMoonCardsPage && (
        <div className="roles__results-list">
          {newArray.map((card) => <Role key={card.id} {...card} />)}
        </div>
      )}
      <div
        className={classNames('roles__results-info', { 'roles__results-info--open': onFocus })}
      >
        <X size={40} onClick={handleClickOnX} />
        <div className="roles__results-info-flipcard">
          {!newMoonCardsPage && <Flipcard role={flipcardData} />}
          {newMoonCardsPage && <NewMoonFlipcard card={flipcardData} />}
        </div>
      </div>
    </div>
  );
};

Results.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,

  flipcardData: PropTypes.object.isRequired,
  toggleFocus: PropTypes.func.isRequired,

  // STRINGS
  sort: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,

  // BOOLEENS
  onFocus: PropTypes.bool.isRequired,
  newMoonCardsPage: PropTypes.bool.isRequired,
  villageRolesPage: PropTypes.bool.isRequired,
  hiddenRolesPage: PropTypes.bool.isRequired,
};

export default Results;
