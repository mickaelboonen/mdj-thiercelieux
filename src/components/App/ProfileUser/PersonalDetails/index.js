import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Edit } from 'react-feather';

import './style.scss';

import Avatars from 'src/containers/App/ProfileUser/PersonalDetails/Avatars';

const PersonalDetails = ({
  pseudo,
  email,
  avatar,
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
  const handleClickOnEdit = () => {
    const avatarsElement = document.querySelector('.avatars');
    avatarsElement.classList.toggle('avatars--open');
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

    emailElement.classList.toggle('personaldetails__form-email-value--hidden');
    emailInputElement.type = 'email';
    emailInputElement.focus();
  };

  const handleBlurOnPseudo = () => {
    const pseudoElement = document.querySelector('#pseudo-value');
    const pseudoInputElement = document.querySelector('#pseudo-input');

    pseudoElement.classList.remove('personaldetails__form-identity-pseudo-value--hidden');
    pseudoInputElement.type = 'hidden';

    if (watch().pseudo !== '') {
      if (watch().email.length < 7) {
        setError('pseudo', {
          type: 'manual',
          message: 'Votre pseudo doit comporter 7 caractères au minimum.',
        });
      }
      else {
        pseudoElement.innerText = watch().pseudo;
      }
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
              <img className="personaldetails__form-identity-avatar-image" src={avatar} alt="" />
              <button
                type="button"
                className="personaldetails__form-identity-avatar-button"
                onClick={handleClickOnEdit}
              >
                <Edit color="white" />
              </button>
              {/* <Avatars /> */}
            </div>
            <div className="personaldetails__form-identity-pseudo">
              <label>Pseudo</label>
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
              {errors.pseudo && <p className="personaldetails__form-identity-pseudo-error">{errors.pseudo.message}</p>}
            </div>
          </div>
          <div className="personaldetails__form-email">
          <label>Email</label>
            <p
              className="personaldetails__form-email-value"
              id="email-value"
              onClick={handleClickOnEmail}
            >
              {email}
            </p>
            <input
              {...register('email')}
              className="personaldetails__form-email-input"
              placeholder={email}
              type="hidden"
              id="email-input"
              onBlur={handleBlurOnEmail}
            />
            {errors.email && <p className="personaldetails__form-email-error">{errors.email.message}</p>}
          </div>
          <div className="personaldetails__form-passwords">
            <label>Mot de passe actuel</label>
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
              className="personaldetails__form-passwords-input"
            />
            {errors.actualPassword && <p className="personaldetails__form-passwords-error">{errors.actualPassword.message}</p>}
            <label>Nouveau mot de passe</label>
            <input
              type="password"
              id="newPassword"
              {...register('newPassword')}
              className="personaldetails__form-passwords-input"
            />
            {errors.newPassword && <p className="personaldetails__form-passwords-error">{errors.newPassword.message}</p>}
            <label>Confirmez le mot de passe</label>
            <input
              type="password"
              id="confirmPassword"
              className="personaldetails__form-passwords-input"
              {...register('confirmPassword', {
                validate: (value) => value === newPassword.value || 'Les mots de passe ne sont pas identiques.',
              })}
            />
            {errors.confirmPassword && <p className="personaldetails__form-passwords-error">{errors.confirmPassword.message}</p>}
          </div>
          {/* <div className="personaldetails__form-success">Message succès</div> */}
          <div className="personaldetails__form-submit">
            <button type="submit">Valider les changements</button>
            <Link to="/profil">Retour</Link>
          </div>
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
