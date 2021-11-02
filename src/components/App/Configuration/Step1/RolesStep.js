/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { Link } from 'react-router-dom';

// TODO placeholders

const RolesStep = ({
  rolesList,
  villageList,
  numberPlayers,
  saveRole,
  errorMessage,
  configDone,
  chosenHiddenRoles,
  chosenVillageRoles,
  preferences,
  setConfigErrorMessage,
  applySelectedConfiguration,
}) => {
  const filteredRolesList = rolesList.filter((role) => role !== 'Simple Villageois' && role !== 'Loup-Garou');
  const filteredVillageList = villageList.filter((role) => role !== 'Fermier' && role !== 'Vagabond');

  const newErrorMessageArray = errorMessage.filter((message) => message !== '');

  const handleCheck = (event) => {
    const { value, checked } = event.target;
    const currentId = event.target.parentNode.parentNode.parentNode.id;
    saveRole(value, currentId, '', checked);
  };
  const handleInputNumber = (event) => {
    const { value, name } = event.target;
    const currentId = event.target.parentNode.parentNode.id;
    saveRole(value, currentId, name, false);
  };
  const toggleCheck = (role) => {
    if (chosenHiddenRoles.indexOf(role) >= 0 || chosenVillageRoles.indexOf(role) >= 0) {
      return true;
    }
    return false;
  };
  const displayPlaceholder = (category) => {
    let placeholder = '';
    let roleArray = [];
    if (category === 'Simple Villageois') {
      roleArray = chosenHiddenRoles.filter((role) => role === category);
      if (roleArray.length > 0) {
        placeholder = roleArray.length;
      }
      else {
        placeholder = 'Nombre de Villageois';
      }
    }
    else if (category === 'Loup-Garou') {
      roleArray = chosenHiddenRoles.filter((role) => role === category);
      if (roleArray.length > 0) {
        placeholder = roleArray.length;
      }
      else {
        placeholder = 'Nombre de Loups-Garous';
      }
    }
    else if (category === 'Fermier') {
      roleArray = chosenVillageRoles.filter((role) => role === category);
      if (roleArray.length > 0) {
        placeholder = roleArray.length;
      }
      else {
        placeholder = 'Nombre de Fermiers';
      }
    }
    else if (category === 'Vagabond') {
      roleArray = chosenHiddenRoles.filter((role) => role === category);
      if (roleArray.length > 0) {
        placeholder = roleArray.length;
      }
      else {
        placeholder = 'Nombre de Vagabonds';
      }
    }
    return placeholder;
  };
  const configPreferences = preferences.filter((pref) => pref.type === 'roles');

  const handleConfigurationChange = (event) => {
    if (event.target.value !== 'Classic') {
      const selectedConfiguration = configPreferences.find((pref) => pref.name === event.target.value);

      if (selectedConfiguration.values.length > numberPlayers) {
        setConfigErrorMessage('+');
      }
      else if (selectedConfiguration.values.length < numberPlayers) {
        setConfigErrorMessage('-');
      }
      else {
        applySelectedConfiguration(selectedConfiguration);
      }
    }
  };

  // TODO : .roles-step__roles elements are repeating : factorise
  return (
    <div className="roles-step">
      <div className="roles-step__configuration">
        <select name="" id="" onChange={handleConfigurationChange}>
          <option value="classic">Choisir une configuration pré-enregistrée</option>
          {configPreferences.map((pref) => (
            <option className="config__option" key={pref.name} value={pref.name}>{pref.name} - {pref.values.length} rôles</option>
          ))}
        </select>
      </div>
      <div className="roles-step__roles">
        <h5 className="roles-step__roles-title">Les rôles cachés</h5>
        <div className="roles-step__roles-selects" id="hidden-roles-selects">
          <label htmlFor="Villageois">Simple Villageois
            <input type="number" id="Simple Villageois" name="Simple Villageois" min="0" max={Number(numberPlayers)} onChange={handleInputNumber} placeholder={displayPlaceholder('Simple Villageois')} />
          </label>
          <label htmlFor="Loup-Garou">Loups-Garous
            <input type="number" id="Loup-Garou" name="Loup-Garou" min="0" max={Number(numberPlayers)} onChange={handleInputNumber} placeholder={displayPlaceholder('Loup-Garou')} />
          </label>
        </div>
        <ul className="roles-step__roles-list" id="hidden-roles-list">
          {filteredRolesList.map((role) => (
            // TODO : Component
            <li className="roles-step__roles-list-item" key={role}>
              <label htmlFor={`checkbox-${role}`}>{role}
                <input checked={toggleCheck(role)} className="roles-step__roles-list-item-checkbox" type="checkbox" value={role} id={`checkbox-${role}`} onChange={handleCheck} />
              </label>
            </li>
          ))}
        </ul>
      </div>
      {villageList.length > 0 && (
      <div className="roles-step__roles">
        <h5 className="roles-step__roles-title">Les Villageois</h5>
        <div className="roles-step__roles-selects" id="village-roles-selects">
          <label htmlFor="Fermier">Fermiers
            <input type="number" id="Fermier" name="Fermier" min="0" max="6" onChange={handleInputNumber} placeholder={displayPlaceholder('Fermier')} />
          </label>
          <label htmlFor="Vagabond">Vagabonds
            <input type="number" id="Vagabond" name="Vagabond" min="0" max="15" onChange={handleInputNumber} placeholder={displayPlaceholder('Vagabond')} />
          </label>
        </div>
        <ul className="roles-step__roles-list" id="village-roles-list">
          {filteredVillageList.map((role) => (
            // TODO : same component as above
            <li className="roles-step__roles-list-item" key={role}>
              <label htmlFor={`checkbox-${role}`}>{role}
                <input className="roles-step__roles-list-item-checkbox" name={role} type="checkbox" value={role} id={`checkbox-${role}`} onChange={handleCheck} />
              </label>
            </li>
          ))}
        </ul>
      </div>
      )}
      {newErrorMessageArray.length > 0 && (
      <div className="roles-step__error">
        {newErrorMessageArray.map((message) => <p>{message}</p>)}
      </div>
      )}
      {/* <div>
        <p>
          Enregistrer cette configuration
        </p>
      </div> */}
      <div className="roles-step__button">
        {configDone && <Link to="/configurer-ma-partie/les-joueurs?mode=aleatoire"><button type="button">Suivant</button></Link>}
        {/* TODO : Onclick, needs to display the values and the dom fully chargent as it was when leaving the page */}
        <Link
          to="/configurer-ma-partie/la-partie"
        >
          Retour
        </Link>
      </div>
    </div>
  );
};

RolesStep.propTypes = {
  numberPlayers: PropTypes.number.isRequired,
  saveRole: PropTypes.func.isRequired,
  configDone: PropTypes.bool.isRequired,

  // ARRAYS
  rolesList: PropTypes.array.isRequired,
  villageList: PropTypes.array.isRequired,
  errorMessage: PropTypes.array.isRequired,
  chosenHiddenRoles: PropTypes.array.isRequired,
  chosenVillageRoles: PropTypes.array.isRequired,

};

export default RolesStep;
