import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import './style.scss';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Succès", data);
  };
  return (
    <div className="register">
      <h3>Créer mon compte</h3>
      <div className="register__form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Nom d'utilisateur* :</label>
          <input {...register('username', {
            required: "Hop hop hop mon p'tit loup, t'as oublié ton super pseudo.",
            minLength: {
              value: 3,
              message: 'Ton pseudo doit contenir un minimum de 3 caractères ;)',
            },
          })}
          />
          {/* penser à ajouter un message d'erreur si pseudo existant */}
          {errors.username && <p>{errors.username.message}</p>}
          <label>Adresse e-mail* :</label>
          <input
            type="email"
            {...register('email', {
              required: "Oups, t'as oublié d'indiquer une adresse e-mail.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "L'adresse e-mail indiquée n'est pas valide :(",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <label>Mot de passe* :</label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: "Oups, t'as oublié d'indiquer un mot de passe.",
              minLength: {
                value: 7,
                message: 'Allez un petit effort, nous demandons un minimum de 7 caractères.',
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <label>Confirmez votre mot de passe* :</label>
          <input
            type="password"
            id="confirmPassword"
            {...register('confirmPassword', {
              validate: (value) => value === password.value || 'Ah zut, les mots de passe ne sont pas identiques.',
            })}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          <label>Code postal :</label>
          <input
            {...register('zipcode', {
              valueAsNumber: true,
            })}
          />
          {/* API AVEC UN SELECT SELON LE CODE POSTAL ? */}
          <input type="submit" />
        </form>
      </div>
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

};

export default Register;
