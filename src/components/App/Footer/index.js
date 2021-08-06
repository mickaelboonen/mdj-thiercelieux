import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import './style.scss';

const Footer = () => (
  <div className="footer">
    <nav className="footer__navbar">
      <ul className="footer__navbar-list">
        <li>
          <NavLink
            to="/qui-sommes-nous"
          >
            Qui sommes-nous
          </NavLink>
          </li>
        <li>Contactez nous</li>
      </ul>
    </nav>
  </div>
);

Footer.propTypes = {

};

export default Footer;
