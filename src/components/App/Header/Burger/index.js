import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'react-feather';
import './style.scss';

const Burger = () => (
  <div className="burger">
    <Menu />
    <div className="dropdown">
      <ul className="dropdown__list">
        <li className="dropdown__list-li">Lancer une partie</li>
        {/* <li className="dropdown__list-li">Trouver une partie</li> */}
        <li className="dropdown__list-li">Trouver un joueur</li>
        <div className="dropdown__list-separator" />
        <li className="dropdown__list-li">Les roles</li>
        <li className="dropdown__list-li">Les extensions</li>
        <div className="dropdown__list-separator" />
        {/* Vue conditionnelle pour les suivants */}
        <li className="dropdown__list-li">Sign in</li>
        <li className="dropdown__list-li">Sign up</li>
        <li className="dropdown__list-li">Mon Compte</li>
        <li className="dropdown__list-li">Messagerie</li>
        <li className="dropdown__list-li">Log out</li>
      </ul>
    </div>
  </div>
);

Burger.propTypes = {

};

export default Burger;
