import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import './style.scss';


const Aboutus = ({ 
  members, 
  memberToDisplay,
  displayMember,
  focusMember, 
}) => {
  function handleMemberClick(event) {
    let chosenMemberId = event.target.dataset.id;

    // if (event.target.textContent !== undefined) {
    //   chosenMemberId = event.target.dataset.id;
    // }
    // else {
    //   chosenMemberId = event.target.dataset.id;
    // }
    displayMember(chosenMemberId);
    focusMember();
    console.log('click', event.currentTarget);
  }
 

  return (
    <div className="aboutus">
      <h2>Qui sommes-nous ?</h2>
      <div className="aboutus__content">
        <div className="aboutus__content-staff">
        {members.map((member) => ( 
           <div 
           className="aboutus__content-staff-name" 
           key={member.id} 
           onClick={handleMemberClick}
           >
             <span data-id={member.id} className="aboutus__content-staff-name-each">{member.name}</span>
             <img src={member.icon} data-id={member.id} alt="" />
            </div>
           ))}
        </div>
        <div className="aboutus__content-info">
        {memberToDisplay.id == null ? <div className="aboutus__content-info-each">Clique sur les images pour découvrir la dream team</div> : (
          <div className="flip-card">
            <div className="flip-card__inner">
              <div className="flip-card__front">
                <img className="flip-card__front-image" src={memberToDisplay.icon} alt="team" />
                <h3 className="flip-card__front-name">{memberToDisplay.name}</h3>
              </div>
              <div className="flip-card__back">
                <h3 className="flip-card__back-name">{memberToDisplay.name}</h3>
                <p className="flip-card__back-side">{memberToDisplay.favoriteRole}</p>
                <p className="flip-card__back-description">{memberToDisplay.description}</p>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
      <NavLink
        to="/"
        className="aboutus__back-home"
      >
        Retour à la page d'accueil
      </NavLink>
    </div>
  );
}

Aboutus.propTypes = {

};

export default Aboutus;
