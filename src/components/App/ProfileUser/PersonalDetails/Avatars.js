import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Avatars = ({ changeAvatar, fetchAvatars, avatars }) => {
  useEffect(() => {
    fetchAvatars();
  }, []);
  const handleClickOnNewAvatar = (event) => {
    const avatarElements = document.querySelectorAll('.avatars__list-item');
    avatarElements.forEach((el) => {
      if (el === event.currentTarget) {
        el.classList.toggle('avatars__list-item--selected');
      }
    });
  };

  const handleGoBackClick = () => {
    const avatarsElement = document.querySelector('.avatars');
    avatarsElement.classList.remove('avatars--open');
  };

  const handleClickToSaveNewAvatar = () => {
    const chosenAvatar = document.querySelectorAll('.avatars__list-item--selected');
    if (chosenAvatar.length === 1) {
      changeAvatar(chosenAvatar[0].id);
      handleGoBackClick();
    }
  };

  return (
    <div className="avatars">
      <h4>Choisis un avatar</h4>
      <div className="avatars__list">
        {avatars.map((avatar) => (
          <img
            key={avatar.id}
            className="avatars__list-item"
            src={avatar.image}
            alt={`avatar ${avatar.name}`}
            id={avatar.name}
            onClick={handleClickOnNewAvatar}
          />
        ))}
      </div>
      <div className="avatars__button">
        <button type="button" onClick={handleClickToSaveNewAvatar}>Valider le changement</button>
        <p onClick={handleGoBackClick}>Retour</p>
      </div>
    </div>
  );
};

Avatars.propTypes = {
  avatars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,

  // FUNCTIONS
  changeAvatar: PropTypes.func.isRequired,
  fetchAvatars: PropTypes.func.isRequired,
};

export default Avatars;
