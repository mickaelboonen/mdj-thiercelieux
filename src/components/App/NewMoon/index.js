import React from 'react';
import PropTypes from 'prop-types';
import { X } from 'react-feather';
import classNames from 'classnames';
import Field from 'src/containers/Field';

import Flipcard from 'src/components/Flipcard';
import Card from 'src/containers/App/NewMoon/Card';

import './style.scss';

// TODO : DISPLAY CARD
const NewMoon = ({
  cards,
  cardToDisplay,
  onFocus,
  cardsInputValue,
  toggleFocus,
  clearInput,
  isFiltered,
  reinitializeCardsList,
  filterByPhase,
}) => {
  const handleClickOnX = () => {
    toggleFocus();
  };
  const hancleClickToReinitialize = () => {
    clearInput();
    reinitializeCardsList();
  };
  const hancleClickToFilter = () => {
    filterByPhase();
  };
  return (
    <div className="cards">
      <div className="cards__search">
        <h2 className="cards__search-title">Cartes Nouvelle Lune</h2>
        <Field
          className="cards__search-input"
          type="text"
          name="cardsInput"
          placeholder="Searching for a specific role ? "
        />
        <div className="cards__search-buttons">
          <button
            type="button"
            onClick={hancleClickToFilter}
          >
            Trier par phase
          </button>
          {(cardsInputValue !== '' || isFiltered) && (
          <button
            type="button"
            onClick={hancleClickToReinitialize}
          >
            Réinitialiser la recherche
          </button>
          )}
        </div>
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
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,

  // roleToDisplay: PropTypes.object.isRequired,
  cardsInputValue: PropTypes.string.isRequired,

  // BOOLEENS
  // onFocus: PropTypes.bool.isRequired,
  isFiltered: PropTypes.bool.isRequired,

  // FUNCTIONS
  // toggleFocus: PropTypes.func.isRequired,
  clearInput: PropTypes.func.isRequired,
  reinitializeCardsList: PropTypes.func.isRequired,
  filterByPhase: PropTypes.func.isRequired,
};

export default NewMoon;
