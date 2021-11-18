/* eslint-disable react/no-danger */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { ChevronDown } from 'react-feather';
import Path from 'src/components/Path';

import './style.scss';
import { useLocation } from 'react-router-dom';

const Specificity = ({ games }) => {
  const location = useLocation().pathname.split('/');

  const gameSpec = games.map((game) => {
    const currentSpec = game.specificity.find((spec) => location[3] === spec.hash);
    return currentSpec;
  });
  const currentSpecificity = gameSpec.find((spec) => spec !== undefined);

  // -----------------------------------------------------------------------------------------------
  const { description, rules, name } = currentSpecificity;

  /**
   * @param string textToSanitize
   * @returns innerHTML
   */
  const createMarkup = (textToSanitize) => {
    const cleanedSynopsis = DOMPurify.sanitize(textToSanitize, {
      ALLOWED_TAGS: ['strong', 'p', 'bnm', 'inm'],
    });
    return {
      __html: cleanedSynopsis,
    };
  };

  /**
   * @param {*} event
   * Javascript Vanilla to change classnames on the click event
   */
  const handleClick = (event) => {
    // DOM elements
    const descriptionElements = document.querySelectorAll('.specificity__content-rules-item-description');
    const nameElements = document.querySelectorAll('.specificity__content-rules-item-name');

    // Targeting the DOM element we're intereted in
    const currentId = Number(event.currentTarget.dataset.id) - 1; // -1 'cause the array starts at 0, unlike the IDs
    const currentElementTarget = descriptionElements[currentId];
    const currentNameTarget = nameElements[currentId];

    // Removing the className from all elements
    descriptionElements.forEach((el) => el.classList.remove('specificity__content-rules-item-description--open'));
    nameElements.forEach((el) => el.classList.remove('specificity__content-rules-item-name--open'));

    // Adding the className to the targeted elements
    currentElementTarget.classList.toggle('specificity__content-rules-item-description--open');
    currentNameTarget.classList.toggle('specificity__content-rules-item-name--open');
  };
  return (
    <div className="specificity">
      <Path />
      <div className="specificity__title">
        <h2>
          {name}
        </h2>
      </div>
      <div className="specificity__content">
        <div className="specificity__content-description">
          <h4 className="specificity__content-description-title">Description</h4>
          <p className="specificity__content-description-text" dangerouslySetInnerHTML={createMarkup(description)} />
        </div>
        <div className="specificity__content-rules">
          <h4 className="specificity__content-rules-title">Les règles</h4>
          {rules.map((rule) => (
            <div className="specificity__content-rules-item" key={rule.id}>
              <div data-id={rule.id} className="specificity__content-rules-item-name" onClick={handleClick}>{rule.name} <ChevronDown /></div>
              <div data-id={rule.id} className="specificity__content-rules-item-description" dangerouslySetInnerHTML={createMarkup(rule.description)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Specificity.propTypes = {
  games: PropTypes.array.isRequired,

};

export default Specificity;
