import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import { Edit } from 'react-feather';

import './style.scss';

import ancien from 'src/assets/pictures/roles/ancien.png';
import ange from 'src/assets/pictures/roles/ange.png';
import chasseur from 'src/assets/pictures/roles/chasseur.png';

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
    setError,
    formState: {
      errors,
    },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Succès', data);
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
    const pseudoElement = document.querySelector('#pseudo-value');
    const pseudoInputElement = document.querySelector('#pseudo-input');

    pseudoElement.classList.toggle('personaldetails__form-identity-pseudo-value--hidden');
    pseudoInputElement.type = 'text';
    pseudoInputElement.focus();
  };

  const handleClickOnEmail = () => {
    const emailElement = document.querySelector('#email-value');
    const emailInputElement = document.querySelector('#email-input');

    emailElement.classList.toggle('personaldetails__form-identity-email-value--hidden');
    emailInputElement.type = 'email';
    emailInputElement.focus();
  };

  const handleBlurOnPseudo = () => {
    const pseudoElement = document.querySelector('#pseudo-value');
    const pseudoInputElement = document.querySelector('#pseudo-input');

    pseudoElement.classList.remove('personaldetails__form-identity-pseudo-value--hidden');
    pseudoInputElement.type = 'hidden';

    if (watch().pseudo !== '') {
      pseudoElement.innerText = watch().pseudo;
    }
  };

  const handleBlurOnEmail = () => {
    if (!watch().email.includes('@') && watch().email !== '') {
      setError('email', {
        type: 'manual',
        message: "Veuillez inclure '@' dans l'adresse e-mail",
      });
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
              <p
                className="personaldetails__form-identity-pseudo-value"
                onClick={handleClickOnPseudo}
                id="pseudo-value"
              >
                {pseudo}
              </p>
              <input
                {...register('pseudo')}
                type="hidden"
                id="pseudo-input"
                className="personaldetails__form-identity-pseudo-input"
                placeholder={pseudo}
                onBlur={handleBlurOnPseudo}
              />
            </div>
          </div>
          <div className="personaldetails__form-email">
            <label>Email :</label>
            <p
              className="personaldetails__form-identity-email-value"
              id="email-value"
              onClick={handleClickOnEmail}
            >
              {email}
            </p>
            <input
              {...register('email')}
              className="personaldetails__form-identity-email-input"
              placeholder={email}
              type="hidden"
              id="email-input"
              onBlur={handleBlurOnEmail}
            />
            {errors.email && <p className="errorMessage">{errors.email.message}</p>}
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
            {errors.actualPassword && <p className="errorMessage">{errors.actualPassword.message}</p>}
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
          {/* <div className="personaldetails__form-message">Message succès</div> */}
          <button type="submit" className="personaldetails__form-submit">Valider les changements</button>
        </form>
      </div>
    </div>
  );
};

PersonalDetails.propTypes = {
  changeAvatar: PropTypes.func.isRequired,

  // STRINGS
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default PersonalDetails;
