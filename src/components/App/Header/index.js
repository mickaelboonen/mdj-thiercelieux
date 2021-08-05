import React from 'react';
import PropTypes from 'prop-types';
import Burger from 'src/containers/App/Header/Burger';
import DropdownBurger from 'src/containers/App/Header/Burger/DropdownBurger';

import Logo from './Logo';

import './style.scss';

const Header = () => (
  <header>
    <nav className="navbar">
      <Logo />
      <Burger />
    </nav>
    <DropdownBurger />
    
  </header>
);

Header.propTypes = {

};

export default Header;
