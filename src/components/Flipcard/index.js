/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import DOMPurify from 'dompurify';

const Flipcard = ({ role }) => {
  const {
    name,
    description,
    image,
    side,
  } = role;

  /**
   * @param string textToSanitize
   * @returns innerHTML
   */
  const createMarkup = () => {
    const cleanedSynopsis = DOMPurify.sanitize(description, {
      ALLOWED_TAGS: ['bnm', 'inm'],
    });
    return {
      __html: cleanedSynopsis,
    };
  };
  return (
    <div className="flip-card">
      <div className="flip-card__inner">
        <div className="flip-card__front">
          <h3 className="flip-card__front-name">{name}</h3>
          <img className="flip-card__front-image" src={image} alt="character" />
          <div className="flip-card__front-div" />
        </div>
        <div className="flip-card__back">
          <h3 className="flip-card__back-name">{name}</h3>
          <p className="flip-card__back-side">{side}</p>
          {/* <p className="flip-card__back-description">{description.match(/(?=[^]{0,387})[^]{0,388}(?:\w\b|\W)/)}..</p> */}
          <p className="flip-card__back-description" dangerouslySetInnerHTML={createMarkup()} />
        </div>
      </div>
    </div>
  );
};

Flipcard.propTypes = {
  role: PropTypes.object.isRequired,
};

export default Flipcard;
