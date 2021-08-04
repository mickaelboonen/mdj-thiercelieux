import React from 'react';
import PropTypes from 'prop-types';

import { PieChart } from 'react-feather';
import { UserPlus } from 'react-feather';
import { PlusSquare } from 'react-feather';
import { MessageSquare } from 'react-feather';
import { Info } from 'react-feather';
import { Star } from 'react-feather';

import './style.scss';

const MenuUser = () => (
  <div className="menuUser">
      <div className="menuUser__content">
        <div className="menuUser__link"><Info size={80} className="menuUser__link-icon"/><span className="menuUser__link-menu">Informations personnelles</span></div>
        <div className="menuUser__link"><PieChart size={80} className="menuUser__link-icon"/><span className="menuUser__link-menu">Statistiques</span></div>
        <div className="menuUser__link"><MessageSquare size={80} className="menuUser__link-icon"/><span className="menuUser__link-menu">Messagerie</span></div>
        <div className="menuUser__link"><UserPlus size={80} className="menuUser__link-icon"/><span className="menuUser__link-menu">Mes amis</span></div>
        <div className="menuUser__link"><PlusSquare size={80} className="menuUser__link-icon"/><span className="menuUser__link-menu">Mes créations</span></div>
        <div className="menuUser__link"><Star size={80} className="menuUser__link-icon"/><span className="menuUser__link-menu">Mes préférences</span></div>
      </div>
  </div>
);

MenuUser.propTypes = {

};

export default MenuUser;
