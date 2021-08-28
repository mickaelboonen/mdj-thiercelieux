import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Field from 'src/containers/Field';
import Friend from './Friend';

import './style.scss';

const Friends = ({
  users,
  addNewFriend,
  friends,
}) => {
  const handleClick = (event) => {
    const answer = window.confirm(`Confirmez-vous l'ajout de ${event.target.innerText} à votre liste d'amis ?`);
    if (answer) {
      addNewFriend(event.target.innerText);
    }
  };
  return (
    <div className="friends">
      <h3 className="friends__title">Mes amis</h3>
      <div className="friends__search">
        <label htmlFor="">Ajouter un ami
          <Field
            className="friends__search-input"
            type="text"
            name="usersInput"
            placeholder="Trouver un ami"
          />
          <ul className={classNames('friends__search-results', {'friends__search-results--open': users.length > 0 })}>
            {users.map((user) => (
              <li
                key={user.id}
                className="user-li"
                onClick={handleClick}
              >
                {user.username}
              </li>
            ))}
          </ul>
        </label>
      </div>
      <div className="friends__xxx">
        <h5 className="friends__xxx-title">
          Ma liste d'amis
        </h5>
        <div className="friends__xxx-list">
          {friends.map((friend) => <Friend key={friend.id} {...friend} />)}
        </div>
      </div>
    </div>
  );
};

Friends.propTypes = {

};

export default Friends;
