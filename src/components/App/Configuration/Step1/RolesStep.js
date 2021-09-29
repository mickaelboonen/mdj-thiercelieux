/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { Link, useHistory } from 'react-router-dom';

// TODO placeholders

const RolesStep = ({
  rolesList,
  villageList,
  numberPlayers,
  saveRole,
  errorMessage,
  configDone,
}) => {
  const filteredRolesList = rolesList.filter((role) => role !== 'Simple Villageois' && role !== 'Loup-Garou');
  const filteredVillageList = villageList.filter((role) => role !== 'Fermier' && role !== 'Vagabond');

  const history = useHistory();
  const handleClickOnReturn = () => {
    history.goBack();
  };

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
  // TODO : .roles-step__roles elements are repeating : factorise
  return (
    <div className="roles-step">
      <div className="roles-step__configuration">
        <select name="" id="">
          <option value="">Définir ma configuration</option>
          <option value="">Mes préférences</option>
        </select>
      </div>
      <div className="roles-step__roles">
        <h5 className="roles-step__roles-title">Les rôles cachés</h5>
        <div className="roles-step__roles-selects" id="hidden-roles-selects">
          <label htmlFor="Villageois">Simple Villageois
            <input type="number" id="Villageois" min="0" max={Number(numberPlayers)} onChange={handleInputNumber} placeholder="Nombre de Villageois" />
          </label>
          <label htmlFor="Loup-Garou">Loups-Garous
            <input type="number" id="Loup-Garou" min="0" max={Number(numberPlayers)} onChange={handleInputNumber} placeholder="Nombre de Loups-Garous" />
          </label>
        </div>
        <ul className="roles-step__roles-list" id="hidden-roles-list">
          {filteredRolesList.map((role) => (
            // TODO : Component
            <li className="roles-step__roles-list-item" key={role}>
              <label htmlFor={`checkbox-${role}`}>{role}
                <input className="roles-step__roles-list-item-checkbox" type="checkbox" value={role} id={`checkbox-${role}`} onChange={handleCheck} />
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
            <input type="number" id="Fermier" min="0" max="6" onChange={handleInputNumber} placeholder="Nombre de Fermiers" />
          </label>
          <label htmlFor="Vagabond">Vagabonds
            <input type="number" id="Vagabond" min="0" max="15" onChange={handleInputNumber} placeholder="Nombre de Vagabonds" />
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
        <button type="button" onClick={handleClickOnReturn}>Retour</button>
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

};

export default RolesStep;
