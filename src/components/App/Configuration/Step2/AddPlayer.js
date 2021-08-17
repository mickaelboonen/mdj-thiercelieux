import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const AddPlayer = ({
  games,
  rolesList,
  villageList,
  saveSelectChange,
}) => {
  const isVillageSelected = games.indexOf('Le Village');

  const handleSelectChange = (event) => {
    saveSelectChange(event.target.value, event.target.id);
  }
  return (
    <form className="add-form">
      <div className="add-form__search-input">
        <input type="text" name="" id="" />
        <ul className={classNames('add-form__search-results', { 'add-form__search-results--open': true })}>
          <li className="add-form__search-results-item">Micka</li>
          <li className="add-form__search-results-item">Quentin</li>
          <li className="add-form__search-results-item">Océ</li>
          <li className="add-form__search-results-item">Hel</li>
          <li className="add-form__search-results-item">Lud</li>
          <li className="add-form__search-results-item">Ju</li>
        </ul>
      </div>
      <div className="add-form__pseudo">
        <label htmlFor="">PSEUDO</label>
        <input type="text" name="" id="" />
      </div>
      <div className="add-form__hidden">
        <div className="add-form__hidden-radio">
          <div><input type="radio" name="" id="" /><label>Oui</label></div>
          <div><input type="radio" name="" id="" /><label>Non</label></div>
        </div>
        <div className="add-form__hidden-id">
          <input type="number" name="" id="" />
        </div>
      </div>
      <div className="add-form__roles">
        <label htmlFor="">ROLES</label>
        <select name="" id="add-form__roles-select" onChange={handleSelectChange}>
          <option value="">Veuillez choisir un rôle</option>
          {rolesList.map((role) => <option key={role} value={role}>{role}</option>)}
        </select>
      </div>
      {isVillageSelected >= 0 && (
      <div className="add-form__village">
        <label htmlFor="">VILLAGE</label>
        <select name="" id="add-form__village-select" onChange={handleSelectChange}>
          <option value="">Veuillez choisir un rôle</option>
          {villageList.map((role) => <option key={role} value={role}>{role}</option>)}
        </select>
      </div>
      )}
      <div className="add-form__button">
        <button type="submit">Ajouter ce joueur</button>
      </div>
    </form>
  );
};

AddPlayer.propTypes = {

};

export default AddPlayer;
