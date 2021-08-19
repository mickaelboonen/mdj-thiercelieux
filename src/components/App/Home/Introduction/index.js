import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { Link } from 'react-router-dom';

const Introduction = () => (
  <section className="introduction">
    <div className="introduction__animation">
      Maître du Jeu de Thiercelieux
      <Link to="/configurer-ma-partie/la-partie">
        <button type="button" className="introduction__animation-btn">Lancer une partie</button>
      </Link>
    </div>
    <div className="introduction__presentation">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste officia iusto quas tempore qui similique, at asperiores illum perferendis aspernatur nesciunt voluptates rerum facilis consequatur quia quos est blanditiis! Aspernatur amet sequi maiores voluptatum debitis illum pariatur quasi molestiae quis neque. Sit tempora autem a quos, fuga commodi obcaecati id?</div>
  </section>
);

Introduction.propTypes = {

};

export default Introduction;
