import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { Menu } from 'react-feather';

import classNames from 'classnames';

import './style.scss';

const DropdownBurger = ({ isBurgerOpen }) => (
  <div className={classNames('dropdown', { 'dropdown--open': isBurgerOpen })}>
    <ul className="dropdown__list">
      <Link to=""><li className="dropdown__list-li">Lancer une partie</li></Link>
      {/* <li className="dropdown__list-li">Trouver une partie</li> */}
      <Link to=""><li className="dropdown__list-li">Trouver un joueur</li></Link>
      <div className="dropdown__list-separator" />
      <Link to="/le-jeu/les-roles"><li className="dropdown__list-li">Les roles</li></Link>
      <Link to="/les-jeux"><li className="dropdown__list-li">Les extensions</li></Link>
      <Link to=""><div className="dropdown__list-separator" /></Link>
      {/* Vue conditionnelle pour les suivants */}
      <Link to="/se-connecter"><li className="dropdown__list-li">Sign in</li></Link>
      <Link to="/s'inscrire"><li className="dropdown__list-li">Sign up</li></Link>
      <Link to="/profil"><li className="dropdown__list-li">Mon Compte</li></Link>
      <Link to="/ma-messagerie"><li className="dropdown__list-li">Messagerie</li></Link>
      <Link to="/"><li className="dropdown__list-li">Log out</li></Link>
    </ul>
  </div>
);

DropdownBurger.propTypes = {
  isBurgerOpen: PropTypes.bool.isRequired,

};

export default DropdownBurger;
