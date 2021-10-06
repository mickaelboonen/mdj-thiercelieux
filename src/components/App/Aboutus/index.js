import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import FlipCard from 'src/components/Flipcard';

import './style.scss';

const Aboutus = ({
  members,
  memberToDisplay,
  displayMember,
  focusMember,
}) => {
  // TODO : tout revoir
  const handleMemberClick = (event) => {
    const chosenMemberId = event.target.dataset.id;
    displayMember(chosenMemberId);
    focusMember();
  };
  return (
    <div className="aboutus">
      <h2 className="aboutus__title">Qui sommes-nous ?</h2>
      <div className="aboutus__content">
        <div className="aboutus__content-staff">
          {members.map((member) => (
            <div
              className="aboutus__content-staff-name"
              key={member.id}
              onClick={handleMemberClick}
            >
              <span data-id={member.id} className="aboutus__content-staff-name-each">{member.name}</span>
              <img src={member.picture} data-id={member.id} alt="" />
            </div>
          ))}
        </div>
        <div className="aboutus__content-info">
          {memberToDisplay.id == null ? <p className="aboutus__content-info-each">Clique sur les images pour découvrir la dream team</p> : (
            <FlipCard role={{
              id: memberToDisplay.id,
              name: memberToDisplay.name,
              picture: memberToDisplay.picture,
              excerpt: '',
              description: memberToDisplay.description,
              firstNight: false,
              side: memberToDisplay.favoriteRole,
              expansion: '',
            }}
            />
          )}
        </div>
        <NavLink to="/" className="aboutus__back-home">
          Retour à la page d'accueil
        </NavLink>
      </div>
    </div>
  );
}

Aboutus.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  })).isRequired,

  memberToDisplay: PropTypes.object.isRequired,

  displayMember: PropTypes.func.isRequired,
  focusMember: PropTypes.func.isRequired,
};

export default Aboutus;
