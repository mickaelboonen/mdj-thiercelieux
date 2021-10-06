import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, NavLink } from 'react-router-dom';
import wolf from 'src/assets/pictures/wolf.svg';

import PropTypes from 'prop-types';

import '../Login/style.scss';

const Register = ({
  saveNewUser,
  validationMessage,
  userErrors,
  clearMessages,
}) => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm();

  useEffect(() => {
    clearMessages();
  }, [])

  const onSubmit = (data) => {
    saveNewUser(data);
  };
  return (
    <div className="register">
      <div className="register__logo">
        <img src={wolf} alt="Logo" />
      </div>
      <h3>Créer mon compte</h3>
      <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
        <label className="register__form-label" htmlFor="username">Nom d'utilisateur* :</label>
        <input
          id="username"
          className="register__form-input"
          {...register('username', {
            required: "Hop hop hop mon p'tit loup, t'as oublié ton super pseudo.",
            minLength: {
              value: 3,
              message: 'Ton pseudo doit contenir un minimum de 3 caractères ;)',
            },
          })}
        />
        {/* penser à ajouter un message d'erreur si pseudo existant */}
        {errors.username && <p className="register__form-error">{errors.username.message}</p>}
        <label className="register__form-label" htmlFor="email">Adresse e-mail* :</label>
        <input
          type="email"
          id="email"
          className="register__form-input"
          {...register('email', {
            required: "Oups, t'as oublié d'indiquer une adresse e-mail.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "L'adresse e-mail indiquée n'est pas valide :(",
            },
          })}
        />
        {errors.email && <p className="register__form-error">{errors.email.message}</p>}
        <label className="register__form-label" htmlFor="password">Mot de passe* :</label>
        <input
          type="password"
          id="password"
          className="register__form-input"
          {...register('password', {
            required: "Oups, t'as oublié d'indiquer un mot de passe.",
            minLength: {
              value: 7,
              message: 'Allez un petit effort, nous demandons un minimum de 7 caractères.',
            },
          })}
        />
        {errors.password && <p className="register__form-error">{errors.password.message}</p>}
        <label className="register__form-label" htmlFor="confirmPassword">Confirmez votre mot de passe* :</label>
        <input
          type="password"
          className="register__form-input"
          id="confirmPassword"
          {...register('confirmPassword', {
            validate: (value) => value === password.value || 'Ah zut, les mots de passe ne sont pas identiques.',
          })}
        />
        {errors.confirmPassword && <p className="register__form-error">{errors.confirmPassword.message}</p>}
        {userErrors.length > 0 && <p className="register__form-auth-error">{userErrors[0]}</p>}
        <div className="register__form-button">
          <button type="submit">Inscription</button>
        </div>
        {validationMessage !== '' && (
        <div className="register__form-validation">
          <p>{validationMessage}</p>
          <Link to="/se-connecter">Me connecter</Link>
        </div>
        )}
      </form>
      <NavLink
        to="/"
        className="register__back-home"
      >
        Retour à la page d'accueil
      </NavLink>

    </div>
  );
};

Register.propTypes = {
  validationMessage: PropTypes.string.isRequired,
  userErrors: PropTypes.array.isRequired,

  // FUNCTIONS
  clearMessages: PropTypes.func.isRequired,
  saveNewUser: PropTypes.func.isRequired,
};

export default Register;
