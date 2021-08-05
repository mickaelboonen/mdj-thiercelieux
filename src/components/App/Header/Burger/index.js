import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
// import { Menu } from 'react-feather';

import classNames from 'classnames';
import './style.scss';

const Burger = ({ isBurgerOpen, toggleBurger, closeBurger }) => {
  const handleClickOnBurger = () => {
    toggleBurger();
  };
  // useLocation is a Hook from React Router DOM and can only be used in the body of a component
  const location = useLocation();

  // useEffect is a Hook from React
  // Every change of a variable cause a re rendering of the page
  // useEffect allows to re render the page only when an indicated variable is changed
  // useEffect(classBack function, array)
  useEffect(() => {
    closeBurger();
  }, [location.pathname]);

  return (
    <div className="burger">
      {/* <div className="burger__icon">
        <Menu size={40} onClick={handleClickOnBurger} />
      </div> */}
      <div className={classNames('burger__icon', { 'burger__icon--open': isBurgerOpen })} onClick={handleClickOnBurger}>
        <div />
      </div>
    </div>
  );
};

Burger.propTypes = {
  isBurgerOpen: PropTypes.bool.isRequired,

  // FUNCTIONS
  toggleBurger: PropTypes.func.isRequired,
  closeBurger: PropTypes.func.isRequired,
};

export default Burger;
