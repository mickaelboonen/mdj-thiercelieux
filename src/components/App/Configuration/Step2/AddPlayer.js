import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Field from 'src/containers/Field';
import UserLi from 'src/containers/App/Configuration/Step2/UserLi';

import './style.scss';
import { useLocation } from 'react-router-dom';

const AddPlayer = ({
  games,
  rolesList,
  villageList,
  saveSelectChange,
  savePlayer,
  usersList,
  pseudo,
}) => {
  const isVillageSelected = games.indexOf('Le Village');

  const handleSelectChange = (event) => {
    saveSelectChange(event.target.value, event.target.id);
  };

  const handleClick = () => {
    if (pseudo !== '') {
      savePlayer();
    }
    else {
      // TODO
      // Message d'erreur
    }
  };

  let randomMode = false;
  const location = useLocation();
  if (location.search === '?mode=aleatoire') {
    randomMode = true;
  }
  return (
    <form className="add-form">
      <div className="add-form__users">
      <p>PSEUDO</p>
        <Field
          id="add-form__user-input"
          type="text"
          name="usersInput"
          placeholder="Veuillez renseigner le prénom"
        />
      </div>
      <ul
        className={classNames('add-form__users-results-list', { 'add-form__users-results-list--open': usersList.length !== 0 })}
      >
        {usersList.map((user) => <UserLi key={user.id} {...user} />)}
      </ul>
      <div className="add-form__pseudo">
        <p>PSEUDO</p>
        <Field
          id="add-form__pseudo-input"
          type="text"
          name="pseudoInput"
          placeholder="Veuillez renseigner le prénom"
        />
      </div>
      {!randomMode && (
      <div className="add-form__roles">
        <label htmlFor="add-form__roles-select">ROLES</label>
        <select name="add-form__roles-select" id="add-form__roles-select" onChange={handleSelectChange}>
          <option value="">Veuillez choisir un rôle</option>
          {rolesList.map((role) => <option key={role} value={role}>{role}</option>)}
        </select>
      </div>
      )}
      {(!randomMode && isVillageSelected >= 0) && (
      <div className="add-form__village">
        <label htmlFor="add-form__village-select">VILLAGE</label>
        <select name="add-form__village-select" id="add-form__village-select" onChange={handleSelectChange}>
          <option value="">Veuillez choisir un rôle</option>
          {villageList.map((role) => <option key={role} value={role}>{role}</option>)}
        </select>
      </div>
      )}
      <div className="add-form__button">
        <button type="button" onClick={handleClick}>Ajouter ce joueur</button>
      </div>
    </form>
  );
};

AddPlayer.propTypes = {

  // FUNCTIONS
  savePlayer: PropTypes.func.isRequired,
  saveSelectChange: PropTypes.func.isRequired,

  // ARRAYS
  games: PropTypes.array.isRequired,
  rolesList: PropTypes.array.isRequired,
  villageList: PropTypes.array.isRequired,
  usersList: PropTypes.array.isRequired,
};

export default AddPlayer;
