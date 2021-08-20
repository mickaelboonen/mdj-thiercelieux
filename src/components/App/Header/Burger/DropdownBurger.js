import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { Menu } from 'react-feather';

import classNames from 'classnames';

import './style.scss';

const DropdownBurger = ({ isBurgerOpen, isConnected }) => (
  <div className={classNames('dropdown', { 'dropdown--open': isBurgerOpen })}>
    <ul className="dropdown__list">
      <Link to="/configurer-ma-partie/la-partie"><li className="dropdown__list-li">Lancer une partie</li></Link>
      {/* <li className="dropdown__list-li">Trouver une partie</li> */}
      <Link to=""><li className="dropdown__list-li">Trouver un joueur</li></Link>
      <div className="dropdown__list-separator" />
      <Link to="/les-jeux"><li className="dropdown__list-li">Les jeux</li></Link>
      <Link to="/le-jeu/les-roles"><li className="dropdown__list-li">Les Rôles Secrets</li></Link>
      <Link to="/le-jeu/les-cartes-nouvelle-lune"><li className="dropdown__list-li">Les Cartes Nouvelle Lune</li></Link>
      <Link to="/le-jeu/les-villageois"><li className="dropdown__list-li">Les Villageois</li></Link>
      <Link to=""><div className="dropdown__list-separator" /></Link>
      {/* Vue conditionnelle pour les suivants */}
      {isConnected && <Link to="/se-connecter"><li className="dropdown__list-li">Sign in</li></Link>}
      {isConnected && <Link to="/s'inscrire"><li className="dropdown__list-li">Sign up</li></Link>}
      {isConnected && <Link to="/profil"><li className="dropdown__list-li">Mon Compte</li></Link>}
      {isConnected && <Link to="/ma-messagerie"><li className="dropdown__list-li">Messagerie</li></Link>}
      {isConnected && <Link to="/"><li className="dropdown__list-li">Log out</li></Link>}

    </ul>
  </div>
);

DropdownBurger.propTypes = {
  isBurgerOpen: PropTypes.bool.isRequired,
  isConnected: PropTypes.bool.isRequired,

};

export default DropdownBurger;
