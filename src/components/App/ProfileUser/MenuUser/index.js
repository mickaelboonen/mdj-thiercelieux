import React from 'react';
// import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import {
  PieChart,
  UserPlus,
  PlusSquare,
  MessageSquare,
  Info,
  Star,
} from 'react-feather';

import './style.scss';

const MenuUser = () => (
  <div className="menu-user">
    <div className="menu-user__content">
      <NavLink to="/profil/mes-informations">
        <div className="menu-user__content-link">
          <Info size={80} className="menu-user__content-link-icon" />
          <span className="menu-user__content-link-menu">
            Informations personnelles
          </span>
        </div>
      </NavLink>
      <NavLink to="/profil/mes-statistiques">
        <div className="menu-user__content-link">
          <PieChart size={80} className="menu-user__content-link-icon" />
          <span className="menu-user__content-link-menu">
            Statistiques
          </span>
        </div>
      </NavLink>
      <NavLink to="/ma-messagerie">
        <div className="menu-user__content-link">
          <MessageSquare size={80} className="menu-user__content-link-icon" />
          <span className="menu-user__content-link-menu">
            Messagerie
          </span>
        </div>
      </NavLink>
      <NavLink to="/profil/mes-amis">
        <div className="menu-user__content-link">
          <UserPlus size={80} className="menu-user__content-link-icon" />
          <span className="menu-user__content-link-menu">
            Mes amis
          </span>
        </div>
      </NavLink>
      <NavLink to="/profil/mes-créations">
        <div className="menu-user__content-link">
          <PlusSquare size={80} className="menu-user__content-link-icon" />
          <span className="menu-user__content-link-menu">
            Mes créations
          </span>
        </div>
      </NavLink>
      <NavLink to="/profil/mes-préférences">
        <div className="menu-user__content-link">
          <Star size={80} className="menu-user__content-link-icon" />
          <span className="menu-user__content-link-menu">
            Mes préférences
          </span>
        </div>
      </NavLink>
    </div>
  </div>
);

// MenuUser.propTypes = {

// };

export default MenuUser;
