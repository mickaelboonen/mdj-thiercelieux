/* eslint-disable prefer-template */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { Link } from 'react-router-dom';

const Step1 = ({
  setPlayersNumber,
  setGames,
  setGameOrder,
  setNewmoonCards,
  setRolesAttribution,
  errorMessage,
}) => {
  const handleChange = (event) => {
    let currentId = '';
    const newMoonElement = document.querySelector('#newmoon');
    const thirdGenUncle = event.target.parentNode.parentNode.parentNode.nextElementSibling;

    // IFs for extensions, game order, newmoon cards and roles attribution
    if (event.target.parentNode.id === '') {
      currentId = event.target.parentNode.parentNode.parentNode.id;

      const classNamesArray = event.target.parentNode.parentNode.parentNode.nextElementSibling.className.split(' ');

      if (classNamesArray.length === 1) {
        if (event.target.id === 'classic-order' || event.target.id === 'preferences-order') {
          // if the newmoon input is checked
          if (newMoonElement.checked) {
            // then add the new className to display the newmoon cards setup
            const { className } = thirdGenUncle;
            thirdGenUncle.classList.add(className + '--open');
          }
          else {
            // else, add the new className to the roles attribution setup
            const { className } = thirdGenUncle;
            thirdGenUncle.nextElementSibling.classList.add(className + '--open');
          }
        }
        else {
          // add the new className to display the next element
          const { className } = thirdGenUncle;
          thirdGenUncle.classList.add(className + '--open');
        }
      }
      else {
        // eslint-disable-next-line no-lonely-if
        if (event.target.id === 'newmoon') {
          const newMoonCardsElement = document.querySelector('#newmoon-cards-field');
          newMoonCardsElement.classList.toggle('configuration__settings-field--open');
        }
      }
    }
    else {
      // Else for player number
      const classNamesArray = event.target.parentNode.className.split(' ');

      if (classNamesArray.length === 1) {
        currentId = event.target.parentNode.id;
        const gamesElement = document.querySelector('#expansions-field');

        const { className } = event.target.parentNode;
        gamesElement.classList.add(className + '--open');
      }
    }

    // FUNCTIONS THAT SAVE THE USER CHOICES
    if (currentId === 'player-number-field' || currentId === '') {
      setPlayersNumber(event.target.value);
    }
    else if (currentId === 'expansions-field') {
      setGames(event.target.value);
    }
    else if (currentId === 'game-order-field') {
      setGameOrder(event.target.value);
    }
    else if (currentId === 'newmoon-cards-field') {
      setNewmoonCards(event.target.value);
    }
    else if (currentId === 'roles-attribution-field') {
      setRolesAttribution(event.target.value);
    }
  };
  return (
    <div className="configuration__settings">
      <div className="configuration__settings-field" id="player-number-field">
        <h5 className="configuration__settings-field-title">Nombre de Joueurs</h5>
        <input type="number" name="player-number" id="player-number" min="8" max="15" onChange={handleChange} />
      </div>
      <div className="configuration__settings-field" id="expansions-field">
        <h5 className="configuration__settings-field-title">Extensions</h5>
        <div className="configuration__settings-field-item">
          <label htmlFor="newmoon">Nouvelle Lune
            <input type="checkbox" name="extensions" value="newmoon" id="newmoon" onChange={handleChange} />
          </label>
        </div>
        <div className="configuration__settings-field-item">
          <label htmlFor="characters">Personnages
            <input type="checkbox" name="extensions" value="characters" id="characters" onChange={handleChange} />
          </label>
        </div>
        <div className="configuration__settings-field-item">
          <label htmlFor="village">Le Village
            <input type="checkbox" name="extensions" value="village" id="village" onChange={handleChange} />
          </label>
        </div>
        <div className="configuration__settings-field-item">
          <label htmlFor="none">Aucune extension
            <input type="checkbox" name="extensions" value="none" id="none" onChange={handleChange} />
          </label>
        </div>
      </div>
      <div className="configuration__settings-field" id="game-order-field">
        <h5 className="configuration__settings-field-title">Ordre de jeu</h5>
        <div className="configuration__settings-field-item">
          <label htmlFor="classic-order">Classique
            <input type="radio" name="game-order" id="classic-order" value="classic" onChange={handleChange} />
          </label>
        </div>
        <div className="configuration__settings-field-item">
          <label htmlFor="preferences-order">Mes préférences
            <input type="radio" name="game-order" id="preferences-order" value="preferences" onChange={handleChange} />
          </label>
        </div>
      </div>
      <div className="configuration__settings-field" id="newmoon-cards-field">
        <h5 className="configuration__settings-field-title">Cartes Nouvelle Lune</h5>
        <div className="configuration__settings-field-item">
          <label htmlFor="classic-newmoon">Classique
            <input type="radio" name="newmoon-cards" id="classic-newmoon" value="classic" onChange={handleChange} />
          </label>
        </div>
        <div className="configuration__settings-field-item">
          <label htmlFor="newmoon-preferences">Mes préférences
            <input type="radio" name="newmoon-cards" id="newmoon-preferences" value="preferences" onChange={handleChange} />
          </label>
        </div>
      </div>
      <div className="configuration__settings-field" id="roles-attribution-field">
        <h5 className="configuration__settings-field-title">Attribution des Roles</h5>
        <div className="configuration__settings-field-item">
          <label htmlFor="manual">Manuelle
            <input type="radio" name="roles-attribution" id="manual" value="manual" onChange={handleChange} />
          </label>
        </div>
        <div className="configuration__settings-field-item">
          <label htmlFor="random">Aléatoire
            <input type="radio" name="roles-attribution" id="random" value="random" onChange={handleChange} />
          </label>
        </div>
      </div>
      <div className="configuration__settings-link">
        <Link to="/configurer-ma-partie?etape=2">Suivant</Link>
      </div>
      {errorMessage.length > 0 && (
        <div className="configuration__settings-error">
          {errorMessage.map((error) => <p>{error}</p>)}
        </div>
      )}
    </div>
  );
};

Step1.propTypes = {
  errorMessage: PropTypes.array.isRequired,

  // FUNCTIONS
  setPlayersNumber: PropTypes.func.isRequired,
  setGames: PropTypes.func.isRequired,
  setGameOrder: PropTypes.func.isRequired,
  setNewmoonCards: PropTypes.func.isRequired,
  setRolesAttribution: PropTypes.func.isRequired,
};

export default Step1;
