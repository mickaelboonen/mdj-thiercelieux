import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from "react-hook-form";

import './style.scss';



const PersonalDetails = () => {

 
  const { 
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm({});


  console.log(watch());

  return (
    <div className="personaldetails">
      <h3>Mes informations personnelles</h3>
      <div className="personaldetails__form">
        <form onSubmit={handleSubmit()} >
          <div className="personaldetails__form-noteditable">
            <label>Pseudo :</label>
              <span>nom du joueur</span>
            
            <label>Email :</label>
              <span>email du joueur</span>
            
          </div>
          <div className="personaldetails__form-editable">
            <label>Mot de passe actuel :</label>
              <input {...register("actualPassword")} type="password" id="actualPassword"/>
            
            <label>Nouveau mot de passe :</label>
              <input 
              type="password"
              id="newPassword" 
              {...register("newPassword", {
                required: "Vous devez préciser un mot de passe.",
                minLength: {
                value: 7,
                message: "Votre mot de passe doit contenir un minimum de 7 caractères."
                }
              })} 
              />
            {errors.newPassword && <p className="errorMessage">{errors.newPassword.message}</p>}
            
            <label>Confirmez le mot de passe :</label>
              <input 
              type="password" 
              id="confirmPassword" 
              {...register("confirmPassword", {
                validate: value => value === newPassword.value || "Les mots de passe ne sont pas identiques." })} 
              />
              {errors.confirmPassword && <p className="errorMessage">{errors.confirmPassword.message}</p>}
            <label>Code postal:</label>
              <input {...register("city")} type="text" id="zipcode"/>
            
            <label>Avatar :</label>
              Changer d'avatar
           
          </div>
          <div className="personaldetails__form-message">Message succès</div>
          <button type="submit" className="personaldetails__form-submit" onClick={handleSubmit()}>Valider les changements</button>
        </form>
      </div>
    </div>
  );
};

PersonalDetails.propTypes = {

};

export default PersonalDetails;
