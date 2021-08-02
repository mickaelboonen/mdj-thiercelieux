import React from 'react';
import PropTypes from 'prop-types';

import Logo from './Logo';
import Burger from './Burger';

import './style.scss';

const Header = () => (
  <header>
    <nav className="navbar">
      <Logo />
      <Burger />
    </nav>
  </header>
);

Header.propTypes = {

};

export default Header;
