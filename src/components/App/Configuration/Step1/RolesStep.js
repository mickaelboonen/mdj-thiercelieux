import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const RolesStep = ({ rolesList, villageList }) => {
  const filteredRolesList = rolesList.filter((role) => role !== 'Simple Villageois' && role !== 'Loup-Garou');
  const filteredVillageList = villageList.filter((role) => role !== 'Fermier' && role !== 'Vagabond');
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
        <div className="roles-step__roles-selects">
          <label htmlFor="">Villageois
            <input type="number" name="" id="" />
          </label>
          <label htmlFor="">Loups-Garous
            <input type="number" name="" id="" />
          </label>
        </div>
        <ul className="roles-step__roles-list">
          {filteredRolesList.map((role) => (
            <li className="roles-step__roles-list-item" key={role}>
              <label>{role}
                <input type="checkbox" value={role} id={`checkbox-${role}`} />
              </label>
            </li>
          ))}
        </ul>
      </div>
      {/* {villageList.length > 0 && ( */}
      <div className="roles-step__roles">
        <h5 className="roles-step__roles-title">Les rôles cachés</h5>
        <div className="roles-step__roles-selects">
          <label htmlFor="">Fermiers
            <input type="number" name="" id="" />
          </label>
          <label htmlFor="">Vagabonds
            <input type="number" name="" id="" />
          </label>
        </div>
        <ul className="roles-step__roles-list">
          {filteredVillageList.map((role) => (
          <li className="roles-step__roles-list-item" key={role}>
            <label>{role}
              <input type="checkbox" value={role} id={`checkbox-${role}`} />
            </label>
          </li>
          ))}
        </ul>
      </div>
      {/* )} */}
      <div className="roles-step__error">
        <p>
          Message Erreur
        </p>
      </div>
      {/* <div>
        <p>
          Enregistrer cette configuration
        </p>
      </div> */}
      <div className="roles-step__button">
        <button type="button">Suivant</button>
      </div>
    </div>
  );
};

RolesStep.propTypes = {

};

export default RolesStep;
