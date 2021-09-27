import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const UserLi = ({ username, id, savePlayerFromUsers }) => {
  const handleClick = () => {
    if (window.confirm(`Confirmez-vous l'ajout de ${username} ?`)) {
      // TODO
      // handle the hidden fields
      savePlayerFromUsers(username, id);
    }
  };
  return (
    <li
      className="add-form__search-results-item"
      onClick={handleClick}
    >
      {username}
    </li>
  );
};

UserLi.propTypes = {
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  savePlayerFromUsers: PropTypes.func.isRequired,
};

export default UserLi;
