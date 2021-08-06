import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import './style.scss';

const Aboutus = () => (
  <div className="aboutus">
      <h2>Qui sommes-nous ?</h2>
      <div className="aboutus__content">
          <div className="aboutus__content-staff">
              <img src="https://zupimages.net/up/21/31/tonc.png" alt="" />
              <img src="https://zupimages.net/up/21/31/tonc.png" alt="" />
              <img src="https://zupimages.net/up/21/31/tonc.png" alt="" />
          </div>
          <div className="aboutus__content-info">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum in reiciendis veniam vitae ut harum ea at, nam perspiciatis quas optio ullam, et atque numquam ex sapiente eaque sunt quia.</p>
          </div>
      </div>
      <NavLink
            to="/"
            className="aboutus__back-home"
          >
            Retour à la page d'accueil
          </NavLink>
  </div>
);

Aboutus.propTypes = {

};

export default Aboutus;
