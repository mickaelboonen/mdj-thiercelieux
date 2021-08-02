import React from 'react';
import PropTypes from 'prop-types';
import { ArrowLeft, ArrowRight } from 'react-feather';

import './style.scss';

const Expansions = () => (
  <section className="expansions">
    <h2 className="expansions__title">Les extensions</h2>
    <div className="expansions__slider">
      <ArrowLeft />
      <div className="card">LA JOLIE CARTE DE HEL</div>
      <ArrowRight />
    </div>
  </section>
);

Expansions.propTypes = {

};

export default Expansions;
