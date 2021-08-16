/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import DOMPurify from 'dompurify';

const newMoonFlipcard = ({ card }) => {
  const {
    name,
    description,
    image,
    phase,
  } = card;
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
  const divStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div className="newmoon-flip-card">
      <div className="newmoon-flip-card__inner">
        <div className="newmoon-flip-card__front">
          <img className="newmoon-flip-card__front-image" src={image} alt="newmooncard" />
          <h2 className="newmoon-flip-card__front-name">{name}</h2>
        </div>
        <div className="newmoon-flip-card__back" style={divStyle}>
          <h3 className="newmoon-flip-card__back-name">{name}</h3>
          <span className="newmoon-flip-card__back-side">{phase}</span>
          <div className="newmoon-flip-card__back-description" dangerouslySetInnerHTML={createMarkup()} />
        </div>
      </div>
    </div>
  );
};

newMoonFlipcard.propTypes = {
  card: PropTypes.object.isRequired,
};

export default newMoonFlipcard;
