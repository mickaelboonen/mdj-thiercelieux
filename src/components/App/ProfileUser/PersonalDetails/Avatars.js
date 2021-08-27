import React from 'react';
import PropTypes from 'prop-types';
import ancien from 'src/assets/pictures/roles/ancien.png';
import ange from 'src/assets/pictures/roles/ange.png';
import chasseur from 'src/assets/pictures/roles/chasseur.png';

import './style.scss';

const Avatars = ({ changeAvatar }) => {
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
        <img className="avatars__list-item" src={ange} alt="ange" id="ange" onClick={handleClickOnNewAvatar} />
        <img className="avatars__list-item" src={chasseur} alt="" id="chasseur" onClick={handleClickOnNewAvatar} />
        <img className="avatars__list-item" src={ancien} alt="" id="ancien" onClick={handleClickOnNewAvatar} />
        <img className="avatars__list-item" src={ange} alt="ange" id="ange" onClick={handleClickOnNewAvatar} />
        <img className="avatars__list-item" src={chasseur} alt="" id="chasseur" onClick={handleClickOnNewAvatar} />
        <img className="avatars__list-item" src={ancien} alt="" id="ancien" onClick={handleClickOnNewAvatar} />
        <img className="avatars__list-item" src={ange} alt="ange" id="ange" onClick={handleClickOnNewAvatar} />
        <img className="avatars__list-item" src={chasseur} alt="" id="chasseur" onClick={handleClickOnNewAvatar} />
        <img className="avatars__list-item" src={ancien} alt="" id="ancien" onClick={handleClickOnNewAvatar} />
        <img className="avatars__list-item" src={ange} alt="ange" id="ange" onClick={handleClickOnNewAvatar} />
        <img className="avatars__list-item" src={chasseur} alt="" id="chasseur" onClick={handleClickOnNewAvatar} />
        <img className="avatars__list-item" src={ancien} alt="" id="ancien" onClick={handleClickOnNewAvatar} />
      </div>
      <div className="avatars__button">
        <button type="button" onClick={handleClickToSaveNewAvatar}>Valider le changement</button>
        <p onClick={handleGoBackClick}>Retour</p>
      </div>
    </div>
  );
};

Avatars.propTypes = {
  changeAvatar: PropTypes.func.isRequired,

};

export default Avatars;
