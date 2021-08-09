import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { Link, useHistory, useLocation } from 'react-router-dom';

const Game = ({ games }) => {
  // const location = useLocation().pathname.slice(10);
  // const gameToDisplay = games.find((game) => game.hash === location);

  const location = useLocation()
  const paths = location.pathname.split('/');
  const gameToDisplay = games.find((game) => game.hash === paths[2]);

  const {
    name,
    description,
    roles,
    image,
    specificity,
  } = gameToDisplay;
  console.log(specificity);

  const specificityElement = specificity.map((item) => (
    <div>
      <Link to={`${location.pathname}/${item.name}`}><h5 className="game__roles-title">{item.name}</h5></Link>
      <ul className="game__roles-list">
        {item.rules.map((rule) => <Link to={`${location.pathname}/${rule.name}`}><li key={rule.id}>{rule.name}</li></Link>)}
      </ul>
    </div>
  ));
  return (
    <div className="game">
      <div className="game__path">
        <Link to={paths[0]}> Accueil </Link> &gt; <Link to={`/${paths[1]}`}>Les jeux </Link> &gt; <Link to={paths[2]}> {name}</Link>
      </div>
      <h2 className="game__title">{name}</h2>
      <div className="game__synopsis">
        <h4 className="game__synopsis-title">Synopsis</h4>
        <img className="game__synopsis-image" src={image} alt="" />
        <p className="game__synopsis-description">{description}</p>
      </div>
      <div className="game__roles">
        <h4 className="game__roles-title">Roles</h4>
        <ul className="game__roles-list">
          {roles.map((role) => <Link key={role.id} to="#"><li className="game__roles-list-item">{role.name}</li></Link>)}
        </ul>
      </div>
      {specificity.length !== 0 && (
        <div className="game__specificity">
          <h4 className="game__specificity-title">Spécificité{specificity.length > 1 ? 's' : ''}</h4>
          {specificityElement}
        </div>
      )}
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
