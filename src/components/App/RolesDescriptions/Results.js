import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { X } from 'react-feather';
import classNames from 'classnames';
import Role from 'src/containers/App/RolesDescriptions/Role';
import Card from 'src/containers/App/RolesDescriptions/Card';
import Flipcard from 'src/components/Flipcard';
import NewMoonFlipcard from 'src/components/Flipcard/NewMoonFlipcard';

import './style.scss';

const Results = ({
  data,
  flipcardData,
  onFocus,
  toggleFocus,
  newMoonCardsPage,
}) => {
  const handleClickOnX = () => {
    toggleFocus();
  };
  // TODO : verifier la hauteur, la dynamiser
  let divStyle = {
    height: `428px`,};
  useEffect(() => {
    const resultsHeight = document.querySelector('.roles__results').offsetHeight;
    console.log(resultsHeight);
    divStyle = {
      height: `${resultsHeight}px`,
    };
  }, []);

  // console.log(resultsHeight);
  return (
    <div className="roles__results">
      {newMoonCardsPage && (
        <div className="roles__results-list">
          {data.map((card) => <Card key={card.id} {...card} />)}
        </div>
      )}
      {!newMoonCardsPage && (
        <div className="roles__results-list">
          {data.map((card) => <Role key={card.id} {...card} />)}
        </div>
      )}
      <div
        className={classNames('roles__results-info', { 'roles__results-info--open': onFocus })}
        style={divStyle}
      >
        <X size={40} onClick={handleClickOnX} />
        <div className="roles__results-info-flipcard">
          {!newMoonCardsPage && <Flipcard role={flipcardData} />}
          {newMoonCardsPage && <NewMoonFlipcard card={flipcardData} />}
        </div>
      </div>
    </div>
  );
};

Results.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,

  flipcardData: PropTypes.object.isRequired,
  toggleFocus: PropTypes.func.isRequired,

  // BOOLEENS
  onFocus: PropTypes.bool.isRequired,
  newMoonCardsPage: PropTypes.bool.isRequired,
};

export default Results;
