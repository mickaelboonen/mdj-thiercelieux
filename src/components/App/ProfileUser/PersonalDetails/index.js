import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import { Edit } from 'react-feather';

import './style.scss';

import ancien from 'src/assets/pictures/roles/ancien.png';
import ange from 'src/assets/pictures/roles/ange.png';
import chasseur from 'src/assets/pictures/roles/chasseur.png';

// Future evolution : allowing pseudo and email change ?

const PersonalDetails = ({
  pseudo,
  email,
  avatar,
  changeAvatar,
}) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Succès", data);
    // login(data);
  };
  const handleClickOnNewAvatar = (event) => {
    const avatarElements = document.querySelectorAll('.personaldetails__form-identity-avatar-lib-item');
    avatarElements.forEach((el) => {
      if (el === event.currentTarget) {
        el.classList.toggle('personaldetails__form-identity-avatar-lib-item--selected');
      }
    });
  };

  const handleClickOnEdit = () => {
    const libElement = document.querySelector('.personaldetails__form-identity-avatar-lib');
    libElement.classList.toggle('personaldetails__form-identity-avatar-lib--open');
  };

  const handleClickToSaveNewAvatar = () => {
    const chosenAvatar = document.querySelectorAll('.personaldetails__form-identity-avatar-lib-item--selected');
    if (chosenAvatar.length === 1) {
      changeAvatar(chosenAvatar[0].id);
      handleClickOnEdit();
    }
  };

  const handleClickOnPseudo = () => {
    const pseudoElement = document.querySelector('.personaldetails__form-identity-pseudo-value');
    const pseudoInputElement = document.querySelector('.personaldetails__form-identity-pseudo-input');

    pseudoElement.classList.toggle('personaldetails__form-identity-pseudo-value--hidden');
    pseudoInputElement.type = 'text';
    pseudoInputElement.focus();
  };

  const handleClickOnEmail = () => {
    const emailElement = document.querySelector('.personaldetails__form-identity-email-value');
    const emailInputElement = document.querySelector('.personaldetails__form-identity-email-input');

    emailElement.classList.toggle('personaldetails__form-identity-email-value--hidden');
    emailInputElement.type = 'email';
    emailInputElement.focus();
  };

  const handleBlurOnPseudo = () => {
    const pseudoElement = document.querySelector('.personaldetails__form-identity-pseudo-value--hidden');
    const pseudoInputElement = document.querySelector('.personaldetails__form-identity-pseudo-input');

    pseudoElement.classList.remove('personaldetails__form-identity-pseudo-value--hidden');
    pseudoInputElement.type = 'hidden';

    if (watch().pseudo !== '') {
      pseudoElement.innerText = watch().pseudo;
    }
  };

  const handleBlurOnEmail = () => {
    const emailElement = document.querySelector('.personaldetails__form-identity-email-value--hidden');
    const emailInputElement = document.querySelector('.personaldetails__form-identity-email-input');

    emailElement.classList.remove('personaldetails__form-identity-email-value--hidden');
    emailInputElement.type = 'hidden';

    if (watch().email !== '') {
      emailElement.innerText = watch().email;
    }
  };
  return (
    <div className="personaldetails">
      <h3>Mes informations personnelles</h3>
      <div className="personaldetails__form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="personaldetails__form-identity">
            <div className="personaldetails__form-identity-avatar">
              <img src={avatar} alt="" />
              <button
                type="button"
                onClick={handleClickOnEdit}
              >
                <Edit />
              </button>
              <div className="personaldetails__form-identity-avatar-lib">
                <img className="personaldetails__form-identity-avatar-lib-item" src={ange} alt="ange" id="ange" onClick={handleClickOnNewAvatar} />
                <img className="personaldetails__form-identity-avatar-lib-item" src={chasseur} alt="" id="chasseur" onClick={handleClickOnNewAvatar} />
                <img className="personaldetails__form-identity-avatar-lib-item" src={ancien} alt="" id="ancien" onClick={handleClickOnNewAvatar} />
                <button type="button" onClick={handleClickToSaveNewAvatar}>Choisir l'avatar</button>
              </div>
            </div>
            <div className="personaldetails__form-identity-pseudo">
              <label>Pseudo :</label>
              <p className="personaldetails__form-identity-pseudo-value" onClick={handleClickOnPseudo}>{pseudo}</p>
              <input
                {...register('pseudo', {
                  required: 'Vous devez préciser un pseudo.',
                  minLength: {
                    value: 3,
                    message: 'Votre mot de passe doit contenir un minimum de 3 caractères.',
                  },
                })}
                type="hidden"
                className="personaldetails__form-identity-pseudo-input"
                placeholder={pseudo}
                onBlur={handleBlurOnPseudo}
              />
            </div>
          </div>
          <div className="personaldetails__form-email">
            <label>Email :</label>
            <p className="personaldetails__form-identity-email-value" onClick={handleClickOnEmail}>{email}</p>
            <input
              {...register('email', {
                required: 'Vous devez préciser un email.',
                minLength: {
                  value: 3,
                  message: 'Votre mot de passe doit contenir un minimum de 3 caractères.',
                },
              })}
              className="personaldetails__form-identity-email-input"
              placeholder={email}
              type="hidden"
              onBlur={handleBlurOnEmail}
            />
          </div>
          <div className="personaldetails__form-editable">
            <label>Mot de passe actuel :</label>
            <input
              {...register('actualPassword', {
                required: 'Vous devez préciser un mot de passe.',
                minLength: {
                  value: 7,
                  message: 'Votre mot de passe doit contenir un minimum de 7 caractères.',
                },
              })}
              type="password"
              id="actualPassword"
            />
            <label>Nouveau mot de passe :</label>
            <input
              type="password"
              id="newPassword"
              {...register('newPassword')}
            />
            {errors.newPassword && <p className="errorMessage">{errors.newPassword.message}</p>}
            <label>Confirmez le mot de passe :</label>
            <input
              type="password"
              id="confirmPassword"
              {...register('confirmPassword', {
                validate: (value) => value === newPassword.value || 'Les mots de passe ne sont pas identiques.',
              })}
            />
            {errors.confirmPassword && <p className="errorMessage">{errors.confirmPassword.message}</p>}
          </div>
          <div className="personaldetails__form-message">Message succès</div>
          <button type="submit" className="personaldetails__form-submit">Valider les changements</button>
        </form>
      </div>
    </div>
  );
};

PersonalDetails.propTypes = {

  // STRINGS
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default PersonalDetails;
