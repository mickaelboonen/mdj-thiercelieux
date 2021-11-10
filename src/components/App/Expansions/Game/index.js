/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import DOMPurify from 'dompurify';
import Path from 'src/components/Path';

import './style.scss';

const Game = ({ games }) => {
  const location = useLocation();
  const paths = location.pathname.split('/');
  const gameToDisplay = games.find((game) => game.hash === paths[2]);

  const {
    name,
    description,
    roles,
    image,
    specificity,
  } = gameToDisplay;

  const createMarkup = () => {
    const cleanedSynopsis = DOMPurify.sanitize(description, {
      ALLOWED_TAGS: ['strong', 'p'],
    });
    return {
      __html: cleanedSynopsis,
    };
  };
  const specificityElement = specificity.map((item) => (
    <div>
      <Link to={`${location.pathname}/${item.hash}`}><h5 className="game__roles-title">{item.name}</h5></Link>
      <ul className="game__roles-list">
        {item.rules.map((rule) => <li key={rule.id}>{rule.name}</li>)}
      </ul>
    </div>
  ));
  console.log(roles);
  return (
    <div className="game">
      <Path />
      <div className="game__title">
        <h2>{name}</h2>
      </div>
      <div className="game__content">
        <div className="game__content-synopsis">
          <h4 className="game__content-synopsis-title">Synopsis</h4>
          <img className="game__content-synopsis-image" src={image} alt="" />
          <p className="game__content-synopsis-description" dangerouslySetInnerHTML={createMarkup()} />
        </div>
        <div className="game__content-roles">
          <h4 className="game__content-roles-title">Roles</h4>
          <ul className="game__content-roles-list">
            {roles.map((role) => <li key={role.name} className="game__content-roles-list-item">{role.name}</li>)}
          </ul>
        </div>
        {specificity.length !== 0 && (
          <div className="game__content-specificity">
            <h4 className="game__content-specificity-title">Spécificité{specificity.length > 1 ? 's' : ''}</h4>
            {specificityElement}
          </div>
        )}
      </div>

    </div>
  );
};

Game.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    // STRINGS
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,

    // ARRAYS
    roles: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
    specificity: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      rules: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })).isRequired,
    })).isRequired,
  })).isRequired,

};

export default Game;
