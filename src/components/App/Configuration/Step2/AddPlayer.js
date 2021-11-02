import React from 'react';
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
  usersInput,
  pseudo,
  goBackToPlayersList,
}) => {
  const isVillageSelected = games.indexOf('Le Village');

  const handleSelectChange = (event) => {
    saveSelectChange(event.target.value, event.target.id);
  };

  const handleClick = () => {
    const error = document.querySelector('.add-form__error');
    if (pseudo !== '') {
      error.classList.remove('add-form__error--open');
      savePlayer();
    }
    else {
      // TODO
      error.classList.add('add-form__error--open');
    }
  };

  let randomMode = false;
  const location = useLocation();
  if (location.search === '?mode=aleatoire') {
    randomMode = true;
  }

  const handleGoBackClick = () => {
    goBackToPlayersList();
  }
  return (
    <form className="add-form">
      <div className="add-form__users">
      <label htmlFor="add-form__user-input">UTILISATEUR</label>
        <Field
          id="add-form__user-input"
          type="text"
          name="usersInput"
          placeholder="Veuillez renseigner le prénom"
          aria-describedby="specificityHelpBlock"
        />
        <small className={classNames('add-form__pseudo-small', { 'add-form__pseudo-small--hidden': usersInput.length !== 0 })}>
          Pour les joueurs qui possèdent un compte sur le Maitre du Jeu de Thiercelieux.
        </small>
      </div>
      <ul
        className={classNames('add-form__users-results-list', { 'add-form__users-results-list--open': usersInput.length !== 0 })}
      >
        {usersList.map((user) => <UserLi key={user.id} {...user} />)}
      </ul>
      <div className="add-form__pseudo">
        <label htmlFor="add-form__pseudo-input">PSEUDO</label>
        <Field
          id="add-form__pseudo-input"
          type="text"
          name="pseudoInput"
          placeholder="Veuillez renseigner le prénom"
        />
        {/* <small className="add-form__pseudo-small">
          Et pour ceux qui ne possèdent pas de compte sur le Maitre du Jeu de Thiercelieux. Pensez à vous inscrire, pour garder vos statistiques de jeu !
        </small> */}
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
      <div className="add-form__error">
        <p>Vous devez saisir un pseudo pour pouvoir ajouter un nouveau joueur. Pour annuler, veuillez cliquer sur "Annuler".</p>
      </div>
      <div className="add-form__go-back">
        <button type="button" onClick={handleGoBackClick}>Annuler</button>
      </div>
    </form>
  );
};

AddPlayer.propTypes = {
  pseudo: PropTypes.string.isRequired,
  usersInput: PropTypes.string.isRequired,

  // FUNCTIONS
  savePlayer: PropTypes.func.isRequired,
  saveSelectChange: PropTypes.func.isRequired,
  goBackToPlayersList: PropTypes.func.isRequired,

  // ARRAYS
  games: PropTypes.array.isRequired,
  rolesList: PropTypes.array.isRequired,
  villageList: PropTypes.array.isRequired,
  usersList: PropTypes.array.isRequired,
};

export default AddPlayer;
