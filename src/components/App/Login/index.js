import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import wolf from 'src/assets/pictures/wolf.svg';

import './style.scss';
import { Link } from 'react-router-dom';

const Login = ({ login }) => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Succès", data);
    login(data);
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src={wolf} alt="Logo" />
      </div>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="login__form-inscription">
          <p>Pas encore de compte ? <Link to="/s'inscrire">C'est par ici.</Link></p>
        </div>
        <input
          placeholder="Nom d'utilisateur ou Email"
          className="login__form-input"
          {...register('username', {
            required: "Hop hop hop mon p'tit loup, t'as oublié ton super pseudo.",
            minLength: {
              value: 3,
              message: 'Ton pseudo est trop court !',
            },
          })}
        />
        {/* penser à ajouter un message d'erreur si pseudo existant */}
        {errors.username && <p className="login__form-error">{errors.username.message}</p>}
        <input
          type="password"
          placeholder="Mot de passe"
          id="password"
          className="login__form-input"
          {...register('password', {
            required: "Oups, t'as oublié d'indiquer un mot de passe.",
            minLength: {
              value: 7,
              message: 'Le mot de passe est trop court !',
            },
          })}
        />
        {errors.password && <p className="login__form-error">{errors.password.message}</p>}
        <div className="login__form-link">
          <Link to="#">Mot de passe oublié ?</Link>
        </div>
        <div className="login__form-button">
          <button type="submit">Connexion</button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {

};

export default Login;
