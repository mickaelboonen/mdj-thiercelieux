import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
// import { Menu } from 'react-feather';

import classNames from 'classnames';
import './style.scss';

const Burger = ({ isBurgerOpen, toggleBurger, closeBurger }) => {
  const handleClickOnBurger = () => {
    toggleBurger();
  };

  const location = useLocation();

  useEffect(() => {
    closeBurger();
  }, [location.pathname]);

  return (
    <div className="burger">
      {/* <div className="burger__icon">
        <Menu size={40} onClick={handleClickOnBurger} />
      </div> */}
      <div className={classNames('burger__icon', { 'burger__icon--open': isBurgerOpen })} onClick={handleClickOnBurger}>
        <div />
      </div>
      <div className={classNames('dropdown', { 'dropdown--open': isBurgerOpen })}>
        <ul className="dropdown__list">
          <Link to=""><li className="dropdown__list-li">Lancer une partie</li></Link>
          {/* <li className="dropdown__list-li">Trouver une partie</li> */}
          <Link to=""><li className="dropdown__list-li">Trouver un joueur</li></Link>
          <div className="dropdown__list-separator" />
          <Link to="/le-jeu/les-roles"><li className="dropdown__list-li">Les roles</li></Link>
          <Link to="/les-extensions"><li className="dropdown__list-li">Les extensions</li></Link>
          <Link to=""><div className="dropdown__list-separator" /></Link>
          {/* Vue conditionnelle pour les suivants */}
          <Link to="/se-connecter"><li className="dropdown__list-li">Sign in</li></Link>
          <Link to="/s'inscrire"><li className="dropdown__list-li">Sign up</li></Link>
          <Link to="/profil"><li className="dropdown__list-li">Mon Compte</li></Link>
          <Link to="/ma-messagerie"><li className="dropdown__list-li">Messagerie</li></Link>
          <Link to="/"><li className="dropdown__list-li">Log out</li></Link>
        </ul>
      </div>
    </div>
  );
};

Burger.propTypes = {
  isBurgerOpen: PropTypes.bool.isRequired,

  // FUNCTIONS
  toggleBurger: PropTypes.func.isRequired,
  closeBurger: PropTypes.func.isRequired,
};

export default Burger;
