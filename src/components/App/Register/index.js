import React from 'react';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import './style.scss';

const Register = () => {

    const { register, handleSubmit } = useForm();

    return(
    <div className="register">
        <h3>Créer mon compte</h3>
        <div className="register__form">
            <form>
                <label>Nom d'utilisateur :</label>
                <input />
                <label>Adresse e-mail :</label>
                <input />
                <label>Mot de passe :</label>
                <input />
                <label>Confirmez votre mot de passe :</label>
                <input />
                <label>Ville :</label>
                <input />
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
}

Register.propTypes = {

};

export default Register;
