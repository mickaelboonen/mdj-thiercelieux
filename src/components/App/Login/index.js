import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import wolf from 'src/assets/pictures/wolf.svg';

import './style.scss';
import { Link } from 'react-router-dom';

const Login = ({ checkAuth, authErrors }) => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm();

  const onSubmit = (data) => {
    checkAuth(data);
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
            required: "A Thiercelieux, tout le monde a un pseudo. C'est quoi le tien ?",
          })}
        />
        {errors.username && <p className="login__form-error">{errors.username.message}</p>}
        <input
          type="password"
          placeholder="Mot de passe"
          id="password"
          className="login__form-input"
          {...register('password', {
            required: "C'est pas que la confiance ne règne pas à Thiercelieux, mais il nous faut un mot de passe !",
          })}
        />
        {errors.password && <p className="login__form-error">{errors.password.message}</p>}
        {authErrors.length > 0 && <p className="login__form-auth-error">{authErrors[0]}</p>}
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
  checkAuth: PropTypes.func.isRequired,
  authErrors: PropTypes.array.isRequired,
};

export default Login;
