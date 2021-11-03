import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const UserLi = ({ pseudo, id, savePlayerFromUsers }) => {
  const handleClick = () => {
    if (window.confirm(`Confirmez-vous l'ajout de ${pseudo} ?`)) {
      // TODO
      // handle the hidden fields
      savePlayerFromUsers(pseudo, id);
    }
  };
  return (
    <li
      className="add-form__users-results-list-item"
      onClick={handleClick}
    >
      {pseudo}
    </li>
  );
};

UserLi.propTypes = {
  pseudo: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  savePlayerFromUsers: PropTypes.func.isRequired,
};

export default UserLi;
