import React from 'react';
import PropTypes from 'prop-types';
import { X } from 'react-feather';
import classNames from 'classnames';
import Field from 'src/containers/Field';

import Flipcard from 'src/components/Flipcard';
import Card from './Card';

import './style.scss';

const NewMoon = ({
  cards,
  cardToDisplay,
  onFocus,
  cardsInputValue,
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
        <h2 className="roles__search-title">Cartes Nouvelle Lune</h2>
        <Field
          className="roles__search-input"
          type="text"
          name="cardsInput"
          placeholder="Searching for a specific role ? "
        />
        {cardsInputValue !== '' && (
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
        {cards.map((card) => <Card key={card.id} {...card} />)}

        <div className={classNames('roles__results-info', { 'roles__results-info--open': onFocus })}>
          <X size={40} onClick={handleClickOnX} />
          <div className="roles__results-info-flipcard">
            <Flipcard role={cardToDisplay} />
          </div>
        </div>
      </div>
    </div>
  );
};

NewMoon.propTypes = {
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

export default NewMoon;
