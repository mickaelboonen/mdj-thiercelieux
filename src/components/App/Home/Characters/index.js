import React from 'react';

import { ArrowLeft, ArrowRight } from 'react-feather';
import PropTypes from 'prop-types';

import './style.scss';

const Characters = () => (
  <section className="characters">
    <h2 className="characters__title">Quelques personnages</h2>
    <div className="characters__slider">
      <ArrowLeft />
      <div className="card">LA JOLIE CARTE DE HEL</div>
      <ArrowRight />
    </div>
    {/* A METTRE EN LINK */}
    <a href="#" className="characters__link">Viens découvrir les autres rôles</a>
  </section>
);

Characters.propTypes = {

};

export default Characters;
