/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import DOMPurify from 'dompurify';
import { useLocation, Link } from 'react-router-dom';
import { chooseDeterminer } from 'src/selectors/functions';

const Flipcard = ({ role }) => {
  const {
    name,
    description,
    picture,
    side,
    excerpt,
    phase,
  } = role;
  const location = useLocation().pathname;
  /**
   * @param string textToSanitize
   * @returns innerHTML
   */
  const createMarkup = () => {
    let textToSanitize = null;
    if (location === '/') {
      textToSanitize = excerpt;
    }
    else {
      textToSanitize = description;
    }
    const cleanedSynopsis = DOMPurify.sanitize(textToSanitize, {
      ALLOWED_TAGS: ['bnm', 'inm'],
    });
    return {
      __html: cleanedSynopsis,
    };
  };
  const determiner = chooseDeterminer(name);
  return (
    <div className="flip-card">
      <div className="flip-card__inner">
        <div className="flip-card__front">
          <h3 className="flip-card__front-name">{name}</h3>
          <img className="flip-card__front-image" src={picture} alt="character" />
          <div className="flip-card__front-div" />
        </div>
        <div className="flip-card__back">
          <div className="flip-card__back-top">
            <h3 className="flip-card__back-top-name">{name}</h3>
            <p className="flip-card__back-top-side">{side}</p>
          </div>
          {/* <p className="flip-card__back-description">{description.match(/(?=[^]{0,387})[^]{0,388}(?:\w\b|\W)/)}..</p> */}
          <p className="flip-card__back-description" dangerouslySetInnerHTML={createMarkup()} />
          {location === '/' && <p className="flip-card__back-link">En savoir plus sur {determiner}<Link to="/le-jeu/les-roles">{name}</Link></p>}
        </div>
      </div>
    </div>
  );
};

Flipcard.propTypes = {
  role: PropTypes.object.isRequired,
};

export default Flipcard;
